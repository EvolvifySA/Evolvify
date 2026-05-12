"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CreditCard,
  Users,
  Brain,
  Code2,
  LayoutDashboard,
  Link2,
  Globe,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { solutions } from "@/data/solutions";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Users,
  Brain,
  Code2,
  LayoutDashboard,
  Link2,
  Globe,
  BarChart3,
};

export default function Solutions() {
  const featured = solutions.filter((s) => s.featured);

  return (
    <section id="solucoes" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light text-xs font-medium mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Soluções que{" "}
            <span className="gradient-text-gold">realmente resolvem</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Cada solução é desenvolvida sob medida, com foco no problema real da sua empresa e no resultado que você precisa.
          </p>
        </motion.div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {featured.slice(0, 3).map((solution, i) => {
            const Icon = iconMap[solution.icon];
            const isAI = solution.id === "automacoes-ia";
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group glass-card rounded-2xl p-6 transition-all duration-300 ${
                  isAI
                    ? "md:col-span-2 border border-brand-gold/30 hover:border-brand-gold/60 hover:shadow-glow-gold relative overflow-hidden"
                    : "border border-white/6 hover:border-brand-blue/30 hover:shadow-glow-sm-blue"
                }`}
              >
                {isAI && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-blue/5 pointer-events-none" />
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-bold">
                      ⚡ Mais Vendido!
                    </span>
                  </>
                )}

                <div className={`flex ${isAI ? "md:flex-row flex-col gap-8" : "flex-col"}`}>
                  <div className={isAI ? "flex-1" : ""}>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      isAI
                        ? "bg-brand-gold/10 border border-brand-gold/30 group-hover:bg-brand-gold/20"
                        : "bg-brand-blue/10 border border-brand-blue/20 group-hover:bg-brand-blue/20"
                    }`}>
                      {Icon && <Icon className={`w-6 h-6 ${isAI ? "text-brand-gold" : "text-brand-blue-light"}`} />}
                    </div>

                    <h3 className={`font-bold text-xl mb-2 transition-colors ${
                      isAI ? "text-brand-gold" : "text-white group-hover:text-brand-gold"
                    }`}>
                      {solution.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {solution.shortDescription}
                    </p>

                    {!isAI && (
                      <ul className="space-y-1.5 mb-5">
                        {solution.benefits.slice(0, 3).map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-xs text-white/40">
                            <span className="text-brand-gold mt-0.5">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link
                      href={`/solucoes#${solution.id}`}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isAI ? "text-brand-gold hover:text-white" : "text-brand-blue-light hover:text-brand-gold"
                      }`}
                    >
                      Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {isAI && (
                    <ul className="flex-1 space-y-2 self-center">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="text-brand-gold mt-0.5 font-bold">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/solucoes"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold"
          >
            Ver todas as soluções <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
