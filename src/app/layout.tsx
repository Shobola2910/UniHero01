// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "UniHero — For Students, By Students",
  description: "Practical resources, community and simple tools for students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="uh-bg min-h-screen text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
