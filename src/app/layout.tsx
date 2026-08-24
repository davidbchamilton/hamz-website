import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteIdentity } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://producername.com";

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
      <body className="min-h-screen bg-ink text-ivory antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
