"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Coffee,
  Scissors,
  Plane,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const portfolios = [
  {
    title: "Kopi Nusantara",
    category: "Coffee Shop",
    description:
      "Website modern untuk coffee shop dengan menu online dan sistem reservasi meja.",
    icon: "/logo.png",
    techStack: ["Next.js", "Tailwind", "Supabase"],
    color: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Urban Cuts Barbershop",
    category: "Barbershop",
    description:
      "Landing page elegan dengan fitur booking appointment online 24/7.",
     icon: "/logo.png",
    techStack: ["React", "Node.js", "MongoDB"],
    color: "from-slate-500/20 to-zinc-500/20",
    iconBg: "bg-slate-100 text-slate-600",
  },
  {
    title: "Tasik Explore Travel",
    category: "Travel Agency",
    description:
      "Website travel agency dengan katalog paket wisata dan pembayaran online.",
      icon: "/logo.png",
    techStack: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-sky-500/20 to-blue-500/20",
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    title: "Trendy Fashion Store",
    category: "Toko Fashion",
    description:
      "E-commerce fashion dengan keranjang belanja dan integrasi WhatsApp.",
     icon: "/logo.png",
    techStack: ["Next.js", "Tailwind", "Midtrans"],
    color: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-pink-100 text-pink-600",
  },
  {
    title: "Glow Beauty Clinic",
    category: "Klinik Kecantikan",
    description:
      "Website klinik kecantikan dengan galeri treatment dan booking konsultasi.",
     icon: "/logo.png",
    techStack: ["React", "Firebase", "Tailwind"],
    color: "from-purple-500/20 to-violet-500/20",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Dapur Sunda Resto",
    category: "Restoran",
    description:
      "Website restoran dengan menu digital, reservasi, dan delivery order.",
      icon: "/logo.png",
    techStack: ["Next.js", "Supabase", "Vercel"],
    color: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-100 text-green-600",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Project Pilihan
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Lihat beberapa project terbaik kami untuk berbagai jenis bisnis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Thumbnail */}

                <div
                  className={`relative h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.techStack.map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
                  >
                    Lihat Detail
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
