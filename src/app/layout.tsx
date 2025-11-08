import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "UniHero",
  description: "For Students, By Students",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="uh-bg text-white">
        {/* ✅ Navbar YAGONA — faqat layout’da */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
