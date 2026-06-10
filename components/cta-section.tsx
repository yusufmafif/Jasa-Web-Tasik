"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden ">
      {/* Background */}

      <div className="container mx-auto px-4 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
       

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 text-balance">
            Siap Membawa Bisnis Anda ke Dunia Digital?
          </h2>
          <p className="text-lg md:text-xl text-black/90 font-medium mb-10 leading-relaxed">
            Konsultasikan kebutuhan website Anda sekarang. Gratis konsultasi, tanpa komitmen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center bg-blue/10  rounded-2xl border border-border">
            <Button
              asChild
              size="lg"
              className="bg-gray/90 text-primary hover:bg-blue/90 rounded-full px-8 h-14 text-lg font-semibold"
            >
              <Link href="https://wa.me/628981299833" target="_blank">
                Mulai Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <p className="text-sm text-black/70 font-medium mt-6">
            Respon cepat dalam 1x24 jam
          </p>
        </motion.div>
      </div>
    </section>
  )
}
