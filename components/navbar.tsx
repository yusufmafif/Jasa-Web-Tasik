"use client"


import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all bg-blue-50 duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b  border-border shadow-sm"
          : "bg-transparent  bg-blue-50"
      }`}
    >
      <nav className="container mx-auto min-h-screeen px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Jasa Web Tasik"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-semibold text-lg text-foreground ">Jasa Web Tasik</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              <Link href="https://wa.me/628981299833" target="_blank">
                Konsultasi Gratis
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl rounded-2xl mb-4 border border-border"
            >
              <div className="flex flex-col p-4 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  <Link href="https://wa.me/628981299833" target="_blank">
                    Konsultasi Gratis
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
