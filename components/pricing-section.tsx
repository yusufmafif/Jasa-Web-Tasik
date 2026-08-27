"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter",
    price: "300",
    satuan: "ribu",
    description: "Cocok untuk bisnis baru yang ingin hadir online",
    features: [
      "1 Halaman Landing Page",
      "Desain responsive",
      "Tombol WhatsApp",
      "Integrasi Google Maps",
      "SSL Certificate",
      "Revisi 2x",
      "Pengerjaan 2–3 Hari",
    ],
    popular: false,
    cta: "Pilih Starter",
  },
  {
    name: "Business",
    price: "650",
    satuan: "ribu",
    description: "Paling populer untuk UMKM dan bisnis berkembang",
    features: [
      "Hingga 5 Halaman Website",
      "Desain premium",
      "SEO On-Page basic",
      "Integrasi WhatsApp & Maps",
      "SEO Basic",
      "SSL Certificate",
      "Revisi 5x",
      "Support 14 Hari",
    ],
    popular: true,
    cta: "Pilih Business",
  },
  {
    name: "Premium",
    price: "1",
    satuan: "juta",
    description: "Untuk bisnis yang butuh fitur lengkap dan advanced",
    features: [
      "Hingga 10 Halaman Website",
      "Desain Custom",
      "Blog / Artikel",
      "SEO On-Page",
      "Form Order / Booking",
      "Optimasi Kecepatan",
      "SSL Certificate",
      "Revisi 10x",
      "Maintenance 3 bulan",
    ],
    popular: false,
    cta: "Pilih Premium",
  },
]

export function PricingSection() {
  return (
    <section id="harga" className="py-24 bg-[#EFF1EC] text-[#14231F]">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-[11px] tracking-wide text-[#5B6B63]">
            // harga
          </span>
          <span className="h-px flex-1 bg-[#CFD6C9]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4 max-w-xl text-balance"
        >
          Pilih paket yang paling cocok.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-base text-[#5B6B63] mb-14 max-w-lg leading-relaxed"
        >
          Harga transparan tanpa biaya tersembunyi. Pilih paket sesuai
          kebutuhan bisnis Anda.
        </motion.p>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-xl border transition-all duration-300 ${
                plan.popular
                  ? "border-[#14231F] bg-[#14231F] text-[#EFF1EC] shadow-[0_24px_48px_-28px_rgba(20,35,31,0.35)]"
                  : "border-[#CFD6C9] bg-white/70 hover:border-[#D9A441]/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="font-mono text-[10px] tracking-wide bg-[#D9A441] text-[#14231F] px-3 py-1 rounded-full font-semibold">
                    populer
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Plan name & desc */}
                <span className="font-mono text-[11px] text-[#D9A441] mb-2">
                  {plan.name}
                </span>
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    plan.popular ? "text-[#EFF1EC]/70" : "text-[#5B6B63]"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-[#EFF1EC]/60" : "text-[#5B6B63]"
                    }`}
                  >
                    Rp
                  </span>
                  <span className="text-3xl font-medium">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.popular ? "text-[#EFF1EC]/60" : "text-[#5B6B63]"
                    }`}
                  >
                    {plan.satuan}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${
                    plan.popular ? "bg-[#EFF1EC]/15" : "bg-[#CFD6C9]"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.popular
                            ? "text-[#D9A441]"
                            : "text-[#14231F]/40"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-[#EFF1EC]/80"
                            : "text-[#5B6B63]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full rounded-lg h-11 font-medium ${
                    plan.popular
                      ? "bg-[#EFF1EC] text-[#14231F] hover:bg-[#EFF1EC]/90"
                      : "bg-[#14231F] text-[#EFF1EC] hover:bg-[#14231F]/90"
                  }`}
                >
                  <Link href="https://wa.me/628981299833" target="_blank">
                    {plan.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-[#5B6B63] text-center mt-8"
        >
          * Harga bisa disesuaikan dengan kebutuhan. Hubungi kami untuk
          penawaran khusus.
        </motion.p>
      </div>
    </section>
  )
}
