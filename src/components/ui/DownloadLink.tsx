"use client";

import type { MouseEvent, ReactNode } from "react";

interface DownloadLinkProps {
  url: string;
  filename: string;
  className?: string;
  children: ReactNode;
}

/**
 * Tombol unduh PDF.
 * - File di situs sendiri (path "/..."): memakai atribut `download` biasa.
 * - URL eksternal (mis. Supabase): atribut `download` diabaikan browser lintas-origin,
 *   jadi file diambil lewat fetch lalu diunduh sebagai blob. Jika gagal (mis. CORS),
 *   file dibuka di tab baru agar pengunjung tetap bisa menyimpannya.
 */
export default function DownloadLink({ url, filename, className, children }: DownloadLinkProps) {
  const isExternal = /^https?:\/\//i.test(url);

  async function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!isExternal) return;
    e.preventDefault();
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(String(res.status));
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
    } catch {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <a href={url} download={filename} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
