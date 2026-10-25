/**
 * Helper OPSIONAL untuk tahap lanjutan (Supabase Storage).
 * Website berjalan penuh TANPA file ini dikonfigurasi.
 *
 * Hanya memakai NEXT_PUBLIC_SUPABASE_URL (aman untuk publik).
 * Jangan pernah menaruh service role key di kode frontend atau repository.
 *
 * Contoh pemakaian di file data semester:
 *   url: getPublicDocumentUrl("semester-1/lk-1.pdf")
 * (bucket publik bernama "documents", lihat README bagian Supabase).
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const BUCKET = "documents";

export function isSupabaseConfigured(): boolean {
  return SUPABASE_URL.length > 0;
}

/** URL publik sebuah file di bucket Supabase, atau undefined jika belum dikonfigurasi. */
export function getPublicDocumentUrl(path: string): string | undefined {
  if (!isSupabaseConfigured()) return undefined;
  const clean = path.replace(/^\/+/, "");
  return `${SUPABASE_URL.replace(/\/+$/, "")}/storage/v1/object/public/${BUCKET}/${clean}`;
}
