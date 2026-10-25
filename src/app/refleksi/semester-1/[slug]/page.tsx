import type { Metadata } from "next";
import CourseDetailPage from "@/components/reflection/CourseDetailPage";
import { getCourse, getCourses } from "@/lib/courses";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getCourses(1).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(1, slug);
  return { title: course ? `${course.title} (Semester 1)` : "Mata Kuliah" };
}

export default async function Semester1DetailPage({ params }: Props) {
  const { slug } = await params;
  return <CourseDetailPage semester={1} slug={slug} />;
}
