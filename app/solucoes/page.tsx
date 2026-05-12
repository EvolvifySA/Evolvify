"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CreditCard, Users, Brain, Code2, LayoutDashboard,
  Link2, Globe, BarChart3, ArrowRight, CheckCircle2,
} from "lucide-react";
import { solutions } from "@/data/solutions";
import CTA from "@/components/CTA";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard, Users, Brain, Code2, LayoutDashboard, Link2, Globe, BarChart3,
};

export default function SolucoesPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const timeout = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hex-bg overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light text-xs font-medium mb-6">
              Nossas soluções
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
              Inteligência Artificial
              <span className="block gradient-text-gold">aplicada ao seu negócio</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Nosso foco é automatizar processos com IA. Também desenvolvemos sistemas, sites e dashboards — tudo sob medida, com resultado real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions detail */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {solutions.map((solution, i) => {
            const Icon = iconMap[solution.icon];
            const isEven = i % 2 === 0;
            const isIA = solution.id === "automacoes-ia";
            return (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className={`scroll-mt-28 grid lg:grid-cols-2 gap-10 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                } ${isIA ? "border border-brand-gold/20 rounded-3xl p-8 bg-brand-gold/3" : ""}`}
              >
                {/* Content */}
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-7 h-7 text-brand-blue-light" />}
                  </div>
                  {isIA && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold mb-3">
                      ★ Nossa especialidade
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3 text-white">
                    {solution.title}
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <Link
                    href="/contato"
                    className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-brand-dark font-bold text-sm"
                  >
                    Quero essa solução <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Benefits */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="glass-card border border-white/6 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                      Benefícios
                    </h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/70 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
