"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico Gratuito",
    description:
      "Analisamos sua operação, mapeamos gargalos e identificamos onde a tecnologia vai gerar mais resultado.",
    duration: "1-2 dias",
    color: "brand-blue",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Proposta Estratégica",
    description:
      "Apresentamos um plano personalizado com as soluções priorizadas por impacto, cronograma e investimento.",
    duration: "2-3 dias",
    color: "brand-gold",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Nossa equipe desenvolve com metodologia ágil, entregas parciais e você acompanha cada etapa.",
    duration: "2-12 semanas",
    color: "brand-blue",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implantação e Treinamento",
    description:
      "Fazemos a implantação com cuidado, treinamos sua equipe e garantimos a adoção da nova solução.",
    duration: "1 semana",
    color: "brand-gold",
  },
  {
    icon: HeartHandshake,
    number: "05",
    title: "Suporte e Evolução",
    description:
      "Não abandonamos o projeto. Monitoramos, corrigimos e evoluímos continuamente com sua empresa.",
    duration: "Contínuo",
    color: "brand-blue",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark-2/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light text-xs font-medium mb-4">
            Nosso processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Como <span className="gradient-text-blue">funciona</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Da primeira conversa ao resultado real — um processo transparente e focado em entrega.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 via-brand-gold/40 to-brand-blue/40 hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`glass-card border border-white/6 rounded-2xl p-6 hover:border-brand-blue/20 transition-all ${isEven ? "lg:ml-auto" : "lg:mr-auto"} max-w-md`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <span className="text-4xl font-bold font-display text-white/10">
                          {step.number}
                        </span>
                        <h3 className="text-white font-bold text-xl">{step.title}</h3>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-glow-sm-blue border-2 ${
                        step.color === "brand-gold"
                          ? "bg-brand-gold/10 border-brand-gold/30"
                          : "bg-brand-blue/10 border-brand-blue/30"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          step.color === "brand-gold" ? "text-brand-gold" : "text-brand-blue-light"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
