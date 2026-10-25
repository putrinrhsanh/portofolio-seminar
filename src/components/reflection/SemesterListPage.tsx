import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCourses, isReflectionFilled } from "@/lib/courses";
import CourseGrid from "./CourseGrid";

/** Halaman daftar mata kuliah untuk satu semester (dipakai Semester 1 dan 2). */
export default function SemesterListPage({ semester }: { semester: 1 | 2 }) {
  const courses = getCourses(semester);
  const filledSlugs = courses.filter(isReflectionFilled).map((c) => c.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb
        items={[{ label: "Beranda", href: "/" }, { label: "Refleksi", href: "/refleksi" }, { label: `Semester ${semester}` }]}
      />
      <SectionHeading
        as="h1"
        eyebrow={`Semester ${semester}`}
        title={`Refleksi Mata Kuliah Semester ${semester}`}
      />
      <div className="mt-10">
        <CourseGrid courses={courses} filledSlugs={filledSlugs} />
      </div>
    </div>
  );
}
