"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "100%", label: "Siap Melayani" },
  { value: "24/7", label: "Support & Konsultasi" },
  { value: "UI/UX", label: "Design Modern" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#EFF1EC] text-[#14231F] pt-24 pb-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="font-mono text-[11px] tracking-wide text-[#5B6B63]">
                // web-developer-tasikmalaya
              </span>
              <span className="hidden sm:block h-px w-10 bg-[#CFD6C9]" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-6 text-balance">
              Website yang bikin usaha Anda{" "}
              <span className="relative inline-block">
                <span className="relative z-10">terlihat serius</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#D9A441]/40 -rotate-1 -z-0" />
              </span>
              .
            </h1>

            <p className="text-lg text-[#5B6B63] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Kami bantu UMKM dan bisnis lokal tampil lebih profesional lewat
              website yang cepat, rapi, dan enak dipakai di HP maupun laptop.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button
                asChild
                size="lg"
                className="bg-[#14231F] hover:bg-[#14231F]/90 text-[#EFF1EC] rounded-md px-7 h-12"
              >
                <Link href="#portfolio">
                  Lihat Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md px-7 h-12 border-[#14231F]/20 text-[#14231F] hover:bg-[#14231F]/5"
              >
                <Link href="https://wa.me/628981299833" target="_blank">
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-center lg:text-left">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div>
                    <div className="font-mono text-lg font-semibold text-[#D9A441]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#5B6B63]">{stat.label}</div>
                  </div>
                  {i < stats.length - 1 && (
                    <span className="h-8 w-px bg-[#CFD6C9]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual — asset.webp with floating wireframe card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="/asset.webp"
              alt="Jasa Web Tasik"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />

            {/* floating wireframe card, scaled down */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [12, 0, -6, 0] }}
              transition={{
                opacity: { duration: 0.4, delay: 0.6 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
              className="absolute -bottom-6 left-2 sm:-left-10 w-40 sm:w-48 rounded-lg border border-[#CFD6C9] bg-white shadow-[0_16px_40px_-16px_rgba(20,35,31,0.3)] overflow-hidden z-10"
            >
              {/* window chrome */}
              <div className="flex items-center gap-2 px-2.5 py-2 border-b border-[#CFD6C9] bg-[#EFF1EC]">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14231F]/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14231F]/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14231F]/20" />
                </div>
                <div className="flex-1 rounded bg-white border border-[#CFD6C9] px-1.5 py-0.5 font-mono text-[8px] text-[#5B6B63] truncate">
                  jasawebtasik.id
                </div>
              </div>

              {/* wireframe body */}
              <div className="p-3 space-y-2">
                <div className="h-2.5 w-2/3 rounded bg-[#14231F]/80" />
                <div className="h-1.5 w-1/3 rounded bg-[#14231F]/15" />
                <div className="h-4 w-1/3 rounded bg-[#D9A441] mt-1" />
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <div className="h-8 rounded bg-[#14231F]/5 border border-[#CFD6C9]" />
                  <div className="h-8 rounded bg-[#14231F]/5 border border-[#CFD6C9]" />
                  <div className="h-8 rounded bg-[#14231F]/5 border border-[#CFD6C9]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
