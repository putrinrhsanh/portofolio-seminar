"use client";

import { Maximize2, MousePointerClick, MoveVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PdfScroller from "./PdfScroller";

interface PdfMiniPreviewProps {
  url: string;
  title: string;
  onOpen: () => void;
  onRatioChange: (ratio: number) => void;
  onLoaded: (numPages: number) => void;
}

/**
 * Pratinjau PDF ringkas: tinggi tetap, dapat di-scroll vertikal di dalam kartu,
 * dan dibuka lebar saat diklik. Dokumen baru dimuat ketika kartu mendekati layar.
 */
export default function PdfMiniPreview({ url, title, onOpen, onRatioChange, onLoaded }: PdfMiniPreviewProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="overflow-hidden rounded-xl border border-blush bg-neutral-100">
      <div className="relative">
        {shouldLoad ? (
          <PdfScroller
            url={url}
            label={`Pratinjau dokumen ${title}. Gulir untuk membaca, tekan Enter untuk memperbesar.`}
            className="h-72 sm:h-80"
            onActivate={onOpen}
            onRatioChange={onRatioChange}
            onLoaded={onLoaded}
          />
        ) : (
          <div className="h-72 sm:h-80" aria-hidden />
        )}
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Perbesar dokumen ${title}`}
          className="absolute right-4 top-3 grid size-9 place-items-center rounded-full bg-white/95 text-brand shadow ring-1 ring-blush transition-colors hover:bg-blush-50"
        >
          <Maximize2 aria-hidden className="size-4" />
        </button>
      </div>
      <p className="flex items-center justify-center gap-4 border-t border-blush bg-white px-3 py-2 text-xs font-medium text-neutral-700">
        <span className="flex items-center gap-1.5">
          <MoveVertical aria-hidden className="size-3.5 text-brand" />
          Scroll untuk membaca
        </span>
        <span aria-hidden className="h-3 w-px bg-neutral-300" />
        <span className="flex items-center gap-1.5">
          <MousePointerClick aria-hidden className="size-3.5 text-brand" />
          Klik untuk memperbesar
        </span>
      </p>
    </div>
  );
}
