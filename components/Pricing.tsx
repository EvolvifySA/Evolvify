"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  return (
    <section id="planos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-medium mb-4">
            Planos e investimento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Escolha o plano{" "}
            <span className="gradient-text-gold">certo para você</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Cada empresa é única. Nossos planos são pontos de partida — a proposta final é sempre personalizada.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-card rounded-2xl p-6 border transition-all duration-300 ${
                plan.featured
                  ? "border-brand-gold/30 shadow-glow-gold scale-105"
                  : "border-white/6 hover:border-brand-blue/20"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-gold text-brand-dark text-xs font-bold shadow-glow-gold">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-4 mt-2">
                <h3 className={`text-xl font-bold font-display mb-1 ${plan.featured ? "text-brand-gold" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/5">
                <p className="text-2xl font-bold text-white mb-1">{plan.price}</p>
                <p className="text-white/40 text-xs">{plan.priceNote}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2.5">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-white/70" : "text-white/25"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => document.getElementById("specialist-contact-btn")?.click()}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  plan.featured
                    ? "btn-gold text-brand-dark"
                    : "btn-primary text-white"
                }`}
              >
                {plan.cta}
              </button>
              <p className="text-white/30 text-xs text-center mt-2">{plan.ctaNote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
