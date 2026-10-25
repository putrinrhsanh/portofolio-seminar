import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const variants = {
  primary: "bg-brand text-white hover:bg-[#7a0b49] border border-brand",
  secondary: "bg-white text-brand border border-brand hover:bg-blush-50",
  ghost: "bg-transparent text-brand border border-transparent hover:bg-blush-50",
};

/** Tautan bergaya tombol untuk navigasi internal. */
export default function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
