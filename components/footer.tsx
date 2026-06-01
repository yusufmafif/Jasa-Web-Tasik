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
    <footer id="kontak" className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Jasa Web Tasik"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-semibold text-lg text-background">Jasa Web Tasik</span>
            </div>
            <p className="text-background/80 font-medium mb-6 leading-relaxed">
              Jasa pembuatan website profesional untuk UMKM dan bisnis lokal di Tasikmalaya. Website modern, cepat, dan mobile-friendly.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://wa.me/628981299833"
                target="_blank"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/jasawebtasik"
                target="_blank"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@jasawebtasik.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold text-background mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {footerLinks.navigasi.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-background/80 font-medium hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-semibold text-background mb-4">Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-background/80 font-medium hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-semibold text-background mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80 font-medium">WhatsApp</p>
                  <Link
                    href="https://wa.me/628981299833"
                    target="_blank"
                    className="text-background hover:text-primary transition-colors"
                  >
                    +62 898-129-9833
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80 font-medium">Email</p>
                  <Link
                    href="mailto:hello@jasawebtasik.com"
                    className="text-background hover:text-primary transition-colors"
                  >
                    hello@jasawebtasik.com
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80 font-medium">Lokasi</p>
                  <p className="text-background">Tasikmalaya, Jawa Barat</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 font-medium">
              © {new Date().getFullYear()} Jasa Web Tasik. All rights reserved.
            </p>
            <p className="text-sm text-background/60 font-medium">
              Made with love in Tasikmalaya
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
