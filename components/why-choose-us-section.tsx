"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Search, 
  MessageCircle, 
  Headphones 
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
    <section className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
              Keunggulan
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">
              Kami tidak hanya membuat website, tapi membangun fondasi digital untuk kesuksesan bisnis Anda.
            </p>

            {/* Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                    <div className="h-2 w-16 bg-primary/30 rounded mb-2" />
                    <div className="h-2 w-12 bg-muted rounded mb-4" />
                    <div className="h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
                  </div>
                  <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                    <div className="h-2 w-12 bg-accent/30 rounded mb-2" />
                    <div className="h-2 w-16 bg-muted rounded mb-4" />
                    <div className="h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg" />
                  </div>
                  <div className="col-span-2 bg-card rounded-2xl p-4 border border-border shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20" />
                      <div className="h-2 w-24 bg-muted rounded" />
                    </div>
                    <div className="h-3 w-full bg-muted rounded mb-2" />
                    <div className="h-3 w-3/4 bg-muted/50 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
