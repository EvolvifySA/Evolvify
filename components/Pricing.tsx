"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Link2, Bot, ExternalLink } from "lucide-react";
import Image from "next/image";
import { biolinkPlans, attendancePlans, PricingPlan } from "@/data/pricing";

function PlanCard({ plan, i }: { plan: PricingPlan; i: number }) {
  return (
    <motion.div
      key={plan.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: i * 0.08 }}
      className={`relative glass-card rounded-2xl p-6 border flex flex-col transition-all duration-300 ${
        plan.featured
          ? "border-brand-gold/30 shadow-glow-gold scale-105"
          : "border-white/6 hover:border-brand-blue/20"
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-gold text-brand-dark text-xs font-bold shadow-glow-gold whitespace-nowrap">
            <Sparkles className="w-3 h-3" />
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-3 mt-2">
        <h3 className={`text-xl font-bold font-display mb-1 ${plan.featured ? "text-brand-gold" : "text-white"}`}>
          {plan.name}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed">{plan.tagline}</p>
      </div>

      <div className="mb-6 pb-5 border-b border-white/5">
        {plan.contactOnly ? (
          <div>
            <p className={`text-3xl font-bold font-display ${plan.featured ? "text-brand-gold" : "text-white"}`}>
              Sob consulta
            </p>
            <p className="text-white/35 text-xs mt-1">proposta personalizada</p>
          </div>
        ) : plan.monthlyPrice ? (
          <div className="space-y-1.5">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className={`text-3xl font-bold font-display ${plan.featured ? "text-brand-gold" : "text-white"}`}>
                  {plan.monthlyPrice}
                </span>
                <span className="text-white/40 text-sm">/mês</span>
              </div>
              {plan.monthlyNote && (
                <p className="text-white/30 text-[10px] mt-0.5">{plan.monthlyNote}</p>
              )}
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/8">
              <span className="text-white/35 text-[10px]">Implementação</span>
              <span className="text-white/60 text-xs font-semibold">{plan.setupPrice}</span>
            </div>
          </div>
        ) : (
          <div>
            <p className={`text-3xl font-bold font-display ${plan.featured ? "text-brand-gold" : "text-white"}`}>
              {plan.setupPrice}
            </p>
            <p className="text-white/35 text-xs mt-1">pagamento único</p>
          </div>
        )}
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            <span className="text-white/70 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.references && plan.references.length > 0 && (
        <div className="mb-4">
          <p className="text-white/30 text-[10px] uppercase tracking-wider mb-1.5">Ver exemplos</p>
          <div className="flex flex-col gap-1">
            {plan.references.map((ref) => (
              <a
                key={ref.url}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-blue-light text-xs hover:text-brand-gold transition-colors duration-150"
              >
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
                {ref.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div>
        <button
          onClick={() => document.getElementById("specialist-contact-btn")?.click()}
          className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
            plan.featured ? "btn-gold text-brand-dark" : "btn-primary text-white"
          }`}
        >
          {plan.cta}
        </button>
        <p className="text-white/30 text-xs text-center mt-2">{plan.ctaNote}</p>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="planos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Mascote apontando */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-20 pointer-events-none select-none">
        <Image src="/mascoteapontando.svg" alt="" width={340} height={340} className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Biolink & Sites */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light text-xs font-medium mb-4">
              <Link2 className="w-3.5 h-3.5" />
              Presença Digital
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Biolink &{" "}
              <span className="gradient-text-gold">Sites</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Sua presença digital profissional, entregue rápido e sem complicação.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {biolinkPlans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} i={i} />
            ))}
          </div>
        </div>

        {/* Atendimento Virtual */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-medium mb-4">
              <Bot className="w-3.5 h-3.5" />
              Automação com IA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Agente de{" "}
              <span className="gradient-text-gold">Atendimento</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Automatize seu atendimento e nunca deixe um cliente esperando.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-center">
            {attendancePlans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} i={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
