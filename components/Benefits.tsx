"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Shield,
  Brain,
  BarChart3,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Crescimento com controle",
    description:
      "Escale sua empresa com sistemas que crescem junto, sem perder o controle das operações.",
  },
  {
    icon: Clock,
    title: "Tempo de volta para você",
    description:
      "Automatizamos o que é repetitivo para sua equipe focar no que realmente gera valor.",
  },
  {
    icon: Brain,
    title: "Decisões baseadas em dados",
    description:
      "Dashboards e indicadores em tempo real para você tomar decisões com segurança.",
  },
  {
    icon: Shield,
    title: "Tecnologia sem dor de cabeça",
    description:
      "Cuidamos de toda a complexidade técnica. Você foca no negócio, nós na tecnologia.",
  },
  {
    icon: BarChart3,
    title: "Resultados comprovados",
    description:
      "Nossos projetos geram crescimento médio de 3x no primeiro ano. Apresentamos os números antes de começar.",
  },
  {
    icon: Headphones,
    title: "Parceiro de longo prazo",
    description:
      "Não somos fornecedores — somos parceiros. Suporte contínuo e evolução junto com você.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-2/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light text-xs font-medium mb-4">
            Por que Evolvify
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            O que você{" "}
            <span className="gradient-text-blue">ganha com a gente</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Mais do que tecnologia — entregamos transformação real com resultados mensuráveis.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative glass-card border border-white/6 rounded-2xl p-6 hover:border-brand-blue/25 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-blue/0 group-hover:from-brand-blue/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-blue-dark/20 border border-brand-blue/20 flex items-center justify-center mb-4 group-hover:border-brand-blue/40 transition-colors">
                  <Icon className="w-6 h-6 text-brand-blue-light group-hover:text-brand-gold transition-colors duration-300" />
                </div>

                <h3 className="relative z-10 text-white font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="relative z-10 text-white/50 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
