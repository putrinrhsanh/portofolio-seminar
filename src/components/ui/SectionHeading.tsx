import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}

/** Judul bagian bergaya editorial: label kecil + judul serif + deskripsi. */
export default function SectionHeading({ eyebrow, title, description, as = "h2", className }: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          <span aria-hidden className="h-px w-8 bg-brand-light" />
          {eyebrow}
        </p>
      )}
      <Tag className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">{description}</p>}
    </div>
  );
}
