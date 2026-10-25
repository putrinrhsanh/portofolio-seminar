import {
  Mail,
  MessageCircle,
  Globe2,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Kontak" };

const contactStyles = [
  {
    match: "email",
    icon: Mail,
    color: "bg-rose-50 text-rose-700",
    description: "Kirim pesan melalui email",
  },
  {
    match: "whatsapp",
    icon: MessageCircle,
    color: "bg-emerald-50 text-emerald-700",
    description: "Terhubung melalui WhatsApp",
  },
  {
    match: "linkedin",
    icon: Globe2,
    color: "bg-sky-50 text-sky-700",
    description: "Kunjungi profil profesional",
  },
];

export default function KontakPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Breadcrumb
        items={[
          { label: "Beranda", href: "/" },
          { label: "Kontak" },
        ]}
      />

      <SectionHeading
        as="h1"
        eyebrow="Mari Terhubung"
        title="Hubungi Saya"
      />

      <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
        Terima kasih telah mengunjungi portofolio saya.
        Saya terbuka untuk berdiskusi, berbagi pengalaman,
        dan membangun kolaborasi dalam dunia pendidikan dan
        teknologi.
      </p>

      <section aria-labelledby="tautan" className="mt-10">
        <h2
          id="tautan"
          className="font-display text-2xl font-semibold text-neutral-900"
        >
          Temukan Saya
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Pilih salah satu kanal berikut untuk terhubung.
        </p>

        {profile.contacts.length === 0 ? (
          <p className="mt-5 rounded-2xl border border-dashed border-pink-200 bg-pink-50 p-5 text-sm text-neutral-700">
            Kontak belum diisi. Tambahkan email, WhatsApp,
            atau LinkedIn di src/data/profile.ts.
          </p>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.contacts.map((contact) => {
              const item = contactStyles.find((style) =>
                contact.label.toLowerCase().includes(style.match)
              );
              const Icon = item?.icon ?? ExternalLink;

              return (
                <a
                  key={contact.href}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-48 flex-col rounded-2xl border border-pink-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex size-12 items-center justify-center rounded-2xl ${
                        item?.color ?? "bg-pink-50 text-pink-700"
                      }`}
                    >
                      <Icon aria-hidden className="size-6" />
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-pink-700"
                    />
                  </div>

                  <span className="mt-5 text-xs font-bold uppercase tracking-widest text-pink-700">
                    {contact.label}
                  </span>
                  <span className="mt-1 break-words font-semibold text-neutral-900">
                    {contact.display}
                  </span>
                  <span className="mt-2 text-sm text-neutral-500">
                    {item?.description ?? "Klik untuk membuka tautan"}
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </section>

      <p className="mt-10 text-center text-sm text-neutral-500">
        Sampai jumpa dan semoga kita dapat saling berbagi hal baik.
      </p>
    </main>
  );
}