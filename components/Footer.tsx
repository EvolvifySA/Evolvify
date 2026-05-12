import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Mail, MessageCircle } from "lucide-react";
import { contactConfig, getWhatsAppLink } from "@/config/contact";

const footerLinks = {
  company: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Insights", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
  solutions: [
    { label: "Sistema Financeiro", href: "/solucoes#sistema-financeiro" },
    { label: "Gestão de Desempenho", href: "/solucoes#gestao-desempenho" },
    { label: "Automações com IA", href: "/solucoes#automacoes-ia" },
    { label: "Dashboards", href: "/solucoes#dashboards" },
    { label: "Sistemas Sob Medida", href: "/solucoes#sistemas-sob-medida" },
    { label: "Integrações", href: "/solucoes#integracoes" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark border-t border-white/5">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/logo.png"
                alt="Evolvify"
                width={140}
                height={48}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Tecnologia que transforma empresas. Sistemas, automações e plataformas digitais para você crescer com inteligência.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/evolvify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-blue hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/evolvify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-blue hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@evolvify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-blue hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Soluções
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 text-sm hover:text-brand-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href={`mailto:${contactConfig.email.contact}`}
                  className="text-white/50 text-sm hover:text-brand-gold transition-colors"
                >
                  {contactConfig.email.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Evolvify. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
