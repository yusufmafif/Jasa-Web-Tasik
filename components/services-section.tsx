"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
    color: "from-blue-500 to-cyan-500",
    preview: "/landing-page.png",
  },
  {
    title: "Company Profile",
    description:
      "Website profesional untuk memperkenalkan perusahaan dan layanan Anda.",
    icon: Building2,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Toko Online",
    description:
      "E-commerce lengkap dengan keranjang belanja, checkout, dan payment gateway.",
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Website Booking",
    description:
      "Sistem reservasi online untuk appointment, hotel, atau rental.",
    icon: CalendarCheck,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Dashboard Admin",
    description:
      "Panel admin untuk mengelola konten, pesanan, dan data bisnis Anda.",
    icon: LayoutDashboard,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Maintenance Website",
    description:
      "Layanan perawatan, update, dan optimasi website existing Anda.",
    icon: Wrench,
    color: "from-amber-500 to-orange-500",
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 lg:py-32 bg-muted/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Layanan
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Solusi website lengkap untuk berbagai kebutuhan bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-card rounded-3xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Background Screenshot */}
                <img
                  src="/landing-page.png"
                  alt=""
                  className="
    absolute
    right-0
    top-0
    w-[110%]
    opacity-15
    rounded-xl
    pointer-events-none
  "
                />

                {/* <div className="absolute inset-0 bg-card" /> */}

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 rounded-md bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
