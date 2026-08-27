"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Store,
  Plane,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react"

const clients = [
  { icon: Building2, name: "Company Profile", path: "/company-profile" },
  { icon: Store, name: "Toko Online", path: "/toko-online" },
  { icon: Plane, name: "Travel", path: "/travel" },
  { icon: Shirt, name: "Fashion", path: "/fashion" },
  { icon: Sparkles, name: "Kecantikan", path: "/kecantikan" },
  { icon: UtensilsCrossed, name: "Kuliner", path: "/kuliner" },
]

export function TrustedSection() {
  return (
    <section className="relative py-24 bg-[#EFF1EC] text-[#14231F]">
      <div className="relative container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-[11px] tracking-wide text-[#5B6B63]">
            // lintas-industri
          </span>
          <span className="h-px flex-1 bg-[#CFD6C9]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-12 max-w-xl"
        >
          Satu standar kualitas, untuk bidang apa pun.
        </motion.h2>

        {/* Directory listing */}
        <div className="border-t border-[#CFD6C9]">
          {clients.map((client, i) => (
            <motion.div
              key={client.path}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative flex items-center gap-4 sm:gap-6 py-4 border-b border-[#CFD6C9] overflow-hidden cursor-default"
            >
              {/* hover sweep */}
              <span className="absolute inset-0 bg-[#14231F] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

              <span className="relative font-mono text-xs text-[#D9A441] w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative flex items-center justify-center w-9 h-9 rounded-md border border-[#CFD6C9] text-[#14231F] group-hover:border-[#EFF1EC]/30 group-hover:text-[#EFF1EC] transition-colors duration-300 shrink-0">
                <client.icon className="w-4 h-4" />
              </span>

              <span className="relative flex-1 min-w-0">
                <span className="block text-base font-medium group-hover:text-[#EFF1EC] transition-colors duration-300">
                  {client.name}
                </span>
                <span className="block font-mono text-xs text-[#5B6B63] group-hover:text-[#EFF1EC]/60 transition-colors duration-300 truncate">
                  {client.path}
                </span>
              </span>

              <ArrowUpRight className="relative w-4 h-4 text-[#5B6B63] group-hover:text-[#D9A441] group-hover:rotate-45 transition-all duration-300 shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}