"use client";

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import PdfScroller from "./PdfScroller";
import PdfToolbar from "./PdfToolbar";

interface PdfViewerModalProps {
  title: string;
  subtitle: string;
  url: string;
  downloadName: string;
  /** Posisi scroll awal (0–1), diteruskan dari pratinjau mini. */
  initialRatio: number;
  onClose: () => void;
}

const ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2];

/**
 * Tampilan besar PDF (lightbox).
 * Escape / klik di luar / tombol Tutup menutup modal. Fokus dikunci di dalam modal
 * dan dikembalikan ke elemen pemicu saat ditutup. Scroll halaman di belakang dikunci.
 */
export default function PdfViewerModal({ title, subtitle, url, downloadName, initialRatio, onClose }: PdfViewerModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [zoomIndex, setZoomIndex] = useState(1);

  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [close]);

  // Jaga agar Tab tidak keluar dari modal.
  function trapFocus(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const zoom = ZOOM_STEPS[zoomIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 sm:p-5"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={trapFocus}
        className="flex h-dvh w-screen flex-col overflow-hidden bg-white shadow-2xl sm:h-[92vh] sm:w-[92vw] sm:max-w-[1400px] sm:rounded-2xl"
      >
        <PdfToolbar
          title={title}
          subtitle={subtitle}
          url={url}
          downloadName={downloadName}
          zoom={zoom}
          canZoomIn={zoomIndex < ZOOM_STEPS.length - 1}
          canZoomOut={zoomIndex > 0}
          onZoomIn={() => setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
          onZoomOut={() => setZoomIndex((i) => Math.max(0, i - 1))}
          onClose={close}
          closeRef={closeRef}
          titleId={titleId}
        />
        <PdfScroller
          url={url}
          label={`Isi dokumen ${title}. Gulir untuk membaca.`}
          zoom={zoom}
          initialRatio={initialRatio}
          className="min-h-0 flex-1"
        />
      </div>
    </div>,
    document.body,
  );
}
