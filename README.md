# E-Portofolio Digital PPG — Putri Nur Hasanah

Website e-portofolio PPG Calon Guru Informatika (UKSW): refleksi tiap mata kuliah dengan model 4C, refleksi keseluruhan PPG, visi dan misi, serta pratinjau dokumen PDF yang bisa di-scroll, diperbesar, dan diunduh.

**Teknologi:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Lucide React · Motion · react-pdf (PDF.js).
Ini proyek **Next.js App Router yang sebenarnya** (bukan Vite), siap dibuka di VS Code, disimpan di GitHub, dan dipublikasikan lewat Vercel.

---

## Status konten (baca dulu)

Nama mata kuliah, isi refleksi, dokumen, kontak, dan beberapa teks profil **belum diberikan**, jadi website memakai **placeholder yang jelas** ("Belum diisi", "Dokumen belum diunggah"). Tidak ada refleksi, dokumen, email, atau akun yang dikarang.

| Yang perlu Anda isi | File |
|---|---|
| Nama & refleksi mata kuliah Semester 1 | `src/data/semester-1.ts` (saat ini 6 placeholder) |
| Nama & refleksi mata kuliah Semester 2 | `src/data/semester-2.ts` (saat ini 4 placeholder; sesuaikan jumlahnya) |
| Refleksi keseluruhan PPG | `src/data/reflection-ppg.ts` |
| Profil, foto, kontak | `src/data/profile.ts` |
| Visi, misi, filosofi, komitmen | `src/data/vision-mission.ts` |

Visi dan 5 misi memakai teks yang Anda berikan. Nilai profesional, komitmen, kompetensi, dan tiga rencana tindak lanjut adalah **draf** yang diturunkan dari visi–misi tersebut. Periksa dan ubah agar sesuai pandangan Anda.

---

## 1. Menginstal Node.js

1. Buka <https://nodejs.org> dan unduh versi **LTS** (disarankan Node 20 atau lebih baru; proyek ini diuji dengan Node 22).
2. Pasang seperti biasa, lalu buka Terminal/Command Prompt dan cek:
   ```bash
   node -v
   npm -v
   ```

## 2. Membuka proyek di VS Code

1. Pasang VS Code dari <https://code.visualstudio.com>.
2. **File → Open Folder…** lalu pilih folder `e-portofolio-ppg`.
3. Buka terminal bawaan: **Terminal → New Terminal**.

## 3. Menginstal dependensi

```bash
npm install
```

## 4. Menjalankan website secara lokal

```bash
npm run dev
```

Buka <http://localhost:3000>. Setiap file yang Anda simpan akan langsung memperbarui tampilan. Hentikan dengan `Ctrl + C`.

## 5. Mengedit profil dan visi misi

- Profil, foto, kontak, dan garis waktu beranda: `src/data/profile.ts`
- Visi, misi, filosofi, nilai, komitmen: `src/data/vision-mission.ts`

Aturannya sederhana: teks kosong (`""`) atau daftar kosong (`[]`) tampil sebagai "Belum diisi". Jangan mengisi data yang belum benar.

**Foto profil:** taruh file di `public/images/` (mis. `foto-profil.jpg`), lalu isi `photo: "/images/foto-profil.jpg"` di `profile.ts`.

**Kontak:** tambahkan pada `contacts`, contoh:
```ts
contacts: [
  { label: "Email", href: "mailto:alamat@contoh.com", display: "alamat@contoh.com" },
],
```

## 6. Menambah atau mengubah refleksi mata kuliah

Buka `src/data/semester-1.ts` atau `semester-2.ts`. Setiap mata kuliah adalah satu objek:

```ts
{
  id: "s1-01",
  slug: "pembelajaran-mendalam",     // dipakai di URL, huruf kecil + tanda hubung, harus unik
  title: "Pembelajaran Mendalam",
  semester: 1,
  description: "Deskripsi singkat mata kuliah.",
  connection: "Teks Connection…\n\nParagraf kedua dipisah satu baris kosong.",
  challenge: "…",
  concept: "…",
  change: "…",
  practicalReflection: {
    mostMeaningful: "…",
    mostRelevantConcept: "…",
    teacherPractice: "…",
    exampleApplication: "…",
    intendedChange: "…",
  },
  artifacts: ["LK 1", "Presentasi"],   // label ringkas di kartu (boleh kosong)
  documents: [],                       // lihat bagian 7
}
```

- **Menambah mata kuliah:** salin satu objek, ubah isinya. Halaman `/refleksi/semester-1/<slug>` dibuat **otomatis**; tidak perlu membuat file halaman baru.
- **Menghapus:** hapus objeknya. Jumlah kartu mengikuti jumlah objek.
- Kartu menampilkan "Refleksi tersedia" hanya jika keempat bagian 4C terisi.

## 7. Menambahkan PDF ke folder dokumen

