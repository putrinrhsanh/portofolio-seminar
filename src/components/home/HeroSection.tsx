import ButtonLink from "@/components/ui/ButtonLink";
import { profile } from "@/data/profile";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

const fourC = ["Connection", "Challenge", "Concept", "Change"];

/** Hero beranda: headline, identitas, CTA, dan visual abstrak (atau foto profil jika ada). */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand ring-1 ring-blush">
            <GraduationCap aria-hidden className="size-4" />
            PPG Calon Guru · {profile.subject}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Belajar, Berefleksi, dan Bertumbuh Menjadi <span className="text-brand">Guru Profesional</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">{profile.heroIntro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/refleksi/semester-1">
              Refleksi Semester 1 <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <ButtonLink href="/refleksi/semester-2" variant="secondary">
              Refleksi Semester 2
            </ButtonLink>
            <ButtonLink href="/refleksi/keseluruhan-ppg" variant="secondary">
              Refleksi Keseluruhan PPG
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden={!profile.photo}>
          <div className="absolute inset-0 rounded-full bg-blush/60" />
          <div className="absolute -right-2 top-6 size-24 rounded-3xl bg-brand-light/90" />
          <div className="absolute -left-2 bottom-8 size-16 rounded-full border-4 border-brand" />
          {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              className="absolute inset-6 size-[calc(100%-3rem)] rounded-full object-cover ring-4 ring-white"
            />
          ) : (
            <div className="absolute inset-6 flex flex-col items-center justify-center gap-5 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-blush">
              <span className="grid size-14 place-items-center rounded-full bg-brand text-white">
                <BookOpen className="size-7" />
              </span>
              <p className="font-display text-xl font-semibold text-brand">Model Refleksi 4C</p>
              <ul className="grid w-full grid-cols-2 gap-2">
                {fourC.map((c, i) => (
                  <li key={c} className="rounded-xl bg-blush-50 px-3 py-2 text-center text-xs font-semibold text-ink ring-1 ring-blush">
                    <span className="mr-1 text-brand">{i + 1}</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
