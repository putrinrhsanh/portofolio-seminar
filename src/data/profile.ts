/**
 * Konten profil untuk halaman Beranda, Profil, dan Kontak.
 */

export const profile = {
  name: "Putri Nur Hasanah",
  role: "PPG Calon Guru",
  subject: "Informatika",
  university: "Universitas Kristen Satya Wacana (UKSW)",

  heroHeadline: "Belajar, Berefleksi, dan Bertumbuh Menjadi Guru Profesional",

  heroIntro:
    "Saya Putri Nur Hasanah, Mahasiswa PPG Calon Guru di Universitas Kristen Satya Wacana. Portofolio ini mendokumentasikan refleksi, pengalaman pembelajaran, artefak, dan pengembangan diri saya selama mempersiapkan diri menjadi guru profesional.",

  /** Foto profil */
photo: "/images/profil.png",

  /** Riwayat pendidikan */
  education: [
    {
      level: "Sekolah Menengah Atas",
      institution: "SMA Negeri 8 Tangerang Selatan",
      period: "2018 – 2021",
    },
    {
      level: "Sarjana (S1)",
      institution: "Universitas Negeri Semarang (UNNES)",
      period: "2021 – 2025",
      note: "Pendidikan Teknik Informatika dan Komputer",
    },
    {
      level: "Pendidikan Profesi Guru (PPG)",
      institution: "Universitas Kristen Satya Wacana (UKSW)",
      period: "Februri 2026 – Sekarang",
      note: "Bidang studi Informatika",
    },
  ] as { level: string; institution: string; period: string; note?: string }[],

  /** Motivasi menjadi guru */
  motivation:
    "Saya ingin menjadi guru yang mampu mempersiapkan murid menghadapi kebutuhan kehidupan nyata, bukan sekadar menyelesaikan materi pelajaran. Saya ingin menciptakan suasana belajar yang membuat murid nyaman untuk bertanya, berdiskusi, dan mengembangkan potensinya. Bagi saya, menjadi guru berarti bersedia mendampingi proses belajar murid dengan hangat, sekaligus bersikap tegas dan adil dalam hal disiplin serta tanggung jawab.",

  /** Nilai pribadi sebagai calon guru */
  values: [
    {
      title: "Hangat dan Empatik",
      description:
        "Membangun komunikasi terbuka, mendengarkan murid, dan berusaha memahami kesulitan mereka.",
    },
    {
      title: "Tegas dan Adil",
      description:
        "Menjaga disiplin dan tanggung jawab melalui aturan yang jelas dan konsisten tanpa merendahkan murid.",
    },
    {
      title: "Pembelajaran Bermakna",
      description:
        "Menghubungkan pembelajaran dengan situasi nyata agar murid memahami manfaat ilmu yang dipelajari.",
    },
    {
      title: "Reflektif",
      description:
        "Mengevaluasi pengalaman dan praktik pembelajaran sebagai dasar untuk memperbaiki diri.",
    },
  ],

  /** Kompetensi guru */
  competencies: [
    {
      title: "Pedagogik",
      description:
        "Merancang, melaksanakan, dan mengevaluasi pembelajaran sesuai kebutuhan serta karakteristik murid.",
    },
    {
      title: "Profesional",
      description:
        "Mengembangkan penguasaan materi Informatika dan menghubungkannya dengan penerapan dalam kehidupan nyata.",
    },
    {
      title: "Sosial",
      description:
        "Membangun komunikasi dan kerja sama yang baik dengan murid, rekan guru, dan warga sekolah.",
    },
    {
      title: "Kepribadian",
      description:
        "Mengembangkan sikap bertanggung jawab, disiplin, terbuka terhadap masukan, dan konsisten memperbaiki diri.",
    },
  ],

  /** Tautan kontak */
  contacts: [
    {
      label: "Email",
      display: "putrinrhasanah19@gmail.com",
      href: "mailto:putrinrhasanah19@gmail.com",
    },
    {
      label: "WhatsApp",
      display: "085212281618",
      href: "https://wa.me/6285212281618",
    },
    {
      label: "LinkedIn",
      display: "linkedin.com/in/putrinrhsnh",
      href: "https://www.linkedin.com/in/putrinrhsnh/",
    },
  ] as { label: string; href: string; display: string }[],
};

/** Garis waktu portofolio di Beranda */
export const journey = [
  {
    title: "Semester 1",
    description:
      "Refleksi mata kuliah Semester 1 dengan model 4C beserta artefak pendukungnya.",
    href: "/refleksi/semester-1",
  },
  {
    title: "Semester 2",
    description:
      "Refleksi mata kuliah Semester 2 yang melanjutkan dan memperdalam proses belajar.",
    href: "/refleksi/semester-2",
  },
  {
    title: "Refleksi Keseluruhan PPG",
    description:
      "Pandangan tentang pendidikan Indonesia, upaya menjadi guru profesional, dan rencana tindak lanjut.",
    href: "/refleksi/keseluruhan-ppg",
  },
  {
    title: "Visi dan Misi",
    description:
      "Arah pengembangan diri untuk menjadi guru yang hangat, tegas, reflektif, dan mampu menghadirkan pembelajaran bermakna.",
    href: "/visi-misi",
  },
];