"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Waktu pengerjaan tergantung kompleksitas project. Landing page biasanya 3-5 hari kerja, website company profile 7-14 hari kerja, dan website e-commerce/booking system 14-30 hari kerja.",
  },
  {
    question: "Apakah ada biaya bulanan setelah website jadi?",
    answer: "Tidak ada biaya bulanan wajib. Biaya yang tercantum sudah termasuk hosting dan domain untuk 1 tahun. Setelah 1 tahun, Anda hanya perlu memperpanjang hosting dan domain (sekitar Rp 500rb-1jt/tahun).",
  },
  {
    question: "Apakah saya bisa update konten website sendiri?",
    answer: "Ya! Untuk paket Business dan Premium, kami sediakan dashboard admin yang mudah digunakan untuk update konten, produk, dan gambar. Kami juga menyediakan tutorial penggunaan.",
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer: "Pembayaran dilakukan dalam 2 tahap: 50% di awal sebagai DP untuk memulai pengerjaan, dan 50% sisanya setelah website selesai dan siap online.",
  },
  {
    question: "Apakah website bisa diakses di HP?",
    answer: "Tentu! Semua website yang kami buat sudah responsive, artinya tampilan akan menyesuaikan di berbagai ukuran layar baik desktop, tablet, maupun smartphone.",
  },
  {
    question: "Bagaimana jika ada masalah setelah website online?",
    answer: "Setiap paket sudah termasuk support setelah website live. Paket Starter 14 hari, Business 30 hari, dan Premium 90 hari. Setelah masa support berakhir, Anda bisa berlangganan maintenance bulanan.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div
                className={`bg-card rounded-2xl border transition-all duration-300 ${
                  openIndex === i ? "border-primary/30 shadow-lg" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === i ? "text-primary" : "text-muted-foreground"}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-muted-foreground font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
