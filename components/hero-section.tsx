"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Monitor,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Web Developer Tasikmalaya
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Website Modern untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bisnis Anda
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kami membantu UMKM dan bisnis lokal tampil lebih profesional
              dengan website cepat, modern, dan mobile-friendly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12"
              >
                <Link href="#portfolio">
                  Lihat Portfolio
                  <ArrowRight className=" w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 border-border hover:bg-muted"
              >
                <Link href="https://wa.me/628981299833" target="_blank">
                  <MessageCircle className=" w-4 h-4" />
                  Chat WhatsApp
                </Link>
              </Button>
            </div>

           
          </motion.div>

          {/* Right Content - Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Image
              src="/asset.webp"
              alt="Jasa Web Tasik"
              height={1000}
              width={1000}
              className=" object-contain"
            />
            <div className="relative">
              {/* Main Device Mockup */}
              <div className="  rounded-3xl shadow-2x  p-4 lg:p-6"></div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-30 lg:-top-50 right-2 lg:-right-5 z-20"
              >
                <div className="bg-card rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Visitors
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      +127%
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-20 left-5 lg:-left-8 z-20"
              >
                <div className="bg-card rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Desktop</div>
                    <div className="text-sm font-semibold text-foreground">
                      Responsive
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-10 right-1 lg:right-35 z-20 hidden lg:block"
              >
                <div className="bg-card rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Mobile</div>
                    <div className="text-sm font-semibold text-foreground">
                      Friendly
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 mb-4 gap-8 mt-12 pt-4 border-t border-border"
            >
              {[
                { value: "100%", label: "Siap Melayani" },
                { value: "24/7+", label: "Support & Konsultasi" },
                { value: "UI/UX", label: "Design Modern" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
