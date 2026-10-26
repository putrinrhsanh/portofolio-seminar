
"use client";

import { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import {
  ArrowDownToLine,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Images,
  Maximize2,
} from "lucide-react";

// ==========================================
// DATA HASIL PENELITIAN
// ==========================================

const hasilPenelitian = [
  {
    label: "Rata-rata pra-siklus",
    nilai: "70,92",
    keterangan: "Nilai awal sebelum tindakan",
  },
  {
    label: "Rata-rata Siklus II",
    nilai: "86,58",
    keterangan: "Nilai setelah tindakan",
  },
  {
    label: "Ketuntasan pra-siklus",
    nilai: "19,44%",
    keterangan: "7 dari 36 murid",
  },
  {
    label: "Ketuntasan Siklus II",
    nilai: "97,22%",
    keterangan: "35 dari 36 murid",
  },
];

// ==========================================
// DATA TAHAPAN PTK
// ==========================================

const tahapan = [
  {
    nomor: "01",
    judul: "Pra-siklus: Identifikasi kondisi awal",
    isi:
      "Asesmen awal digunakan untuk memetakan pemahaman murid mengenai K3LH. Hasilnya menunjukkan rata-rata 70,92 dengan 7 dari 36 murid mencapai ketuntasan. Temuan ini menjadi dasar penyusunan tindakan.",
  },
  {
    nomor: "02",
    judul: "Siklus I: Observasi dan analisis",
    isi:
      "Murid mengamati rambu K3 di lingkungan sekolah, mengenali fungsi dan makna simbol, serta mendiskusikan kebutuhan rambu berdasarkan kondisi area yang diamati.",
  },
  {
    nomor: "03",
    judul: "Siklus II: Proyek perancangan rambu",
    isi:
      "Murid menerapkan pemahamannya dengan merancang rambu keselamatan. Produk dinilai berdasarkan kesesuaian pesan, simbol, warna, keterbacaan, dan relevansinya dengan kebutuhan keselamatan.",
  },
];

// ==========================================
// DOKUMENTASI FOTO
// Tambah atau ubah foto di bagian ini
// ==========================================


const fotoDokumentasi = [
  {
    src: "/images/rambu1.jpg",
    alt: "Dokumentasi rambu keselamatan pertama",
    caption: "Dokumentasi Rambu Keselamatan 1",
  },
  {
    src: "/images/rambu2.jpg",
    alt: "Dokumentasi rambu keselamatan kedua",
    caption: "Dokumentasi Rambu Keselamatan 2",
  },
  {
    src: "/images/rambu3.jpg",
    alt: "Dokumentasi rambu keselamatan ketiga",
    caption: "Dokumentasi Rambu Keselamatan 3",
  },
  {
    src: "/images/rambu4.jpg",
    alt: "Dokumentasi rambu keselamatan keempat",
    caption: "Dokumentasi Rambu Keselamatan 4",
  },
];


// ==========================================
// LOKASI ARTIKEL PDF
// ==========================================

const artikelPdf = "/documents/artikelPTK.pdf";

// ==========================================
// HALAMAN KARYA INOVASI
// ==========================================

export default function KaryaInovasiPage() {
  const [fotoAktif, setFotoAktif] = useState(0);

  const fotoSebelumnya = () => {
    setFotoAktif((sebelumnya) =>
      (sebelumnya - 1 + fotoDokumentasi.length) %
      fotoDokumentasi.length
    );
  };

  const fotoBerikutnya = () => {
    setFotoAktif((sebelumnya) =>
      (sebelumnya + 1) % fotoDokumentasi.length
    );
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">

      {/* ==================================
          BREADCRUMB
      ================================== */}

      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Karya Inovasi" },
        ]}
      />

      {/* ==================================
          HERO / JUDUL PENELITIAN
      ================================== */}

      <section className="mb-10 rounded-3xl border border-blush bg-gradient-to-br from-white to-blush-50 p-6 sm:p-10">

        <span className="inline-flex rounded-full bg-blush-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          Penelitian Tindakan Kelas
        </span>

        <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Karya Inovasi
        </h1>

        <h2 className="mt-5 max-w-4xl text-xl font-semibold leading-relaxed text-brand sm:text-2xl">
          Penerapan Pembelajaran Mendalam Berbasis Proyek untuk
          Meningkatkan Pemahaman K3LH melalui Perancangan Rambu
          Keselamatan pada Murid Kelas X TKJ SMK Negeri 2 Salatiga
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-neutral-700">
          Penelitian ini berangkat dari kebutuhan untuk menghadirkan
          pembelajaran K3LH yang tidak berhenti pada hafalan warna dan
          simbol. Murid diajak menghubungkan konsep keselamatan dengan
          kondisi nyata di lingkungan sekolah, menganalisis kebutuhan
          rambu, dan menerapkan pemahamannya melalui proyek perancangan.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {[
            "Kelas X TKJ",
            "36 murid",
            "2 siklus tindakan",
            "SMK Negeri 2 Salatiga",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-blush bg-white px-3 py-2 text-neutral-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ==================================
          RINGKASAN HASIL
      ================================== */}

      <section className="mb-14">

        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Ringkasan hasil
          </p>

          <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
            Perkembangan Hasil Belajar
          </h2>

          <p className="mt-2 leading-7 text-neutral-600">
            Perbandingan data awal dan hasil Siklus II menunjukkan
            perubahan hasil belajar selama tindakan penelitian.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hasilPenelitian.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-blush bg-white p-5 shadow-sm"
            >
              <p className="text-sm leading-6 text-neutral-600">
                {item.label}
              </p>

              <p className="mt-3 font-display text-3xl font-semibold text-brand">
                {item.nilai}
              </p>

              <p className="mt-2 text-xs leading-5 text-neutral-500">
                {item.keterangan}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ==================================
          LATAR BELAKANG DAN TUJUAN
      ================================== */}

      <section className="mb-14">

        <h2 className="font-display text-2xl font-semibold text-ink">
          Latar Belakang dan Tujuan
        </h2>

        <div className="mt-5 grid gap-5 md:grid-cols-2">

          <article className="rounded-2xl border border-blush bg-white p-6">

            <h3 className="text-lg font-semibold text-brand">
              Permasalahan Pembelajaran
            </h3>

            <p className="mt-3 leading-7 text-neutral-700">
              Pemahaman K3LH perlu mencakup kemampuan membaca makna rambu,
              mengenali potensi bahaya, dan menentukan pesan keselamatan
              yang sesuai dengan konteks. Data pra-siklus menunjukkan
              rata-rata 70,92. Sebanyak 29 dari 36 murid belum mencapai
              ketuntasan.
            </p>

          </article>

          <article className="rounded-2xl border border-blush bg-white p-6">

            <h3 className="text-lg font-semibold text-brand">
              Tujuan Tindakan
            </h3>

            <ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-neutral-700">
              <li>
                Menguatkan pemahaman fungsi, warna, bentuk, dan simbol
                rambu K3.
              </li>

              <li>
                Menghubungkan materi dengan hasil pengamatan lingkungan
                sekolah.
              </li>

              <li>
                Melatih murid menerapkan konsep melalui perancangan
                rambu yang relevan dengan kebutuhan keselamatan.
              </li>
            </ul>

          </article>

        </div>
      </section>

      {/* ==================================
          PELAKSANAAN TINDAKAN
      ================================== */}

      <section className="mb-14">

        <h2 className="font-display text-2xl font-semibold text-ink">
          Pelaksanaan Tindakan
        </h2>

        <div className="mt-6 space-y-4">
          {tahapan.map((item) => (
            <article
              key={item.nomor}
              className="flex gap-4 rounded-2xl border border-blush bg-white p-5 sm:p-6"
            >

              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blush-50 font-semibold text-brand">
                {item.nomor}
              </div>

              <div>
                <h3 className="font-semibold text-ink">
                  {item.judul}
                </h3>

                <p className="mt-2 leading-7 text-neutral-700">
                  {item.isi}
                </p>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* ==================================
          HASIL DAN INTERPRETASI
      ================================== */}

      <section className="mb-14 rounded-3xl border border-blush bg-blush-50 p-6 sm:p-8">

        <h2 className="font-display text-2xl font-semibold text-ink">
          Hasil dan Interpretasi
        </h2>

        <p className="mt-4 leading-8 text-neutral-700">
          Rata-rata hasil belajar meningkat dari 70,92 pada pra-siklus
          menjadi 86,58 pada Siklus II, atau bertambah 15,66 poin.
          Ketuntasan meningkat dari 19,44% menjadi 97,22%, atau naik
          77,78 poin persentase. Rata-rata penilaian produk rambu adalah
          83,89, dan 86,11% murid mencapai kriteria produk yang ditetapkan.
        </p>

        <p className="mt-4 leading-8 text-neutral-700">
          Hasil tersebut menunjukkan perkembangan positif dalam konteks
          kelas yang diteliti. Namun, peningkatan nilai tidak dengan
          sendirinya membuktikan bahwa perubahan hanya disebabkan oleh
          satu strategi pembelajaran. Interpretasi tetap perlu
          mempertimbangkan pelaksanaan tindakan, instrumen asesmen,
          pendampingan, dan kondisi pembelajaran.
        </p>

      </section>

      {/* ==================================
          REFLEKSI PROFESIONAL
      ================================== */}

      <section className="mb-14">

        <h2 className="font-display text-2xl font-semibold text-ink">
          Refleksi Profesional
        </h2>

        <div className="mt-5 rounded-2xl border-l-4 border-brand bg-white p-6 shadow-sm sm:p-8">

          <p className="leading-8 text-neutral-700">
            Pengalaman ini menguatkan pemahaman bahwa proyek pembelajaran
            perlu berangkat dari masalah yang dapat diamati dan memberi
            kesempatan kepada murid untuk menerapkan konsep. Dalam
            perancangan rambu, hasil karya tidak hanya dilihat dari
            tampilan visual, tetapi juga dari alasan pemilihan simbol,
            ketepatan pesan, dan kesesuaiannya dengan risiko yang
            hendak dikomunikasikan.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Tindak lanjut yang perlu dijaga adalah memberikan umpan balik
            yang lebih terarah, mendokumentasikan proses dan produk murid,
            serta menggunakan hasil asesmen untuk menentukan bantuan
            belajar berikutnya. Dengan demikian, inovasi pembelajaran
            tidak berhenti pada penyelesaian proyek, tetapi menjadi bagian
            dari perbaikan praktik mengajar secara berkelanjutan.
          </p>

        </div>
      </section>

      {/* ==================================
          DOKUMEN PENDUKUNG
      ================================== */}

      <section className="mb-14">

        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Arsip dan Dokumentasi
          </p>

          <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
            Dokumen Pendukung
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
            Artikel penelitian dan dokumentasi kegiatan sebagai rekam
            proses pelaksanaan penelitian tindakan kelas, mulai dari
            pengamatan lingkungan sekolah hingga perancangan rambu
            keselamatan oleh murid.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-2">

          {/* ================================
              KOLOM KIRI: ARTIKEL PDF
          ================================= */}

          <article className="overflow-hidden rounded-2xl border border-blush bg-white shadow-sm">

            <div className="flex items-center gap-3 border-b border-blush p-5">

              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blush-50 text-brand">
                <FileText size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-ink">
                  Artikel Penelitian
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  Penelitian Tindakan Kelas · PDF
                </p>
              </div>

            </div>

            {/* PRATINJAU PDF */}

            <div className="bg-neutral-100 p-3">
              <iframe
                src={`${artikelPdf}#toolbar=1&navpanes=0`}
                title="Pratinjau Artikel Penelitian Tindakan Kelas"
                className="h-[500px] w-full rounded-lg border border-neutral-200 bg-white"
              />
            </div>

            {/* INFORMASI ARTIKEL */}

            <div className="p-5">

              <h4 className="font-semibold leading-7 text-ink">
                Penerapan Pembelajaran Mendalam Berbasis Proyek
                untuk Meningkatkan Pemahaman K3LH
              </h4>

              {/* TOMBOL ARTIKEL */}

              <div className="mt-5 flex flex-wrap gap-3">

                <a
                  href={artikelPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blush px-4 py-3 text-sm font-semibold text-brand transition hover:bg-blush-50"
                >
                  <Maximize2 size={16} />
                  Perbesar PDF
                  <ExternalLink size={14} />
                </a>

                <a
                  href={artikelPdf}
                  download="Artikel-PTK-K3LH.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <ArrowDownToLine size={16} />
                  Unduh Artikel
                </a>

              </div>
            </div>
          </article>

          {/* ================================
              KOLOM KANAN: SLIDESHOW FOTO
          ================================= */}

          <article className="overflow-hidden rounded-2xl border border-blush bg-white shadow-sm">

            <div className="flex items-center gap-3 border-b border-blush p-5">

              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-blush-50 text-brand">
                <Images size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-ink">
                  Dokumentasi Kegiatan
                </h3>

                <p className="mt-1 text-sm text-neutral-500">
                  Hasil Pembelajaran Siswa
                </p>
              </div>

            </div>

            <div className="p-4 sm:p-5">

              {/* SATU BINGKAI FOTO RASIO 3:4 */}

              <div className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-xl bg-neutral-100">

                <img
                  src={fotoDokumentasi[fotoAktif].src}
                  alt={fotoDokumentasi[fotoAktif].alt}
                  className="h-full w-full object-cover"
                />

                {/* TOMBOL SEBELUMNYA */}

                <button
                  type="button"
                  onClick={fotoSebelumnya}
                  aria-label="Foto sebelumnya"
                  className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-md transition hover:bg-white"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* TOMBOL BERIKUTNYA */}

                <button
                  type="button"
                  onClick={fotoBerikutnya}
                  aria-label="Foto berikutnya"
                  className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-md transition hover:bg-white"
                >
                  <ChevronRight size={22} />
                </button>

                {/* NOMOR FOTO */}

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/65 px-4 py-2 text-xs font-semibold text-white">
                  {fotoAktif + 1} / {fotoDokumentasi.length}
                </div>

              </div>

              {/* KETERANGAN FOTO */}

              <div className="mt-5 text-center">

                <h4 className="font-semibold text-ink">
                  {fotoDokumentasi[fotoAktif].caption}
                </h4>

                <p className="mt-1 text-sm text-neutral-500">
                  Dokumentasi pelaksanaan Pembelajaran K3LH
                </p>

              </div>

              {/* INDIKATOR SLIDE */}

              <div className="mt-5 flex justify-center gap-2">

                {fotoDokumentasi.map((foto, index) => (
                  <button
                    key={foto.src}
                    type="button"
                    onClick={() => setFotoAktif(index)}
                    aria-label={`Tampilkan foto ${index + 1}`}
                    aria-current={
                      fotoAktif === index ? "true" : undefined
                    }
                    className={`h-2.5 rounded-full transition-all ${
                      fotoAktif === index
                        ? "w-7 bg-brand"
                        : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                ))}

              </div>

              {/* BUKA FOTO UKURAN PENUH */}

              <div className="mt-5 flex justify-center">

                <a
                  href={fotoDokumentasi[fotoAktif].src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blush px-4 py-3 text-sm font-semibold text-brand transition hover:bg-blush-50"
                >
                  <Maximize2 size={16} />
                  Lihat Foto Penuh
                </a>

              </div>

            </div>
          </article>

        </div>
      </section>

    </main>
  );
}
