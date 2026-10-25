import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { journey } from "@/data/profile";

/** Garis waktu alur portofolio. Edit isi pada `journey` di src/data/profile.ts. */
export default function JourneyTimeline() {
  return (
    <ol className="relative space-y-6 border-l-2 border-blush pl-8 sm:pl-10">
      {journey.map((step, i) => (
        <li key={step.href} className="relative">
          <span
            aria-hidden
            className="absolute -left-[calc(2rem+17px)] top-4 grid size-8 place-items-center rounded-full bg-brand text-sm font-semibold text-white ring-4 ring-white sm:-left-[calc(2.5rem+17px)]"
          >
            {i + 1}
          </span>
          <Reveal delay={i * 0.05}>
            <Link
              href={step.href}
              className="block rounded-2xl border border-blush bg-white p-5 transition-colors hover:border-brand-light hover:bg-blush-50"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{step.description}</p>
            </Link>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
