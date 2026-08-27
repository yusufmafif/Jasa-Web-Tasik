"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const portfolios = [
  {
    title: "Jadwal Shalat PDF Maker",
    category: "Web App",
    description:
      "Web app untuk membuat jadwal shalat dalam format PDF yang bisa diunduh dan dibagikan.",
    icon: "https://jadwal-sholat-pdf.netlify.app/Mosque.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    techStack: ["React", "Node.js"],
    link: "https://jadwal-sholat-pdf.netlify.app",
  },
  {
    title: "Jayakarta Pro",
    category: "Web Agency",
    description:
      "Website untuk agensi web dengan portofolio, layanan, dan integrasi payment gateway.",
    icon: "/Jayakarta web.webp",
    techStack: ["Next.js", "Midtrans", "PostgreSQL"],
    link: "https://jayakarta.vercel.app/",
  },
  {
    title: "Nur Athfal Travel",
    category: "Travel Umrah",
    description:
      "Website travel umroh dengan sistem booking paket, konsultasi via WhatsApp, dan admin dashboard untuk mengelola jadwal keberangkatan.",
    icon: "/nurathfal.webp",
    techStack: ["Next.js", "Tailwind", "Vercel"],
    link: "https://nurathfal.vercel.app",
  },
  {
    title: "Ikhwan Butcher",
    category: "Butcher Shop",
    description:
      "Website modern untuk butcher dengan menu online dan CTA order via WhatsApp.",
    icon: "https://jayakarta-production.netlify.app/Butcher.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    techStack: ["Next.js", "Tailwind", "Supabase"],
    link: "https://ikhwan-butcher.vercel.app",
  },
];

function getDomain(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-[#EFF1EC] text-[#14231F]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#CFD6C9]" />
            <span className="font-mono text-[11px] tracking-wide text-[#5B6B63]">
              portofolio-terpilih
            </span>
            <span className="h-px w-8 bg-[#CFD6C9]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-balance">
            Project Pilihan
          </h2>
          <p className="text-lg text-[#5B6B63] max-w-2xl mx-auto leading-relaxed">
            Lihat beberapa project terbaik kami untuk berbagai jenis bisnis
          </p>
        </motion.div>

        <div className="flex items-center gap-2 justify-center mb-10 md:hidden">
          <span className="font-mono text-[11px] text-[#5B6B63]">
            geser untuk lihat lainnya
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D9A441]" />
        </div>

        <div
          className={`flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 md:gap-6 lg:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-6 md:mt-0`}
        >
          {portfolios.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="shrink-0 w-[82%] sm:w-[55%] md:w-auto snap-center"
            >
              <div className="group h-full flex flex-col rounded-lg border border-[#CFD6C9] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#14231F]/30 hover:shadow-[0_24px_48px_-28px_rgba(20,35,31,0.35)]">
                {/* browser chrome */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[#CFD6C9] bg-[#EFF1EC]">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14231F]/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14231F]/20" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14231F]/20" />
                  </div>
                  <div className="flex-1 rounded bg-white border border-[#CFD6C9] px-2 py-1 font-mono text-[10px] text-[#5B6B63] truncate">
                    {getDomain(item.link)}
                  </div>
                </div>

                {/* thumbnail */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-[#EFF1EC]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#14231F]/0 group-hover:bg-[#14231F]/10 transition-colors duration-300" />
                </div>

                {/* content */}
                <div className="flex flex-col flex-1 p-5">
                  <span className="font-mono text-[11px] tracking-wide text-[#D9A441] mb-2">
                    {String(i + 1).padStart(2, "0")} - {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5B6B63] leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="font-mono text-[11px] text-[#5B6B63] mb-4">
                    {item.techStack.join(" / ")}
                  </div>


                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-auto inline-flex items-center gap-1.5 text-sm font-medium pt-3 border-t border-[#CFD6C9]"
                  >
                    Lihat detail
                    <ExternalLink className="w-3.5 h-3.5 text-[#5B6B63] group-hover/link:text-[#D9A441] group-hover/link:translate-x-0.5 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
