import type { PortfolioDocument } from "@/types/document";

/** Dokumen dianggap tersedia hanya jika statusnya "available" DAN URL-nya terisi. */
export function isDocumentAvailable(doc: PortfolioDocument): boolean {
  return doc.status === "available" && Boolean(doc.url);
}

/** Nama file unduhan: memakai downloadName, atau dibuat dari judul. */
export function getDownloadName(doc: PortfolioDocument): string {
  if (doc.downloadName) return doc.downloadName;
  const safe = doc.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${safe || "dokumen"}.pdf`;
}
