import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getCourse, getNeighbors, isReflectionFilled } from "@/lib/courses";
import ArtifactList from "./ArtifactList";
import Reflection4C from "./Reflection4C";
import ReflectionSummary from "./ReflectionSummary";

/** Halaman detail satu mata kuliah (dipakai Semester 1 dan 2). */
export default function CourseDetailPage({ semester, slug }: { semester: 1 | 2; slug: string }) {
  const course = getCourse(semester, slug);
  if (!course) notFound();

  const dataFile = `src/data/semester-${semester}.ts`;
  const listHref = `/refleksi/semester-${semester}`;
  const { prev, next } = getNeighbors(semester, slug);
  const filled = isReflectionFilled(course);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Refleksi", href: "/refleksi" },
          { label: `Semester ${semester}`, href: listHref },
          { label: course.title },
        ]}
      />

      <header>
        <p className="inline-flex rounded-full bg-blush-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand ring-1 ring-blush">
          Semester {semester}
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">{course.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">{course.description}</p>
        {!filled && (
          <p className="mt-4 max-w-2xl rounded-xl border border-dashed border-neutral-300 bg-blush-50 px-4 py-3 text-sm text-neutral-700">
            Refleksi mata kuliah ini belum lengkap. Isi pada <code className="font-mono text-brand">{dataFile}</code>.
          </p>
        )}
        <Link href={listHref} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
          <ArrowLeft aria-hidden className="size-4" />
          Kembali ke daftar mata kuliah
        </Link>
      </header>

      <div className="mt-12 space-y-14">
        <Reflection4C course={course} dataFile={dataFile} />
        <ReflectionSummary data={course.practicalReflection} dataFile={dataFile} />
        <ArtifactList documents={course.documents} dataFile={dataFile} />
      </div>

      <nav aria-label="Mata kuliah lainnya" className="mt-16 grid gap-4 border-t border-blush pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`${listHref}/${prev.slug}`}
            className="rounded-2xl border border-blush p-4 transition-colors hover:border-brand-light hover:bg-blush-50"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
              <ArrowLeft aria-hidden className="size-4" /> Sebelumnya
            </span>
            <span className="mt-1 block font-display font-semibold text-ink">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`${listHref}/${next.slug}`}
            className="rounded-2xl border border-blush p-4 text-right transition-colors hover:border-brand-light hover:bg-blush-50"
          >
            <span className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
              Berikutnya <ArrowRight aria-hidden className="size-4" />
            </span>
            <span className="mt-1 block font-display font-semibold text-ink">{next.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
