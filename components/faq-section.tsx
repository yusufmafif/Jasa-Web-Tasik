"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer:
      "Waktu pengerjaan tergantung kompleksitas project. Landing page biasanya 3-5 hari kerja, website company profile 7-14 hari kerja, dan website e-commerce/booking system 14-30 hari kerja.",
  },
  {
    question: "Apakah ada biaya bulanan setelah website jadi?",
    answer:
      "Tidak ada biaya bulanan wajib. Biaya yang tercantum sudah termasuk hosting dan domain untuk 1 tahun. Setelah 1 tahun, Anda hanya perlu memperpanjang hosting dan domain (sekitar Rp 500rb-1jt/tahun).",
  },
  {
    question: "Apakah saya bisa update konten website sendiri?",
    answer:
      "Ya! Untuk paket Business dan Premium, kami sediakan dashboard admin yang mudah digunakan untuk update konten, produk, dan gambar. Kami juga menyediakan tutorial penggunaan.",
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer:
      "Pembayaran dilakukan dalam 2 tahap: 50% di awal sebagai DP untuk memulai pengerjaan, dan 50% sisanya setelah website selesai dan siap online.",
  },
  {
    question: "Apakah website bisa diakses di HP?",
    answer:
      "Tentu! Semua website yang kami buat sudah responsive, artinya tampilan akan menyesuaikan di berbagai ukuran layar baik desktop, tablet, maupun smartphone.",
  },
  {
    question: "Bagaimana jika ada masalah setelah website online?",
    answer:
      "Setiap paket sudah termasuk support setelah website live. Paket Starter 14 hari, Business 30 hari, dan Premium 90 hari. Setelah masa support berakhir, Anda bisa berlangganan maintenance bulanan.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[#EFF1EC] text-[#14231F]">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-[11px] tracking-wide text-[#5B6B63]">
            // faq
          </span>
          <span className="h-px flex-1 bg-[#CFD6C9]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4 max-w-xl text-balance"
        >
          Pertanyaan yang sering ditanyakan.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-base text-[#5B6B63] mb-12 max-w-lg leading-relaxed"
        >
          Belum punya jawaban? Hubungi kami langsung via WhatsApp.
        </motion.p>

        {/* Accordion */}
        <div className="border-t border-[#CFD6C9]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-[#CFD6C9]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-mono text-xs text-[#D9A441] w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-base font-medium transition-colors duration-200 ${
                        isOpen
                          ? "text-[#14231F]"
                          : "text-[#5B6B63] group-hover:text-[#14231F]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-[#D9A441]" : "text-[#CFD6C9]"
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pl-10 pr-8 text-sm text-[#5B6B63] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
