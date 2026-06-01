"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Asep Sunandar",
    role: "Pemilik Kopi Nusantara",
    content: "Website yang dibuat sangat profesional dan modern. Sekarang customer bisa lihat menu dan reservasi online. Omzet naik 40% setelah punya website!",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Rina Marlina",
    role: "Owner Glow Beauty Clinic",
    content: "Prosesnya cepat dan komunikasinya enak. Tim sangat sabar revisi sampai sesuai keinginan. Hasilnya melebihi ekspektasi saya!",
    rating: 5,
    avatar: "RM",
  },
  {
    name: "Dedi Kurniawan",
    role: "Direktur Tasik Explore Travel",
    content: "Sejak pakai website baru, booking paket wisata meningkat drastis. Desainnya keren dan fitur pembayaran online sangat membantu.",
    rating: 5,
    avatar: "DK",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Testimoni
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Cerita sukses dari klien-klien kami di Tasikmalaya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-full bg-card rounded-3xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/10">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed relative z-10">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