1. Salin file PDF ke `public/documents/semester-1/` (atau `semester-2/`). Gunakan nama sederhana tanpa spasi, mis. `lk-1.pdf`.
2. Daftarkan di `documents` pada mata kuliah yang sesuai (bagian 8).

## 8. Mengubah metadata dokumen agar muncul di halaman yang benar

Dokumen muncul di halaman mata kuliah tempat ia didaftarkan. Contoh:

```ts
documents: [
  {
    id: "s1-01-lk1",                         // unik
    title: "LK 1 — Judul Dokumen",
    type: "LK",                              // LK, Presentasi, RPP, Asesmen, dll.
    description: "Ringkasan isi dokumen.",
    semester: 1,
    courseSlug: "pembelajaran-mendalam",     // sama dengan slug mata kuliahnya
    url: "/documents/semester-1/lk-1.pdf",   // path file di folder public
    downloadName: "LK-1-Putri-Nur-Hasanah.pdf",
    pages: 5,                                // opsional
    stage: "concept",                        // opsional: connection | challenge | concept | change
    supportReason: "Dokumen ini menunjukkan …",
    status: "available",
  },
],
```

- `status: "available"` **dan** `url` terisi → muncul pratinjau, tombol Perbesar, Unduh, dan Buka di tab baru.
- `status: "missing"` atau tanpa `url` → tampil "Dokumen belum diunggah" dan **tanpa** tombol unduh.
- Dua dokumen pertama berstatus tersedia otomatis tampil di bagian **Artefak Pilihan** di Beranda.

## 9. Menjalankan build dan memperbaiki error

```bash
npm run lint    # cek TypeScript
npm run build   # build produksi (sama seperti di Vercel)
```

Jika error, baca pesannya: biasanya menunjuk file dan baris. Penyebab paling umum: tanda koma/kurung hilang di file data, atau `slug` ganda. Pastikan `npm run build` sukses **sebelum** push.

## 10. Membuat repository GitHub

1. Buat akun di <https://github.com>, lalu **New repository** (mis. `e-portofolio-ppg`). Jangan centang "Add a README".
2. Di terminal VS Code, dalam folder proyek:
   ```bash
   git init
   git add .
   git commit -m "Versi awal e-portofolio"
   git branch -M main
   git remote add origin https://github.com/NAMA-ANDA/e-portofolio-ppg.git
   git push -u origin main
   ```

`.gitignore` sudah mengecualikan `node_modules`, `.next`, dan `.env.local`.

## 11. Commit dan push perubahan berikutnya

```bash
git add .
git commit -m "Menambah refleksi mata kuliah 1"
git push
```

## 12. Menghubungkan ke Vercel

1. Masuk ke <https://vercel.com> dengan akun GitHub.
2. **Add New → Project**, pilih repository `e-portofolio-ppg`, klik **Import**.
3. Vercel otomatis mengenali **Next.js**. Biarkan pengaturan bawaan, lalu **Deploy**.
4. Setelah selesai Anda mendapat alamat `https://nama-proyek.vercel.app`.

Tidak ada environment variable yang wajib untuk versi awal.

## 13. Environment variables (hanya jika memakai Supabase)

Salin `.env.example` menjadi `.env.local` untuk lokal (jangan di-commit). Di Vercel: **Project → Settings → Environment Variables**. Hanya `NEXT_PUBLIC_SUPABASE_URL` yang dipakai kode saat ini. **Jangan pernah** memasukkan *service role key* ke variabel berawalan `NEXT_PUBLIC_` atau ke repository.

## 14. Memperbarui website setelah perubahan

Edit file → cek di `npm run dev` → `git add .` → `git commit -m "…"` → `git push`. Setiap push ke branch `main` yang terhubung memicu **deployment otomatis** di Vercel (biasanya selesai dalam 1–2 menit). Push ke branch lain menghasilkan *preview deployment*.

---

## Fitur PDF (cara kerja)

- **Mini preview** (`PdfMiniPreview`): PDF dirender langsung di kartu (tinggi 288–320 px) memakai PDF.js, bisa di-scroll vertikal di dalam kartu tanpa menggeser halaman (`overscroll-behavior: contain`). Halaman digambar *lazy* dan dibuang saat jauh dari layar, sehingga dokumen panjang tetap ringan.
- **Modal besar** (`PdfViewerModal`): klik pratinjau, tombol **Perbesar**, atau tekan Enter saat pratinjau terfokus. Lebar 92% layar di desktop, layar penuh di ponsel. Tutup dengan **Esc**, klik area gelap, atau tombol Tutup. Ada zoom 75–200%, **Buka di tab baru**, dan **Unduh**. Posisi baca dari mode mini dipertahankan. Fokus dikunci di dalam modal.
- **Unduh** (`DownloadLink`): file di situs sendiri memakai atribut `download` dengan nama dari `downloadName`. URL eksternal diambil lewat `fetch` lalu diunduh; bila diblokir (mis. CORS) file dibuka di tab baru.
- **Aman jika gagal:** `PdfErrorBoundary` menjaga agar kegagalan penampil PDF di browser lama tidak merusak halaman; pengunjung tetap bisa membuka PDF di tab baru.
- Komponen: `PdfPages.tsx` (renderer), `PdfScroller.tsx` (pintu masuk, dimuat hanya di browser), `PdfMiniPreview.tsx`, `PdfViewerModal.tsx`, `PdfToolbar.tsx`, `PdfDocumentCard.tsx`.

