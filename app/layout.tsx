import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Navigation } from "@/components/navigation/Navigation";
import { SectionIndicator } from "@/components/navigation/SectionIndicator";
import { FullscreenMenuProvider } from "@/components/navigation/FullscreenMenuProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { LinhaDaTerra } from "@/components/ui/LinhaDaTerra";
import { Footer } from "@/components/footer/Footer";
import { LenisProvider } from "@/lib/lenis-provider";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fazenda Lysandja — Onde a terra ganha propósito.",
    template: "%s · Fazenda Lysandja",
  },
  description:
    "Fazenda Lysandja — agricultura moderna, natureza angolana, produção e sustentabilidade. Uma marca agrícola premium africana.",
  metadataBase: new URL("https://lysandja.ao"),
  openGraph: {
    title: "Fazenda Lysandja — Onde a terra ganha propósito.",
    description:
      "Muito mais do que produzir. Conectamos terra, pessoas, tecnologia e conhecimento para construir a agricultura do futuro.",
    type: "website",
    locale: "pt_AO",
    images: {
      url: "/logo-fr.png",
    },
  },
  icons: {
    icon: "/logo-full.jpeg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-AO" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--lys-paper)]">
        <LenisProvider>
          <Preloader />
          <CustomCursor />
          <SectionIndicator />
          <FullscreenMenuProvider />
          <Navigation />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
          <LinhaDaTerra />
        </LenisProvider>
      </body>
    </html>
  );
}
