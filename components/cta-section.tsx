"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-[#14231F] text-[#EFF1EC] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #EFF1EC 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-[11px] tracking-wide text-[#5B6B63]">
            // mulai-sekarang
          </span>
          <span className="h-px flex-1 bg-[#EFF1EC]/15" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-balance max-w-xl"
        >
          Siap membawa bisnis Anda ke dunia digital?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-base text-[#EFF1EC]/60 mb-10 max-w-lg leading-relaxed"
        >
          Konsultasikan kebutuhan website Anda sekarang. Gratis konsultasi,
          tanpa komitmen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#D9A441] text-[#14231F] hover:bg-[#D9A441]/90 rounded-lg px-8 h-12 font-medium"
          >
            <Link href="https://wa.me/628981299833" target="_blank">
              Mulai Sekarang
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <span className="font-mono text-[11px] text-[#EFF1EC]/40 self-center">
            respon dalam 1×24 jam
          </span>
        </motion.div>
      </div>
    </section>
  )
}
