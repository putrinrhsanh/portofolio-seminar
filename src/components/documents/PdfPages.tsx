"use client";

/**
 * Renderer PDF berbasis PDF.js (react-pdf). JANGAN diimpor langsung dari halaman;
 * gunakan PdfScroller (versi dynamic, hanya jalan di browser).
 *
 * - Semua halaman ditata dalam satu area yang dapat di-scroll vertikal.
 * - Halaman hanya digambar ketika mendekati area terlihat (lazy), dan dibuang lagi
 *   saat jauh, sehingga dokumen panjang tetap ringan.
 */

import { AlertTriangle, LoaderCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { cn } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const PAGE_PADDING = 12; // px, sama dengan p-3 pada wrapper dokumen

export interface PdfPagesProps {
  url: string;
  /** Class untuk area scroll (atur tinggi di sini, mis. "h-80"). */
  className?: string;
  /** Pembesaran lebar halaman (1 = selebar area). */
  zoom?: number;
  /** Posisi scroll awal sebagai rasio 0–1. */
  initialRatio?: number;
  onRatioChange?: (ratio: number) => void;
  onLoaded?: (numPages: number) => void;
  /** Jika diisi, klik pada halaman (atau Enter saat area fokus) memanggil fungsi ini. */
  onActivate?: () => void;
  label: string;
}

function Spinner({ text }: { text: string }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-2 p-8 text-sm text-neutral-600">
      <LoaderCircle aria-hidden className="size-6 animate-spin text-brand" />
      {text}
    </div>
  );
}

function LazyPage({
  pageNumber,
  width,
  height,
  root,
}: {
  pageNumber: number;
  width: number;
  height: number;
  root: HTMLDivElement | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(pageNumber <= 2);

  useEffect(() => {
    const el = ref.current;
    if (!el || !root) return;
    const io = new IntersectionObserver(([entry]) => setNear(entry.isIntersecting), {
      root,
      rootMargin: "700px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, [root]);

  return (
    <div
      ref={ref}
      style={{ width, height }}
      className="shrink-0 overflow-hidden bg-white shadow-sm ring-1 ring-black/10"
      aria-label={`Halaman ${pageNumber}`}
    >
      {near && (
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading={<Spinner text={`Memuat halaman ${pageNumber}…`} />}
        />
      )}
    </div>
  );
}

export default function PdfPages({
  url,
  className,
  zoom = 1,
  initialRatio = 0,
  onRatioChange,
  onLoaded,
  onActivate,
  label,
}: PdfPagesProps) {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [aspect, setAspect] = useState(1.414); // tinggi/lebar halaman (A4 sebagai perkiraan awal)
  const [failed, setFailed] = useState(false);
  const restored = useRef(false);

  // Stabilkan objek `file` agar dokumen tidak dimuat ulang pada setiap render.
  const file = useMemo(() => ({ url }), [url]);

  useEffect(() => {
    if (!root) return;
    const update = () => setContainerWidth(root.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(root);
    return () => ro.disconnect();
  }, [root]);

  const pageWidth = Math.max(0, Math.floor((containerWidth - PAGE_PADDING * 2) * zoom));
  const pageHeight = Math.round(pageWidth * aspect);

  // Pulihkan posisi scroll (mis. saat berpindah dari pratinjau mini ke modal).
  useEffect(() => {
    if (!root || restored.current || numPages === 0 || pageWidth === 0) return;
    restored.current = true;
    if (initialRatio > 0) {
      root.scrollTop = initialRatio * Math.max(0, root.scrollHeight - root.clientHeight);
    }
  }, [root, numPages, pageWidth, initialRatio]);

  async function handleLoadSuccess(pdf: { numPages: number; getPage: (n: number) => Promise<{ getViewport: (o: { scale: number }) => { width: number; height: number } }> }) {
    try {
      const first = await pdf.getPage(1);
      const vp = first.getViewport({ scale: 1 });
      if (vp.width > 0) setAspect(vp.height / vp.width);
    } catch {
      // tetap memakai perkiraan aspek awal
    }
    setNumPages(pdf.numPages);
    onLoaded?.(pdf.numPages);
  }

  function handleScroll() {
    if (!root || !onRatioChange) return;
    const max = root.scrollHeight - root.clientHeight;
    onRatioChange(max > 0 ? root.scrollTop / max : 0);
  }

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    // Klik pada scrollbar (target = area scroll itu sendiri) tidak membuka modal.
    if (onActivate && e.target !== e.currentTarget) onActivate();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (onActivate && e.key === "Enter" && e.target === e.currentTarget) {
      e.preventDefault();
      onActivate();
    }
  }

  return (
    <div
      ref={setRoot}
      role="region"
      aria-label={label}
      tabIndex={0}
      onScroll={handleScroll}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn("pdf-scroll overflow-auto bg-neutral-100", onActivate && "cursor-zoom-in", className)}
    >
      <Document
        file={file}
        onLoadSuccess={handleLoadSuccess}
        onLoadError={() => setFailed(true)}
        onSourceError={() => setFailed(true)}
        loading={<Spinner text="Memuat dokumen…" />}
        error={
          <div role="alert" className="flex flex-col items-center gap-2 p-8 text-center text-sm text-neutral-700">
            <AlertTriangle aria-hidden className="size-6 text-brand" />
            <p className="font-semibold">Dokumen tidak dapat ditampilkan.</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-brand underline">
              Coba buka di tab baru
            </a>
          </div>
        }
        noData={<Spinner text="Memuat dokumen…" />}
        className="flex w-max min-w-full flex-col items-center gap-3 p-3"
      >
        {!failed &&
          pageWidth > 0 &&
          Array.from({ length: numPages }, (_, i) => (
            <LazyPage key={i + 1} pageNumber={i + 1} width={pageWidth} height={pageHeight} root={root} />
          ))}
      </Document>
    </div>
  );
}
