"use client";

/**
 * Pintu masuk penampil PDF untuk komponen lain.
 * - PdfPages (PDF.js) dimuat hanya di browser (ssr: false): PDF.js butuh API browser.
 * - PdfErrorBoundary menjaga agar kegagalan PDF.js tidak merusak halaman.
 */

import { LoaderCircle } from "lucide-react";
import dynamic from "next/dynamic";
import type { PdfPagesProps } from "./PdfPages";
import PdfErrorBoundary from "./PdfErrorBoundary";

const PdfPagesLazy = dynamic(() => import("./PdfPages"), {
  ssr: false,
  loading: () => (
    <div role="status" className="flex min-h-40 flex-col items-center justify-center gap-2 text-sm text-neutral-600">
      <LoaderCircle aria-hidden className="size-6 animate-spin text-brand" />
      Menyiapkan penampil PDF…
    </div>
  ),
});

export default function PdfScroller(props: PdfPagesProps) {
  return (
    <PdfErrorBoundary url={props.url} className={props.className}>
      <PdfPagesLazy {...props} />
    </PdfErrorBoundary>
  );
}
