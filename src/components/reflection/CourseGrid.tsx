"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Course } from "@/types/reflection";
import CourseCard from "./CourseCard";

interface CourseGridProps {
  courses: Course[];
  /** Status refleksi terisi per slug (dihitung di server). */
  filledSlugs: string[];
}

/** Daftar kartu mata kuliah dengan kolom pencarian. */
export default function CourseGrid({ courses, filledSlugs }: CourseGridProps) {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter((c) => `${c.title} ${c.description}`.toLowerCase().includes(q));
  }, [courses, query]);

  return (
    <div>
      {courses.length > 3 && (
        <div className="relative mb-8 max-w-md">
          <label htmlFor="cari-matkul" className="sr-only">
            Cari mata kuliah
          </label>
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
          <input
            id="cari-matkul"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari mata kuliah…"
            className="w-full rounded-full border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-blush"
          />
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {visible.length} mata kuliah ditampilkan
      </p>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-neutral-300 bg-blush-50 p-8 text-center text-neutral-600">
          Tidak ada mata kuliah yang cocok dengan “{query}”.
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <li key={course.id}>
              <CourseCard
                course={course}
                index={courses.findIndex((c) => c.id === course.id)}
                reflectionFilled={filledSlugs.includes(course.slug)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
