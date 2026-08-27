"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#layanan", label: "Layanan" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#EFF1EC]/95 backdrop-blur-sm border-b border-[#CFD6C9]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Jasa Web Tasik"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <span className="font-serif font-medium text-lg text-[#14231F]">
              Jasa Web Tasik
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-medium text-[#14231F]/70 hover:text-[#14231F] transition-colors"
              >
                {item.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-[#D9A441] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#14231F] hover:bg-[#14231F]/90 text-[#EFF1EC] rounded-md px-6 h-10"
            >
              <Link href="https://wa.me/628981299833" target="_blank">
                Konsultasi Gratis
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-[#CFD6C9] text-[#14231F]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation — directory-row style */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-[#EFF1EC] border border-[#CFD6C9] rounded-lg mb-4"
            >
              <div className="flex flex-col">
                {navItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative flex items-center gap-3 px-4 py-3 border-b border-[#CFD6C9] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-[#14231F] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    <span className="relative font-mono text-[11px] text-[#D9A441] w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative flex-1 text-sm font-medium text-[#14231F] group-hover:text-[#EFF1EC] transition-colors duration-300">
                      {item.label}
                    </span>
                    <ArrowRight className="relative w-4 h-4 text-[#5B6B63] group-hover:text-[#D9A441] group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                  </Link>
                ))}
                <div className="p-3">
                  <Button
                    asChild
                    className="w-full bg-[#14231F] hover:bg-[#14231F]/90 text-[#EFF1EC] rounded-md h-11"
                  >
                    <Link href="https://wa.me/628981299833" target="_blank">
                      Konsultasi Gratis
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}