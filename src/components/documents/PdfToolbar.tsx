"use client";

import { Download, ExternalLink, FileText, Minus, Plus, X } from "lucide-react";
import type { Ref } from "react";
import DownloadLink from "@/components/ui/DownloadLink";

interface PdfToolbarProps {
  title: string;
  subtitle: string;
  url: string;
  downloadName: string;
  zoom: number;
  canZoomIn: boolean;
  canZoomOut: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onClose: () => void;
  closeRef?: Ref<HTMLButtonElement>;
  titleId: string;
}

const iconBtn =
  "grid size-10 place-items-center rounded-full text-brand transition-colors hover:bg-blush-50 disabled:cursor-not-allowed disabled:opacity-40";

/** Toolbar modal PDF: judul, zoom, buka di tab baru, unduh, dan tutup. */
export default function PdfToolbar({
  title,
  subtitle,
  url,
  downloadName,
  zoom,
  canZoomIn,
  canZoomOut,
  onZoomIn,
  onZoomOut,
  onClose,
  closeRef,
  titleId,
}: PdfToolbarProps) {
  return (
    <div className="flex items-center gap-2 border-b border-blush bg-white px-3 py-2 sm:gap-3 sm:px-4">
      <span className="hidden size-10 shrink-0 place-items-center rounded-full bg-blush-50 text-brand sm:grid">
        <FileText aria-hidden className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <h2 id={titleId} className="truncate font-display text-base font-semibold text-ink sm:text-lg">
          {title}
        </h2>
        <p className="truncate text-xs text-neutral-600">{subtitle}</p>
      </div>

      <div className="flex items-center" role="group" aria-label="Pembesaran">
        <button type="button" className={iconBtn} onClick={onZoomOut} disabled={!canZoomOut} aria-label="Perkecil">
          <Minus aria-hidden className="size-5" />
        </button>
        <span aria-live="polite" className="w-12 text-center text-xs font-semibold tabular-nums text-neutral-700">
          {Math.round(zoom * 100)}%
        </span>
        <button type="button" className={iconBtn} onClick={onZoomIn} disabled={!canZoomIn} aria-label="Perbesar">
          <Plus aria-hidden className="size-5" />
        </button>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="Buka PDF di tab baru"
        title="Buka di tab baru"
      >
        <ExternalLink aria-hidden className="size-5" />
      </a>
      <DownloadLink
        url={url}
        filename={downloadName}
        className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-[#7a0b49]"
      >
        <Download aria-hidden className="size-4" />
        <span className="hidden sm:inline">Unduh</span>
        <span className="sr-only sm:hidden">Unduh PDF</span>
      </DownloadLink>
      <button ref={closeRef} type="button" className={iconBtn} onClick={onClose} aria-label="Tutup">
        <X aria-hidden className="size-6" />
      </button>
    </div>
  );
}