**Versi yang dikunci:** `react-pdf@10.5.0` dengan `pdfjs-dist@5.4.296` (sengaja sama persis). PDF.js 5.6+ memakai API JavaScript yang sangat baru (`Map.getOrInsertComputed`) dan gagal di browser yang belum mendukungnya. Jangan menaikkan kedua paket ini tanpa menguji pratinjau PDF di beberapa browser.

## Tahap lanjutan: Supabase (opsional)

Versi awal berjalan penuh tanpa backend. Yang sudah tersedia: helper `getPublicDocumentUrl()` di `src/lib/supabase.ts` untuk memakai file dari bucket Supabase **publik** bernama `documents`:

```ts
import { getPublicDocumentUrl } from "@/lib/supabase";
// …
url: getPublicDocumentUrl("semester-1/lk-1.pdf"),
```

Langkah: buat project Supabase → **Storage → New bucket** `documents` (Public) → unggah PDF lewat dashboard Supabase → isi `NEXT_PUBLIC_SUPABASE_URL` → tambahkan dokumen di file data.

**Belum dibuat:** halaman admin dengan autentikasi untuk unggah/ganti/hapus dokumen langsung dari website. Fitur ini memerlukan project Supabase milik Anda untuk dikembangkan dan diuji dengan benar, jadi sengaja tidak disertakan agar tidak ada tombol atau klaim yang belum terbukti berfungsi. Pengunggahan saat ini dilakukan lewat folder `public/documents` atau dashboard Supabase. Jika memakai URL Supabase, pastikan bucket publik dan unggahan hanya dilakukan pemilik akun.

---

## Struktur folder

```text
public/
  images/                 foto profil dan gambar
  documents/semester-1/   PDF Semester 1
  documents/semester-2/   PDF Semester 2
src/
  app/                    halaman & routing (page.tsx per rute, [slug] dinamis)
  components/
    layout/               Navbar, Footer, Breadcrumb
    home/                 HeroSection, JourneyTimeline
    reflection/           CourseCard, CourseGrid, Reflection4C, ReflectionSummary, ArtifactList,
                          SemesterListPage, CourseDetailPage
    documents/            komponen PDF
    ui/                   tombol, judul, placeholder, empty state, animasi
  data/                   SEMUA konten yang Anda edit
  lib/                    fungsi bantu (courses, documents, supabase, utils)
  types/                  tipe TypeScript
```

Warna tema ada di `src/app/globals.css` (`--color-brand` magenta `#910D58`, `--color-blush` pink soft `#FCBEDF`, dst.). Font memakai font sistem agar build tidak bergantung koneksi internet; Anda dapat menggantinya dengan `next/font`.

## Hasil pengujian

Diuji pada build produksi (`npm run build` + `next start`) di Chromium otomatis (Playwright), desktop 1366 px dan ponsel 390 px, dengan PDF uji 8 halaman: **71 pemeriksaan lulus**, mencakup:

- 12 rute dapat dibuka; slug tidak dikenal → 404; Semester 1 dan 2 tidak tertukar.
- PDF mini ter-render (canvas), tinggi 280–360 px, dapat di-scroll di dalam kartu, halaman website tidak ikut bergeser, tidak bocor di ujung dokumen.
- Klik membuka modal; Esc, klik luar, dan tombol Tutup menutupnya; fokus terkunci; zoom bekerja; posisi baca dipertahankan.
- Unduh dari kartu dan dari modal menghasilkan file dengan nama `downloadName` dan isi identik dengan sumber.
- Dokumen berstatus `missing` menampilkan "Dokumen belum diunggah" tanpa pratinjau/tombol unduh palsu.
- Navbar (dropdown, Esc, tautan aktif), menu hamburger ponsel, pencarian mata kuliah, CTA beranda.
- Ponsel: tanpa overflow horizontal, modal hampir layar penuh, halaman PDF muat di layar.
- Tidak ada error konsol; `tsc` dan `next build` bersih.

**Belum diuji:** deployment langsung di Vercel (build-nya sama dengan yang diuji, tetapi Anda perlu mencobanya dengan akun Anda), URL Supabase, serta browser selain Chromium (Safari/Firefox). Setelah menambah PDF asli, coba buka halamannya dan periksa pratinjau, modal, dan unduhan. File PDF yang dipindai/sangat besar dapat dimuat lebih lama.

Dokumen yang ditampilkan di website bersifat publik. Pastikan Anda berhak menampilkannya dan tidak memuat data pribadi pihak lain.
