"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"

const footerLinks = {
  navigasi: [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Layanan", href: "#layanan" },
    { label: "Harga", href: "#harga" },
    { label: "FAQ", href: "#faq" },
  ],
  layanan: [
    { label: "Landing Page", href: "#layanan" },
    { label: "Company Profile", href: "#layanan" },
    { label: "Toko Online", href: "#layanan" },
    { label: "Website Booking", href: "#layanan" },
    { label: "Maintenance", href: "#layanan" },
  ],
}

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#14231F] text-[#EFF1EC] pt-24 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top area */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Jasa Web Tasik"
                width={40}
                height={40}
                className="w-9 h-9 object-contain"
              />
              <span className="font-serif text-lg font-medium">
                Jasa Web Tasik
              </span>
            </div>
            <p className="text-sm text-[#EFF1EC]/50 mb-6 leading-relaxed max-w-sm">
              Jasa pembuatan website profesional untuk UMKM dan bisnis lokal
              di Tasikmalaya. Website modern, cepat, dan mobile-friendly.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://wa.me/628981299833"
                target="_blank"
                className="w-9 h-9 rounded-lg border border-[#EFF1EC]/10 flex items-center justify-center hover:bg-[#D9A441] hover:border-[#D9A441] hover:text-[#14231F] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com/jasawebtasik"
                target="_blank"
                className="w-9 h-9 rounded-lg border border-[#EFF1EC]/10 flex items-center justify-center hover:bg-[#D9A441] hover:border-[#D9A441] hover:text-[#14231F] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:hello@jasawebtasik.com"
                className="w-9 h-9 rounded-lg border border-[#EFF1EC]/10 flex items-center justify-center hover:bg-[#D9A441] hover:border-[#D9A441] hover:text-[#14231F] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Navigasi */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] tracking-wide text-[#D9A441] mb-4 block">
              navigasi
            </span>
            <ul className="space-y-2.5">
              {footerLinks.navigasi.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#EFF1EC]/50 hover:text-[#EFF1EC] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div className="lg:col-span-2">
            <span className="font-mono text-[10px] tracking-wide text-[#D9A441] mb-4 block">
              layanan
            </span>
            <ul className="space-y-2.5">
              {footerLinks.layanan.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#EFF1EC]/50 hover:text-[#EFF1EC] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="lg:col-span-2">
            <span className="font-mono text-[10px] tracking-wide text-[#D9A441] mb-4 block">
              kontak
            </span>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://wa.me/628981299833"
                  target="_blank"
                  className="text-sm text-[#EFF1EC]/50 hover:text-[#EFF1EC] transition-colors duration-200"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@jasawebtasik.com"
                  className="text-sm text-[#EFF1EC]/50 hover:text-[#EFF1EC] transition-colors duration-200"
                >
                  Email
                </Link>
              </li>
              <li>
                <span className="text-sm text-[#EFF1EC]/50">
                  Tasikmalaya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#EFF1EC]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-[#EFF1EC]/30">
              © {new Date().getFullYear()} Jasa Web Tasik
            </p>
            <p className="font-mono text-[11px] text-[#EFF1EC]/30">
              made with care in Tasikmalaya
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
