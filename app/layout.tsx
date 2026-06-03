import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Jasa Web Tasik | Jasa Pembuatan Website Profesional Tasikmalaya",
  description:
    "Jasa pembuatan website profesional untuk UMKM, bisnis lokal, restoran, barbershop, travel, dan company profile di Tasikmalaya. Website modern, cepat, dan mobile-friendly.",
  keywords:
    "jasa pembuatan website tasikmalaya, web developer tasik, website umkm, landing page, company profile, toko online",
  icons: {
    icon: [
      {
        url: "/icon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.ico",
        type: "image/ico",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Jasa Web Tasik | Jasa Pembuatan Website Profesional",
    description:
      "Kami membantu UMKM dan bisnis lokal tampil lebih profesional dengan website cepat, modern, dan mobile-friendly.",
    url: "https://jasawebtasik.vercel.app",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/Jasawebtasik.webp",
        width: 1200,
        height: 630,
        alt: "Jayakarta Web",
      },
    ],
    siteName: "Jasa Web Tasik",
  },
};

export const viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
