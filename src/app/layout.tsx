// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "UniHero — For Students, By Students",
  description:
    "Practical resources, a helpful community, and simple tools. Learn smarter with study guides, templates and quick support.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "UniHero — For Students, By Students",
    description:
      "Practical resources, a helpful community, and simple tools. Learn smarter with study guides, templates and quick support.",
    url: "https://unihero-three.vercel.app/",
    siteName: "UniHero",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UniHero",
    creator: "@UniHero",
    title: "UniHero — For Students, By Students",
    description:
      "Practical resources, a helpful community, and simple tools.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#071835] text-white">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
