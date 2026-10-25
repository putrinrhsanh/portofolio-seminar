import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TextOrPlaceholder from "@/components/ui/Placeholder";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { developmentCommitments, mission, professionalValues, teachingPhilosophy, vision } from "@/data/vision-mission";

export const metadata: Metadata = { title: "Visi dan Misi" };

export default function VisiMisiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb items={[{ label: "Beranda", href: "/" }, { label: "Visi & Misi" }]} />
      <SectionHeading as="h1" eyebrow="Arah menjadi guru" title="Visi dan Misi Menjadi Guru" />

      <Reveal className="mt-10">
        <section aria-labelledby="visi" className="rounded-3xl bg-brand p-8 text-white sm:p-12">
          <h2 id="visi" className="text-xs font-semibold uppercase tracking-[0.18em] text-blush">Visi</h2>
          <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{vision}</p>
        </section>
      </Reveal>

      <section aria-labelledby="misi" className="mt-14">
        <h2 id="misi" className="font-display text-2xl font-semibold sm:text-3xl">Misi</h2>
        <ol className="mt-6 space-y-3">
          {mission.map((m, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-blush bg-white p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white">{i + 1}</span>
              <p className="leading-relaxed text-neutral-700">{m}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="filosofi" className="mt-14">
        <h2 id="filosofi" className="font-display text-2xl font-semibold sm:text-3xl">Filosofi Mengajar</h2>
        <div className="mt-5">
          <TextOrPlaceholder text={teachingPhilosophy} hint="Isi teachingPhilosophy pada src/data/vision-mission.ts." />
        </div>
      </section>

      <section aria-labelledby="nilai" className="mt-14">
        <h2 id="nilai" className="font-display text-2xl font-semibold sm:text-3xl">Nilai Profesional</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {professionalValues.map((v) => (
            <li key={v.title} className="rounded-2xl bg-blush-50 p-5 ring-1 ring-blush">
              <p className="font-display text-lg font-semibold text-brand">{v.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-700">{v.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="komitmen" className="mt-14">
        <h2 id="komitmen" className="font-display text-2xl font-semibold sm:text-3xl">Komitmen Pengembangan Diri</h2>
        <ul className="mt-6 space-y-3">
          {developmentCommitments.map((c) => (
            <li key={c} className="flex gap-3 text-neutral-700">
              <span aria-hidden className="mt-2.5 size-2 shrink-0 rounded-full bg-brand-light" />
              <span className="leading-relaxed">{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
