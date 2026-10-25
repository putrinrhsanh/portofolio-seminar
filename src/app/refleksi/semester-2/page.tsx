import type { Metadata } from "next";
import SemesterListPage from "@/components/reflection/SemesterListPage";

export const metadata: Metadata = { title: "Refleksi Semester 2" };

export default function Semester2Page() {
  return <SemesterListPage semester={2} />;
}
