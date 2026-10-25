import type { PortfolioDocument } from "@/types/document";
import type { Course } from "@/types/reflection";
import { semester1Courses } from "@/data/semester-1";
import { semester2Courses } from "@/data/semester-2";
import { isDocumentAvailable } from "./documents";

export function getCourses(semester: 1 | 2): Course[] {
  return semester === 1 ? semester1Courses : semester2Courses;
}

export function getCourse(semester: 1 | 2, slug: string): Course | undefined {
  return getCourses(semester).find((c) => c.slug === slug);
}

/** Refleksi dianggap terisi jika keempat bagian 4C berisi teks. */
export function isReflectionFilled(course: Course): boolean {
  return [course.connection, course.challenge, course.concept, course.change].every(
    (t) => t.trim().length > 0,
  );
}

/** Mata kuliah sebelum dan sesudah (untuk navigasi di halaman detail). */
export function getNeighbors(semester: 1 | 2, slug: string) {
  const list = getCourses(semester);
  const i = list.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined,
  };
}

/** Seluruh dokumen dari semua mata kuliah. */
export function getAllDocuments(): PortfolioDocument[] {
  return [...semester1Courses, ...semester2Courses].flatMap((c) => c.documents);
}

/** Dokumen yang sudah tersedia (untuk bagian "Artefak Pilihan" di beranda). */
export function getAvailableDocuments(): PortfolioDocument[] {
  return getAllDocuments().filter(isDocumentAvailable);
}
