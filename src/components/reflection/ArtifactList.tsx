import PdfDocumentCard from "@/components/documents/PdfDocumentCard";
import EmptyDocument from "@/components/ui/EmptyDocument";
import type { PortfolioDocument } from "@/types/document";

/** Daftar artefak pendukung sebuah mata kuliah. */
export default function ArtifactList({ documents, dataFile }: { documents: PortfolioDocument[]; dataFile: string }) {
  return (
    <section aria-labelledby="judul-artefak">
      <h2 id="judul-artefak" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Artefak Pendukung
      </h2>
      <p className="mt-2 max-w-2xl text-neutral-600">
        Dokumen yang mendukung refleksi pada mata kuliah ini. Gulir pratinjau untuk membaca, klik untuk memperbesar.
      </p>
      <div className="mt-6">
        {documents.length === 0 ? (
          <EmptyDocument note={`Belum ada artefak untuk mata kuliah ini. Tambahkan dokumen pada ${dataFile}.`} />
        ) : (
          <ul className="grid gap-6 lg:grid-cols-2">
  {documents.map((doc) => (
    <li key={doc.id ?? doc.url}>
      <PdfDocumentCard doc={doc} />
    </li>
  ))}
</ul>
        )}
      </div>
    </section>
  );
}
