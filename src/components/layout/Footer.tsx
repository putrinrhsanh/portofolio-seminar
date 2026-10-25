import Link from "next/link";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-blush bg-blush-50">
      {/* Bagian identitas dan navigasi */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold text-brand">
            {profile.name}
          </p>

          <div className="mt-2 space-y-1 text-sm leading-relaxed text-neutral-700">
            <p>PPG Calon Guru</p>
            <p>Universitas Kristen Satya Wacana (UKSW)</p>
          </div>
        </div>

        <nav aria-label="Navigasi footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-neutral-700 transition-colors hover:text-brand hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bagian bawah berwarna magenta */}
      <div className="border-t border-brand bg-brand">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}.
          </p>

          <p className="sm:text-right">
            E-Portofolio PPG Calon Guru
          </p>
        </div>
      </div>
    </footer>
  );
}