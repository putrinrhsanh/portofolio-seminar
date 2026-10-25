import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/ui/BackToTop";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `E-Portofolio PPG — ${profile.name}`,
    template: `%s · E-Portofolio PPG ${profile.name}`,
  },
  description: `E-portofolio digital PPG Calon Guru ${profile.subject} — ${profile.name}, ${profile.university}.`,
};

export const viewport: Viewport = {
  themeColor: "#910D58",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Lewati ke konten
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
