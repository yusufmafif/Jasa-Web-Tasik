"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    price: "300",
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
    satuan: "ribu",
  },
  {
    name: "Business",
    price: "650",
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
    satuan: "ribu",
  },
  {
    name: "Premium",
    price: "1",
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
    satuan: "juta",
  },
];

export function PricingSection() {
  return (
    <section id="harga" className="py-20 lg:py-32 bg-muted/30 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Harga
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Pilih Paket Terbaik
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Harga transparan tanpa biaya tersembunyi. Pilih paket sesuai
            kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Paling Populer
                  </Badge>
                </div>
              )}

              <div
                className={`h-full rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-2xl shadow-primary/20"
                    : "bg-card border border-border hover:border-primary/30 hover:shadow-xl"
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      Rp
                    </span>
                    <span
                      className={`text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {plan.satuan}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular
                            ? "bg-primary-foreground/20"
                            : "bg-primary/10"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full rounded-full h-12 ${
                    plan.popular
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <Link href="https://wa.me/628981299833" target="_blank">
                    {plan.cta}
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
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * Harga bisa disesuaikan dengan kebutuhan. Hubungi kami untuk
          penawaran khusus.
        </motion.p>
      </div>
    </section>
  );
}
