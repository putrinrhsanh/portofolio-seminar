import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TextOrPlaceholder, { Placeholder } from "@/components/ui/Placeholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { ppgReflection } from "@/data/reflection-ppg";

export const metadata: Metadata = { title: "Refleksi Keseluruhan PPG" };

const toc = [
  { id: "pengalaman", label: "Pengalaman belajar" },
  { id: "pandangan", label: "Pendidikan Indonesia" },
  { id: "upaya", label: "Menjadi guru profesional" },
  { id: "artefak", label: "Analisis artefak" },
  { id: "tindak-lanjut", label: "Rencana tindak lanjut" },
];

function Section({ id, letter, title, children }: { id: string; letter: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-judul`} className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Bagian {letter}</p>
      <h2 id={`${id}-judul`} className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function KeseluruhanPpgPage() {
  const r = ppgReflection;
  const file = "src/data/reflection-ppg.ts";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Refleksi", href: "/refleksi" }, { label: "Keseluruhan PPG" }]} />
      <SectionHeading
        as="h1"
        eyebrow="Refleksi menyeluruh"
        title="Refleksi Pengalaman Belajar Selama PPG"
        description="Gambaran perjalanan belajar, pandangan tentang pendidikan Indonesia, dan langkah ke depan sebagai guru Informatika."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Daftar bagian" className="hidden lg:block">
          <ul className="sticky top-24 space-y-1 border-l-2 border-blush">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="-ml-0.5 block border-l-2 border-transparent py-1.5 pl-4 text-sm text-neutral-700 hover:border-brand hover:text-brand">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-3xl space-y-16">
          <Section id="pengalaman" letter="A" title="Pengalaman Belajar Selama PPG">
            <TextOrPlaceholder text={r.learningExperience} hint={`Isi learningExperience pada ${file}.`} />
          </Section>

          <Section id="pandangan" letter="B" title="Pandangan tentang Pendidikan di Indonesia">
            <TextOrPlaceholder text={r.viewOnEducation} hint={`Isi viewOnEducation pada ${file}.`} />
          </Section>

          <Section id="upaya" letter="C" title="Upaya Menjadi Guru Profesional">
            <ul className="grid gap-4 sm:grid-cols-2">
              {r.professionalEfforts.map((e) => (
                <li key={e.competency} className="rounded-2xl border border-blush bg-white p-5">
                  <p className="font-display text-lg font-semibold text-brand">Kompetensi {e.competency}</p>
                  <p className="mt-1 text-sm text-neutral-600">{e.description}</p>
                  <div className="mt-3 text-sm">
                    <TextOrPlaceholder text={e.effort} hint={`Isi "effort" ${e.competency} pada ${file}.`} />
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="artefak" letter="D" title="Analisis Artefak Pilihan">
            {r.artifactAnalysis.length === 0 ? (
              <Placeholder hint={`Tambahkan artefak pilihan dari Semester 1 dan 2 pada artifactAnalysis di ${file}.`} />
            ) : (
              <ul className="space-y-4">
                {r.artifactAnalysis.map((a, i) => (
                  <li key={i} className="rounded-2xl border border-blush bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Semester {a.semester}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-ink">{a.title}</p>
                    <div className="mt-3 text-sm">
                      <TextOrPlaceholder text={a.analysis} />
                    </div>
                    {a.courseSlug && (
                      <Link
                        href={`/refleksi/semester-${a.semester}/${a.courseSlug}`}
                        className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
                      >
                        Lihat artefak dan refleksinya
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Section>

          <Section id="tindak-lanjut" letter="E" title="Tiga Rencana Tindak Lanjut">
            <ol className="space-y-4">
              {r.followUpPlans.map((p, i) => (
                <li key={p.title} className="flex gap-4 rounded-2xl bg-blush-50 p-5 ring-1 ring-blush">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display text-lg font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">{p.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        </div>
      </div>
    </div>
  );
}
