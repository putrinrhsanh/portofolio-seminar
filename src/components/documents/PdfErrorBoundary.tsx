"use client";

import { AlertTriangle } from "lucide-react";
import { Component, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  url: string;
  className?: string;
  children: ReactNode;
}

/**
 * Penangkap error untuk penampil PDF. Jika PDF.js gagal berjalan di sebuah browser
 * (mis. browser terlalu lama), kartu dokumen tetap tampil dan pengunjung masih bisa
 * membuka atau mengunduh PDF-nya, alih-alih seluruh halaman rusak.
 */
export default class PdfErrorBoundary extends Component<Props, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Penampil PDF gagal:", error);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div
        role="alert"
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-neutral-100 p-6 text-center text-sm text-neutral-700",
          this.props.className,
        )}
      >
        <AlertTriangle aria-hidden className="size-6 text-brand" />
        <p className="font-semibold">Pratinjau tidak dapat ditampilkan di browser ini.</p>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline">
          Buka PDF di tab baru
        </a>
      </div>
    );
  }
}
