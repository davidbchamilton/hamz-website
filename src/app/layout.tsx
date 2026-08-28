import type { Metadata } from "next";
import {
  Anton,
  Hanken_Grotesk,
  JetBrains_Mono,
  Permanent_Marker
} from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteIdentity } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hamzxl868.com";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap"
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-permanent-marker",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteIdentity.name} | Official Website`,
    template: `%s | ${siteIdentity.name}`
  },
  description: siteIdentity.description,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      {
        url: "/icons/favicon-32.png",
        sizes: "32x32",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  openGraph: {
    title: `${siteIdentity.name} | Official Website`,
    description: siteIdentity.description,
    url: "/",
    siteName: siteIdentity.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteIdentity.name} | Official Website`,
    description: siteIdentity.description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${hanken.variable} ${jetbrains.variable} ${permanentMarker.variable} min-h-screen bg-surface text-ivory antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
