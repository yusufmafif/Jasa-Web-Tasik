"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  CalendarCheck,
  LayoutDashboard,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Landing Page",
    description:
      "Website satu halaman yang fokus untuk konversi dan promosi bisnis Anda.",
    icon: LayoutTemplate,
  },
  {
    title: "Company Profile",
    description:
      "Website profesional untuk memperkenalkan perusahaan dan layanan Anda.",
    icon: Building2,
  },
  {
    title: "Toko Online",
    description:
      "E-commerce lengkap dengan keranjang belanja, checkout, dan payment gateway.",
    icon: ShoppingCart,
  },
  {
    title: "Website Booking",
    description:
      "Sistem reservasi online untuk appointment, hotel, atau rental.",
    icon: CalendarCheck,
  },
  {
    title: "Dashboard Admin",
    description:
      "Panel admin untuk mengelola konten, pesanan, dan data bisnis Anda.",
    icon: LayoutDashboard,
  },
  {
    title: "Maintenance Website",
    description:
      "Layanan perawatan, update, dan optimasi website existing Anda.",
    icon: Wrench,
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 lg:py-32 bg-[#EFF1EC] text-[#14231F]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#CFD6C9]" />
            <span className="font-mono text-[11px] tracking-wide text-[#5B6B63]">
              layanan-kami
            </span>
            <span className="h-px w-8 bg-[#CFD6C9]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-balance">
            Solusi untuk Setiap Kebutuhan
          </h2>
          <p className="text-lg text-[#5B6B63] max-w-2xl mx-auto leading-relaxed">
            Dari landing page sederhana sampai dashboard admin, semua kami
            kerjakan dengan standar yang sama.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative rounded-lg border border-[#CFD6C9] bg-white p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#14231F]/30 hover:shadow-[0_24px_48px_-28px_rgba(20,35,31,0.35)]"
            >
              {/* ghost index number */}
              <span className="pointer-events-none select-none absolute -top-3 -right-2 font-serif text-[88px] leading-none font-medium text-[#14231F]/[0.05]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-md border border-[#CFD6C9] flex items-center justify-center mb-6 text-[#14231F] group-hover:bg-[#14231F] group-hover:border-[#14231F] group-hover:text-[#EFF1EC] transition-colors duration-300">
                  <service.icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-xl font-medium mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-[#5B6B63] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}