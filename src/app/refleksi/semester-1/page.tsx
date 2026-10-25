import type { Metadata } from "next";
import SemesterListPage from "@/components/reflection/SemesterListPage";

export const metadata: Metadata = { title: "Refleksi Semester 1" };

export default function Semester1Page() {
  return <SemesterListPage semester={1} />;
}
