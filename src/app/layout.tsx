import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "UniHero — For Students, By Students",
  description: "Community, exam prep, assignments, and motivation for university students.",
  viewport: { width: "device-width", initialScale: 1, viewportFit: "cover" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh uh-bg text-white antialiased safe-px safe-pt safe-pb">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 py-6 md:py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
