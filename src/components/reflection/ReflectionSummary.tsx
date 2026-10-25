import TextOrPlaceholder from "@/components/ui/Placeholder";
import type { PracticalReflection } from "@/types/reflection";

const items: { key: keyof PracticalReflection; title: string }[] = [
  { key: "mostMeaningful", title: "Pembelajaran paling bermakna" },
  { key: "mostRelevantConcept", title: "Konsep yang paling relevan" },
  { key: "teacherPractice", title: "Kaitan dengan praktik sebagai guru Informatika" },
  { key: "exampleApplication", title: "Contoh penerapan dalam pembelajaran nyata" },
  { key: "intendedChange", title: "Perubahan yang ingin dilakukan" },
];

/** Refleksi dan kaitan praktis yang tampil setelah 4C. */
export default function ReflectionSummary({ data, dataFile }: { data: PracticalReflection; dataFile: string }) {
  return (
    <section aria-labelledby="judul-praktis" className="rounded-3xl bg-blush-50 p-5 sm:p-8">
      <h2 id="judul-praktis" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Refleksi dan Kaitan Praktis
      </h2>
      <dl className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map(({ key, title }) => (
          <div key={key} className="min-w-0 rounded-2xl border border-blush bg-white p-5">
            <dt className="text-sm font-semibold text-brand">{title}</dt>
            <dd className="mt-2 text-sm">
              <TextOrPlaceholder text={data[key]} hint={`Isi "practicalReflection.${key}" pada ${dataFile}.`} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
