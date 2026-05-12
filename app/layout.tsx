import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialistContact from "@/components/SpecialistContact";
import EvoMascot from "@/components/EvoMascot";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: {
    default: "Evolvify | Tecnologia que Evolui Empresas",
    template: "%s | Evolvify",
  },
  description:
    "A Evolvify desenvolve sistemas personalizados, automações com IA, dashboards e plataformas digitais que transformam empresas. Evolua agora.",
  keywords: [
    "sistemas personalizados",
    "automação com IA",
    "dashboards",
    "gestão empresarial",
    "tecnologia",
    "software sob medida",
    "Evolvify",
  ],
  authors: [{ name: "Evolvify" }],
  openGraph: {
    title: "Evolvify | Tecnologia que Evolui Empresas",
    description:
      "Sistemas, automações e plataformas digitais que transformam seu negócio.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-brand-dark text-white antialiased">
        <ParticlesBackground />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <EvoMascot />
        <SpecialistContact />
      </body>
    </html>
  );
}
