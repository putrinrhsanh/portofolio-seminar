import { Lightbulb, Link2, Mountain, Repeat2 } from "lucide-react";
import TextOrPlaceholder from "@/components/ui/Placeholder";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/reflection";

const stages = [
  {
    key: "connection",
    label: "Connection",
    prompt: "Hubungan materi dengan pengetahuan awal, pengalaman, dan peran sebagai calon guru.",
    Icon: Link2,
  },
  {
    key: "challenge",
    label: "Challenge",
    prompt: "Tantangan, kesulitan, dan pertanyaan yang mengubah pemahaman.",
    Icon: Mountain,
  },
  {
    key: "concept",
    label: "Concept",
    prompt: "Konsep, teori, dan prinsip utama serta relevansinya dengan praktik pendidikan.",
    Icon: Lightbulb,
  },
  {
    key: "change",
    label: "Change",
    prompt: "Perubahan sikap, pola pikir, dan tindakan konkret ke depan.",
    Icon: Repeat2,
  },
] as const;

/** Empat tahap refleksi 4C. Tiap tahap punya nomor, ikon, dan aksen warna. */
export default function Reflection4C({ course, dataFile }: { course: Course; dataFile: string }) {
  return (
    <section aria-labelledby="judul-4c">
      <h2 id="judul-4c" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Refleksi Model 4C
      </h2>
      <ol className="mt-8 space-y-5">
        {stages.map(({ key, label, prompt, Icon }, i) => {
          const accent = i % 2 === 0 ? "border-l-brand" : "border-l-brand-light";
          return (
            <li
              key={key}
              id={key}
              className={cn("scroll-mt-24 rounded-2xl border border-blush border-l-4 bg-white p-5 sm:p-7", accent)}
            >
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Icon aria-hidden className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Tahap {i + 1}</p>
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{label}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-600">{prompt}</p>
              <div className="mt-4">
                <TextOrPlaceholder text={course[key]} hint={`Isi bagian "${key}" pada ${dataFile}.`} />
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
