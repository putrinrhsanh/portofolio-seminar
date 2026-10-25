import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-neutral-600">Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Kembali ke Beranda</ButtonLink>
        <ButtonLink href="/refleksi" variant="secondary">
          Lihat Refleksi
        </ButtonLink>
      </div>
    </div>
  );
}
