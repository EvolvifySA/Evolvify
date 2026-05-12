"use client";

import { motion } from "framer-motion";
import { Target, Eye, Zap, Award, TrendingUp, Globe, Sparkles, Shield, Users } from "lucide-react";
import CTA from "@/components/CTA";

const values = [
  {
    icon: Zap,
    title: "Inovação Contínua",
    description: "Evoluímos constantemente nossas soluções para estar sempre à frente do que o mercado exige.",
  },
  {
    icon: Award,
    title: "Perfeccionismo",
    description: "Cada detalhe importa. Nada é entregue de forma genérica ou superficial.",
  },
  {
    icon: Target,
    title: "Impacto Real",
    description: "Tecnologia só tem valor quando resolve problemas reais com inteligência aplicada e resultado direto no negócio.",
  },
  {
    icon: Sparkles,
    title: "Sofisticação & Clareza",
    description: "Sistemas pensados com elegância e eficiência — poderosos por dentro, intuitivos por fora.",
  },
];

const milestones = [
  { year: "2025", event: "Fundação da Evolvify — nasce com o propósito de transformar empresas através da inteligência artificial e tecnologia sob medida." },
  { year: "2026", event: "Primeiros projetos entregues: 8 biolinks lançados para instituições e marcas que precisavam de presença digital estratégica." },
  { year: "2026", event: "Expansão com IA — implementação do sistema de gestão de desempenho de colaboradores e automações inteligentes para clientes." },
  { year: "2026", event: "Marco de +12 projetos entregues. Consolidação como referência em automação com IA e sistemas personalizados." },
];

const team = [
  {
    name: "Geraldo",
    role: "Engenheiro de Software",
    area: "Backend & Sistemas",
    description: "Responsável pela arquitetura e desenvolvimento dos sistemas e integrações que fazem tudo funcionar nos bastidores.",
  },
  {
    name: "Lucas",
    role: "Engenheiro de IA & Infra",
    area: "Infraestrutura & Inteligência Artificial",
    description: "Garante que os sistemas da Evolvify sejam escaláveis, estáveis e alimentados com as melhores soluções de IA disponíveis.",
  },
  {
    name: "Leonardo",
    role: "Frontend Architect & Commercial Lead",
    area: "Vendas, Operacional & Frontend",
    description: "Cuida de toda a frente comercial, operacional e da experiência visual dos produtos — da primeira conversa à entrega final.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden hex-bg">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-blue/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light text-xs font-medium mb-6">
              Nossa história
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Nascemos para{" "}
              <span className="gradient-text-blue">revolucionar</span>
              <span className="block gradient-text-gold">o jeito de trabalhar.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              A Evolvify existe para substituir complexidade por controle, clareza e eficiência total — usando inteligência artificial para transformar a forma como empresas operam e crescem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "12+", label: "Projetos entregues" },
              { icon: Users, value: "5+", label: "Clientes ativos" },
              { icon: Award, value: "100%", label: "Satisfação dos clientes" },
              { icon: Globe, value: "1", label: "Estado atendido" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card border border-white/6 rounded-2xl p-5 text-center"
                >
                  <Icon className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                  <p className="text-3xl font-bold font-display gradient-text-blue mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Target,
                emoji: "🚀",
                title: "Missão",
                color: "brand-blue",
                description:
                  "A Evolvify existe para revolucionar o funcionamento do trabalho através da inteligência artificial, automatizando processos e decisões que antes eram manuais, complexos ou impossíveis — permitindo que empresas aumentem seus resultados enquanto reduzem esforço operacional.",
              },
              {
                icon: Eye,
                emoji: "🔮",
                title: "Visão",
                color: "brand-gold",
                description:
                  "Ser referência nacional em inteligência artificial aplicada à gestão e automação empresarial, criando sistemas que redefinem a forma como empresas operam, evoluem e escalam no Brasil.",
              },
              {
                icon: Shield,
                emoji: "💎",
                title: "Valores",
                color: "brand-blue",
                description:
                  "Guiados por inovação contínua, perfeccionismo e evolução constante. Acreditamos que tecnologia só tem valor quando resolve problemas reais com inteligência aplicada — onde cada detalhe importa e nada é entregue de forma genérica.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card border border-white/6 rounded-2xl p-6"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      item.color === "brand-gold"
                        ? "bg-brand-gold/10 border border-brand-gold/20"
                        : "bg-brand-blue/10 border border-brand-blue/20"
                    }`}
                  >
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold font-display text-center mb-12">
              O que nos <span className="gradient-text-gold">guia</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card border border-white/6 rounded-xl p-5 text-center hover:border-brand-blue/20 transition-all"
                  >
                    <Icon className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold font-display text-center mb-12">
              Nossa <span className="gradient-text-blue">trajetória</span>
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 to-brand-gold/40" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full glass-card border border-brand-blue/20 flex items-center justify-center">
                        <span className="text-brand-blue-light font-bold text-sm">{m.year}</span>
                      </div>
                    </div>
                    <div className="glass-card border border-white/6 rounded-xl p-4 flex-1 mt-2">
                      <p className="text-white/70 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-display text-center mb-4">
              O time por trás da{" "}
              <span className="gradient-text-gold">Evolvify</span>
            </h2>
            <p className="text-white/40 text-center text-sm mb-12 max-w-xl mx-auto">
              Um time enxuto, especializado e comprometido — onde cada pessoa domina sua área e entrega com excelência.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card border border-white/6 rounded-2xl p-6 text-center hover:border-brand-blue/20 transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-blue-dark/50 border-2 border-brand-blue/20 flex items-center justify-center mx-auto mb-4 group-hover:border-brand-gold/40 transition-colors">
                    <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-brand-gold text-xs font-semibold mb-1">{member.role}</p>
                  <p className="text-white/30 text-xs mb-3">{member.area}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
