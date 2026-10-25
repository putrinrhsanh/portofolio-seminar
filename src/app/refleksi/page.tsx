import { ArrowRight, BookMarked, Layers, Sprout } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCourses } from "@/lib/courses";

export const metadata: Metadata = { title: "Refleksi Pengalaman Belajar" };

export default function RefleksiPage() {
  const cards = [
    {
      href: "/refleksi/semester-1",
      title: "Semester 1",
      text: `${getCourses(1).length} mata kuliah dengan refleksi 4C dan artefak pendukung.`,
      Icon: BookMarked,
    },
    {
      href: "/refleksi/semester-2",
      title: "Semester 2",
      text: `${getCourses(2).length} mata kuliah dengan refleksi 4C dan artefak pendukung.`,
      Icon: Layers,
    },
    {
      href: "/refleksi/keseluruhan-ppg",
      title: "Keseluruhan PPG",
      text: "Pengalaman belajar, pandangan tentang pendidikan Indonesia, dan rencana tindak lanjut.",
      Icon: Sprout,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Refleksi" }]} />
      <SectionHeading
        as="h1"
        eyebrow="Refleksi"
        title="Refleksi Pengalaman Belajar"
        description="Pilih bagian refleksi yang ingin dibaca."
      />
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map(({ href, title, text, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex h-full flex-col rounded-2xl border border-blush bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-light hover:shadow-md motion-reduce:transform-none"
            >
              <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
                <Icon aria-hidden className="size-6" />
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Buka <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
