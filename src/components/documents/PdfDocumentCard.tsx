"use client";

import { Download, ExternalLink, FileText, Maximize2 } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import DownloadLink from "@/components/ui/DownloadLink";
import EmptyDocument from "@/components/ui/EmptyDocument";
import { getDownloadName, isDocumentAvailable } from "@/lib/documents";
import { stageLabels } from "@/lib/utils";
import type { PortfolioDocument } from "@/types/document";
import PdfMiniPreview from "./PdfMiniPreview";
import PdfViewerModal from "./PdfViewerModal";

/**
 * Kartu dokumen: metadata + pratinjau mini + tombol aksi + modal besar.
 * Jika dokumen belum tersedia, hanya menampilkan empty state (tanpa tombol unduh).
 */
export default function PdfDocumentCard({ doc }: { doc: PortfolioDocument }) {
  const [open, setOpen] = useState(false);
  const [pages, setPages] = useState<number | undefined>(doc.pages);
  const ratioRef = useRef(0);
  const available = isDocumentAvailable(doc);
  const url = doc.url ?? "";
  const downloadName = getDownloadName(doc);

  const handleClose = useCallback(() => setOpen(false), []);

  const meta = ["PDF", doc.type, pages ? `${pages} halaman` : null].filter(Boolean).join(" · ");

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-blush bg-white p-4 shadow-sm sm:p-5">
      <header className="flex items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blush-50 text-brand ring-1 ring-blush">
          <FileText aria-hidden className="size-5" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">{doc.title}</h3>
          <p className="mt-0.5 text-xs font-medium text-neutral-600">{meta}</p>
        </div>
        {doc.stage && (
          <span className="ml-auto shrink-0 rounded-full bg-blush-50 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-blush">
            4C · {stageLabels[doc.stage]}
          </span>
        )}
      </header>

      {doc.description && <p className="text-sm leading-relaxed text-neutral-700">{doc.description}</p>}

      {doc.supportReason && (
        <div className="rounded-xl bg-blush-50 p-3 text-sm leading-relaxed text-neutral-700">
          <span className="font-semibold text-brand">Mengapa mendukung refleksi: </span>
          {doc.supportReason}
        </div>
      )}

      {available ? (
        <>
          <PdfMiniPreview
            url={url}
            title={doc.title}
            onOpen={() => setOpen(true)}
            onRatioChange={(r) => (ratioRef.current = r)}
            onLoaded={(n) => setPages((prev) => prev ?? n)}
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7a0b49]"
            >
              <Maximize2 aria-hidden className="size-4" />
              Perbesar
            </button>
            <DownloadLink
              url={url}
              filename={downloadName}
              className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-blush-50"
            >
              <Download aria-hidden className="size-4" />
              Unduh
            </DownloadLink>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-blush-50"
            >
              <ExternalLink aria-hidden className="size-4" />
              Buka di tab baru
            </a>
          </div>
          {open && (
            <PdfViewerModal
              title={doc.title}
              subtitle={meta}
              url={url}
              downloadName={downloadName}
              initialRatio={ratioRef.current}
              onClose={handleClose}
            />
          )}
        </>
      ) : (
        <EmptyDocument note="Pratinjau dan tombol unduh akan muncul setelah file PDF ditambahkan dan statusnya diubah menjadi “available”." />
      )}
    </article>
  );
}
