import type { PortfolioDocument } from "./document";

/** Refleksi praktis yang tampil setelah bagian 4C. Kosongkan ("") jika belum diisi. */
export interface PracticalReflection {
  mostMeaningful: string;
  mostRelevantConcept: string;
  teacherPractice: string;
  exampleApplication: string;
  intendedChange: string;
}

/** Satu mata kuliah beserta refleksinya. Halaman detail dibuat otomatis dari objek ini. */
export interface Course {
  id: string;
  /** Dipakai pada URL: /refleksi/semester-1/{slug}. Gunakan huruf kecil dan tanda hubung. */
  slug: string;
  title: string;
  semester: 1 | 2;
  description: string;
  /** Refleksi 4C. Pisahkan paragraf dengan baris kosong. Kosongkan ("") jika belum diisi. */
  connection: string;
  challenge: string;
  concept: string;
  change: string;
  practicalReflection: PracticalReflection;
  /** Ringkasan nama artefak (opsional), tampil sebagai label pada kartu. */
  artifacts: string[];
  /** Dokumen PDF pendukung. Kosongkan ([]) jika belum ada. */
  documents: PortfolioDocument[];
}

export interface ArtifactAnalysis {
  title: string;
  semester: 1 | 2;
  /** Slug mata kuliah asal artefak (opsional, untuk tautan). */
  courseSlug?: string;
  analysis: string;
}

export interface FollowUpPlan {
  title: string;
  description: string;
}

export interface PpgReflection {
  learningExperience: string;
  viewOnEducation: string;
  professionalEfforts: { competency: string; description: string; effort: string }[];
  artifactAnalysis: ArtifactAnalysis[];
  followUpPlans: FollowUpPlan[];
}
