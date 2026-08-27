"use client"

import { motion } from "framer-motion"
import {
  Palette,
  Smartphone,
  Zap,
  Search,
  MessageCircle,
  Headphones,
} from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Desain modern & eksklusif",
    description: "Tampilan unik sesuai brand identity bisnis Anda",
  },
  {
    icon: Smartphone,
    title: "Mobile responsive",
    description: "Tampil sempurna di semua perangkat",
  },
  {
    icon: Zap,
    title: "Website cepat & ringan",
    description: "Optimasi performa untuk loading super cepat",
  },
  {
    icon: Search,
    title: "SEO friendly",
    description: "Mudah ditemukan di Google dan mesin pencari",
  },
  {
    icon: MessageCircle,
    title: "Integrasi WhatsApp",
    description: "Tombol WhatsApp untuk komunikasi langsung",
  },
  {
    icon: Headphones,
    title: "Support after launch",
    description: "Dukungan teknis setelah website live",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 relative bg-[#EFF1EC] text-[#14231F]">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CFD6C9] bg-white/60 text-[#5B6B63] font-mono text-[11px] tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
            keunggulan
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-center text-balance"
        >
          Mengapa Memilih Kami?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-base text-[#5B6B63] mb-14 text-center max-w-lg mx-auto leading-relaxed"
        >
          Kami tidak hanya membuat website, tapi membangun fondasi digital
          untuk kesuksesan bisnis Anda.
        </motion.p>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative p-5 rounded-xl border border-[#CFD6C9] bg-white/70 backdrop-blur-sm hover:border-[#D9A441]/40 hover:shadow-[0_12px_32px_-12px_rgba(20,35,31,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#14231F] text-[#EFF1EC] group-hover:bg-[#D9A441] transition-colors duration-300 shrink-0">
                  <feature.icon className="w-4 h-4" />
                </span>
                <span className="font-mono text-[10px] text-[#D9A441]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-medium text-sm mb-1 group-hover:text-[#14231F] transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-[#5B6B63] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
