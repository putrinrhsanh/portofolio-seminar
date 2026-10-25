import type { ReflectionStage } from "@/types/document";

/** Menggabungkan nama class secara aman. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Memecah teks menjadi paragraf berdasarkan baris kosong. */
export function splitParagraphs(text?: string | null): string[] {
  if (!text || typeof text !== "string") {
    return [];
  }

  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export const stageLabels: Record<ReflectionStage, string> = {
  connection: "Connection",
  challenge: "Challenge",
  concept: "Concept",
  change: "Change",
};
