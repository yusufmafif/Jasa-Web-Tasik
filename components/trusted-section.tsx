"use client"

import { motion } from "framer-motion"
import { Building2, Store, Plane, Shirt, Sparkles, UtensilsCrossed } from "lucide-react"

const clients = [
  { icon: Building2, name: "Company Profile" },
  { icon: Store, name: "Toko Online" },
  { icon: Plane, name: "Travel" },
  { icon: Shirt, name: "Fashion" },
  { icon: Sparkles, name: "Kecantikan" },
  { icon: UtensilsCrossed, name: "Kuliner" },
]

export function TrustedSection() {
  return (
   <section className="relative py-12 border-y border-border overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
    }}
  />

  {/* Optional overlay biar lebih soft */}
  <div className="absolute inset-0 bg-background/80" />

  {/* Content */}
  <div className="relative container mx-auto px-4 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-8"
    >
      <p className="text-md text-muted-foreground font-semibold">
        MELAYANI :
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
    >
      {clients.map((client, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <client.icon className="w-5 h-5" />
          <span className="text-md font-light">{client.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
  )
}
