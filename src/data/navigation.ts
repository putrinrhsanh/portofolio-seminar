export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

/** Menu utama. Ubah di sini untuk mengganti isi navbar dan footer. */
export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  {
    label: "Refleksi",
    href: "/refleksi",
    children: [
      { label: "Semester 1", href: "/refleksi/semester-1", description: "Refleksi mata kuliah Semester 1" },
      { label: "Semester 2", href: "/refleksi/semester-2", description: "Refleksi mata kuliah Semester 2" },
      { label: "Keseluruhan PPG", href: "/refleksi/keseluruhan-ppg", description: "Refleksi pengalaman belajar selama PPG" },
    ],
  },
  { label: "Visi & Misi", href: "/visi-misi" },
  { label: "Kontak", href: "/kontak" },
];
