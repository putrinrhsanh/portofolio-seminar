"use client";

import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Navbar responsif dengan dropdown Refleksi, penanda halaman aktif, dan menu ponsel. */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Tutup menu saat pindah halaman.
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Tutup dropdown saat klik di luar atau tekan Escape.
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-blush/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-brand">
          <span className="grid size-9 place-items-center rounded-full bg-brand text-white">
            <GraduationCap aria-hidden className="size-5" />
          </span>
          <span className="leading-tight">
            {profile.name}
            <span className="block font-sans text-[11px] font-medium uppercase tracking-wider text-neutral-600">
              E-Portofolio PPG
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.href} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-blush-50",
                      isActive(item.href) ? "bg-blush-50 text-brand" : "text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown aria-hidden className={cn("size-4 transition-transform", dropdownOpen && "rotate-180")} />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-blush bg-white p-2 shadow-lg">
                      <li>
                        <Link href={item.href} className="block rounded-xl px-3 py-2 text-sm hover:bg-blush-50">
                          <span className="font-semibold text-ink">Semua Refleksi</span>
                          <span className="block text-xs text-neutral-600">Ringkasan tiga bagian refleksi</span>
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "block rounded-xl px-3 py-2 text-sm hover:bg-blush-50",
                              pathname.startsWith(child.href) && "bg-blush-50",
                            )}
                          >
                            <span className="font-semibold text-ink">{child.label}</span>
                            {child.description && (
                              <span className="block text-xs text-neutral-600">{child.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-blush-50",
                      isActive(item.href) ? "bg-blush-50 text-brand" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Tombol menu ponsel */}
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full text-brand hover:bg-blush-50 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {/* Menu ponsel */}
      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Navigasi utama" className="border-t border-blush/60 bg-white lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-blush-50",
                    pathname === item.href ? "bg-blush-50 text-brand" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 border-l border-blush pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className={cn(
                            "block rounded-xl px-3 py-2 text-sm hover:bg-blush-50",
                            pathname.startsWith(child.href) ? "font-semibold text-brand" : "text-neutral-700",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
