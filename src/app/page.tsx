import { ArrowRight } from "lucide-react";
import PdfDocumentCard from "@/components/documents/PdfDocumentCard";
import HeroSection from "@/components/home/HeroSection";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import ButtonLink from "@/components/ui/ButtonLink";
import EmptyDocument from "@/components/ui/EmptyDocument";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { vision } from "@/data/vision-mission";
import { getAvailableDocuments } from "@/lib/courses";

export default function HomePage() {
  const featured = getAvailableDocuments().slice(0, 2);

  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Perjalanan PPG"
          title="Alur belajar dan refleksi"
          description="Empat langkah yang membentuk portofolio ini, dari refleksi tiap mata kuliah hingga visi menjadi guru."
        />
        <div className="mt-10 max-w-3xl">
          <JourneyTimeline />
        </div>
      </section>

      <section className="bg-blush-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Artefak pilihan"
            title="Dokumen yang mendukung refleksi"
            description="Baca langsung di sini: gulir pratinjau, lalu klik untuk memperbesar."
          />
          <div className="mt-10">
            {featured.length === 0 ? (
              <EmptyDocument note="Artefak pilihan akan tampil di sini setelah dokumen PDF ditambahkan pada file data semester." />
            ) : (
              <ul className="grid gap-6 lg:grid-cols-2">
                {featured.map((doc) => (
                  <li key={doc.id}>
                    <PdfDocumentCard doc={doc} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="rounded-3xl bg-brand p-8 text-white sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blush">Visi menjadi guru</p>
            <blockquote className="mt-4 max-w-3xl font-display text-2xl leading-snug sm:text-3xl">{vision}</blockquote>
            <ButtonLink href="/visi-misi" variant="secondary" className="mt-8 border-white">
              Baca visi dan misi <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
