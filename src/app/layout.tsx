// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://unihero-three.vercel.app"; // <-- put your final domain when ready
const title = "UniHero — For Students, By Students";
const description =
  "Practical resources, a helpful community, and simple tools. Learn smarter with study guides, templates and quick support.";

export const viewport: Viewport = {
  themeColor: "#0b1c3d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "UniHero",
  keywords: ["UniHero", "students", "study guides", "exam prep", "templates", "community"],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "UniHero",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "UniHero" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full bg-[#0b1c3d]">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
