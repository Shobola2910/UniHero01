import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/config/brand";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${BRAND.name}`,
  description: `${BRAND.tagline}`,
  metadataBase: new URL(`https://${BRAND.domain}`),
  openGraph: {
    title: BRAND.name,
    description: BRAND.tagline,
    siteName: BRAND.name,
    url: `https://${BRAND.domain}`,
    images: [{ url: BRAND.assets.og }],
    type: "website",
  },
  icons: [{ rel: "icon", url: BRAND.assets.favicon }],
};

// ...
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh uh-bg text-white antialiased">
        {/* Header */}
        {/* <SiteHeader /> qo'yilgan bo'lsin */}
        {/* Page */}
        {children}
        {/* <SiteFooter /> */}
      </body>
    </html>
  );
}
