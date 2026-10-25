import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TextOrPlaceholder from "@/components/ui/Placeholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Profil" };

export default function ProfilPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Profil" },
        ]}
      />

      {/* Identitas diri */}
      <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
<div className="mx-auto size-40 overflow-hidden rounded-full bg-blush ring-4 ring-[#910D58] shadow-md sm:size-48">
   {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              className="size-full object-cover"
            />
          ) : (
            <div
              aria-hidden
              className="grid size-full place-items-center font-display text-5xl font-semibold text-brand"
            >
              {profile.name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
        </div>

        <div>
          <SectionHeading
            as="h1"
            eyebrow="Profil mahasiswa"
            title={profile.name}
          />

          <dl className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-brand">Status</dt>
              <dd className="text-neutral-700">{profile.role}</dd>
            </div>

            <div>
              <dt className="font-semibold text-brand">Bidang studi</dt>
              <dd className="text-neutral-700">{profile.subject}</dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="font-semibold text-brand">
                Perguruan tinggi
              </dt>
              <dd className="text-neutral-700">{profile.university}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-14 space-y-12">
        {/* Riwayat pendidikan */}
        <section aria-labelledby="pendidikan">
          <h2
            id="pendidikan"
            className="font-display text-2xl font-semibold"
          >
            Riwayat Pendidikan
          </h2>

          <ul className="mt-5 space-y-3">
            {profile.education.map((e, i) => (
              <li
                key={i}
                className="rounded-2xl border border-blush bg-white p-5"
              >
                <p className="font-display text-lg font-semibold text-ink">
                  {e.level}
                </p>

                <p className="text-sm text-neutral-700">
                  {e.institution}
                </p>

                {(e.period || e.note) && (
                  <p className="mt-1 text-sm text-neutral-600">
                    {[e.period, e.note].filter(Boolean).join(" · ")}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Motivasi menjadi guru */}
        <section aria-labelledby="motivasi">
          <h2
            id="motivasi"
            className="font-display text-2xl font-semibold"
          >
            Motivasi Menjadi Guru
          </h2>

          <div className="mt-5">
            <TextOrPlaceholder
              text={profile.motivation}
              hint="Isi motivation pada src/data/profile.ts."
            />
          </div>
        </section>

        {/* Nilai profesional */}
        <section aria-labelledby="nilai">
          <h2
            id="nilai"
            className="font-display text-2xl font-semibold"
          >
            Nilai Profesional
          </h2>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {profile.values.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl bg-blush-50 p-5 ring-1 ring-blush"
              >
                <p className="font-display text-lg font-semibold text-brand">
                  {v.title}
                </p>

                <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Kompetensi yang ingin dikembangkan */}
        <section aria-labelledby="kompetensi">
          <h2
            id="kompetensi"
            className="font-display text-2xl font-semibold"
          >
            Kompetensi yang Ingin Dikembangkan
          </h2>

          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {profile.competencies.map((c, i) => (
              <li
                key={c.title}
                className="flex gap-4 rounded-2xl border border-blush bg-white p-5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
                  {i + 1}
                </span>

                <div>
                  <p className="font-display text-lg font-semibold text-ink">
                    {c.title}
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {c.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}