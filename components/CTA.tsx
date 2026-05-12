"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark/20 via-brand-dark to-brand-dark-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[80px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Dê o primeiro passo agora
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
            Pronto para{" "}
            <span className="gradient-text-gold">evoluir</span>
            <br />
            sua empresa?
          </h2>

          <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Comece com um diagnóstico gratuito. Em 2 horas, identificamos o que está travando seu crescimento e como a tecnologia pode resolver.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contato"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl text-brand-dark font-bold text-base"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => document.getElementById("specialist-contact-btn")?.click()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 text-brand-gold" />
              Falar com especialista
            </button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-white/30 text-sm">
            Sem compromisso. Sem cartão de crédito. Apenas uma conversa sobre o seu negócio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
