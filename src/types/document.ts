/**
 * Tipe data dokumen (artefak) PDF.
 * Setiap dokumen yang ditampilkan di website mengikuti struktur ini.
 */

/** Tahap refleksi model 4C yang didukung oleh sebuah dokumen. */
export type ReflectionStage = "connection" | "challenge" | "concept" | "change";

/**
 * "available" = file PDF sudah ada dan boleh ditampilkan.
 * "missing"   = file belum diunggah (website menampilkan "Dokumen belum diunggah").
 */
export type DocumentStatus = "available" | "missing";

export interface PortfolioDocument {
  id: string;
  title: string;
  /** Jenis dokumen, contoh: "LK", "Presentasi", "Rancangan Pembelajaran". */
  type: string;
  description: string;
  semester: 1 | 2;
  /** Slug mata kuliah pemilik dokumen (harus sama dengan slug di file data semester). */
  courseSlug: string;
  /** Contoh: "/documents/semester-1/lk-1.pdf" atau URL publik Supabase. */
  url?: string;
  /** Nama file saat diunduh, contoh: "LK-1-Putri-Nur-Hasanah.pdf". */
  downloadName?: string;
  /** Jumlah halaman (opsional, hanya untuk informasi). */
  pages?: number;
  /** Tahap 4C yang didukung dokumen ini (opsional). */
  stage?: ReflectionStage;
  /** Alasan dokumen ini mendukung refleksi. */
  supportReason?: string;
  status: DocumentStatus;
}
