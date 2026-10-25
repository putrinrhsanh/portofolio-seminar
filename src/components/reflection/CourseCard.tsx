import { ArrowRight, CheckCircle2, CircleDashed, FileCheck2, FileX2 } from "lucide-react";
import Link from "next/link";
import { isDocumentAvailable } from "@/lib/documents";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/reflection";

function Status({ ok, okText, noText, Icon, NoIcon }: { ok: boolean; okText: string; noText: string; Icon: typeof CheckCircle2; NoIcon: typeof CircleDashed }) {
  const I = ok ? Icon : NoIcon;
  return (
    <li className={cn("flex items-center gap-2 text-sm", ok ? "font-medium text-brand" : "text-neutral-600")}>
      <I aria-hidden className="size-4 shrink-0" />
      {ok ? okText : noText}
    </li>
  );
}

interface CourseCardProps {
  course: Course;
  index: number;
  reflectionFilled: boolean;
}

/** Kartu mata kuliah pada halaman daftar semester. */
export default function CourseCard({ course, index, reflectionFilled }: CourseCardProps) {
  const docCount = course.documents.filter(isDocumentAvailable).length;
  const href = `/refleksi/semester-${course.semester}/${course.slug}`;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-blush bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-light hover:shadow-md motion-reduce:transform-none sm:p-6">
      <span aria-hidden className="font-display text-4xl font-semibold text-blush">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">{course.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{course.description}</p>


      <ul className="mt-4 space-y-1.5">
        <Status ok={reflectionFilled} okText="Refleksi tersedia" noText="Refleksi belum diisi" Icon={CheckCircle2} NoIcon={CircleDashed} />
        <Status
          ok={docCount > 0}
          okText={`${docCount} dokumen tersedia`}
          noText="Dokumen belum diunggah"
          Icon={FileCheck2}
          NoIcon={FileX2}
        />
      </ul>

      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors after:absolute after:inset-0 after:content-[''] hover:bg-[#7a0b49]"
      >
        Lihat Refleksi
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
      </Link>
    </article>
  );
}
