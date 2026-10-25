import { FileX2 } from "lucide-react";

/** Empty state untuk dokumen yang belum diunggah. Tidak menampilkan pratinjau palsu. */
export default function EmptyDocument({ title, note }: { title?: string; note?: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-blush-50 px-6 py-10 text-center">
      <span className="mb-3 grid size-12 place-items-center rounded-full bg-white text-brand ring-1 ring-blush">
        <FileX2 aria-hidden className="size-6" />
      </span>
      {title && <p className="mb-1 text-sm font-semibold text-ink">{title}</p>}
      <p className="font-semibold text-brand">Dokumen belum diunggah</p>
      {note && <p className="mt-2 max-w-sm text-sm text-neutral-600">{note}</p>}
    </div>
  );
}
