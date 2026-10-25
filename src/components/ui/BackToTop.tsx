"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/** Tombol kembali ke atas; muncul setelah halaman digulir. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full bg-brand text-white shadow-md transition-colors hover:bg-[#7a0b49]"
    >
      <ArrowUp aria-hidden className="size-5" />
    </button>
  );
}
