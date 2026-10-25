import { splitParagraphs } from "@/lib/utils";

/** Kotak penanda untuk konten yang belum diisi (tidak menampilkan teks karangan). */
export function Placeholder({ hint }: { hint?: string }) {
  return (
    <div className="rounded-xl border border-dashed border-neutral-300 bg-blush-50 p-4 text-sm leading-relaxed text-neutral-600 [overflow-wrap:anywhere]">
      <span className="font-semibold text-neutral-700">Belum diisi.</span>
      {hint ? ` ${hint}` : ""}
    </div>
  );
}

/** Menampilkan teks sebagai paragraf, atau Placeholder jika teks kosong. */
export default function TextOrPlaceholder({ text, hint }: { text: string; hint?: string }) {
  const paragraphs = splitParagraphs(text);
  if (paragraphs.length === 0) return <Placeholder hint={hint} />;
  return (
    <div className="space-y-4 text-base leading-relaxed text-neutral-700 [overflow-wrap:anywhere]">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
