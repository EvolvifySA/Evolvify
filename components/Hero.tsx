"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, TrendingUp, Zap, Shield } from "lucide-react";

const stats = [
  { value: "12+", label: "Projetos entregues" },
  { value: "100%", label: "Clientes satisfeitos" },
  { value: "3x", label: "Crescimento médio em 1 ano" },
  { value: "24/7", label: "Suporte especializado" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hex-bg">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Mascote raio de fundo */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[600px] h-[600px] opacity-30 pointer-events-none select-none">
        <Image src="/mascoteraio.svg" alt="" width={600} height={600} className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-6"
            >
              <Zap className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-xs font-medium text-brand-blue-light">
                Tecnologia que transforma negócios
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold font-display leading-tight mb-6"
            >
              Sua empresa
              <span className="block gradient-text-blue">merece tecnologia</span>
              <span className="block">
                de <span className="gradient-text-gold">alto nível.</span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Sistemas personalizados, automações com IA e dashboards inteligentes que eliminam retrabalho, aumentam produtividade e fazem seu negócio crescer com controle total.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Link
                href="/contato"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-brand-dark font-bold text-sm"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => document.getElementById("specialist-contact-btn")?.click()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white/80 font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-brand-gold text-brand-gold" />
                Falar com especialista
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              {[
                { icon: Shield, text: "Projetos com garantia" },
                { icon: TrendingUp, text: "Resultados comprovados" },
                { icon: Zap, text: "Entrega ágil" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-brand-gold" />
                  <span className="text-white/50 text-xs">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Mockup visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative glass-card rounded-2xl border border-white/8 p-1 shadow-glow-blue">
              {/* Header bar */}
              <div className="bg-brand-dark-3 rounded-xl p-3 flex items-center gap-2 mb-1">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 bg-brand-dark-2 rounded-lg h-5 flex items-center px-3">
                  <span className="text-white/30 text-[10px]">app.evolvify.com.br/dashboard</span>
                </div>
              </div>

              {/* Dashboard mock */}
              <div className="bg-brand-dark-2 rounded-xl p-4">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { label: "Receita", value: "R$ 847k", color: "text-green-400", bar: "bg-green-500" },
                    { label: "Leads", value: "1.284", color: "text-brand-blue-light", bar: "bg-brand-blue" },
                    { label: "NPS", value: "87", color: "text-brand-gold", bar: "bg-brand-gold" },
                  ].map((item) => (
                    <div key={item.label} className="glass-card rounded-xl p-3">
                      <p className="text-white/40 text-[9px] mb-1">{item.label}</p>
                      <p className={`font-bold text-sm ${item.color}`}>{item.value}</p>
                      <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${item.bar} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.random() * 40 + 50}%` }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart mock */}
                <div className="glass-card rounded-xl p-3 mb-2">
                  <p className="text-white/40 text-[9px] mb-2">Receita Mensal</p>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 78, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          background: `linear-gradient(to top, #1A6FD6, #3B8EE8)`,
                          opacity: 0.6 + (h / 100) * 0.4,
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div className="space-y-1.5">
                  {[
                    { text: "Nova venda confirmada", time: "agora", dot: "bg-green-400" },
                    { text: "Relatório gerado automaticamente", time: "2min", dot: "bg-brand-blue" },
                    { text: "Meta de MRR atingida 🎯", time: "5min", dot: "bg-brand-gold" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 glass-card rounded-lg px-2.5 py-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.dot} flex-shrink-0`} />
                      <span className="text-white/60 text-[9px] flex-1">{item.text}</span>
                      <span className="text-white/25 text-[8px]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card border border-brand-gold/20 rounded-xl px-3 py-2 shadow-glow-gold"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-gold" />
                <div>
                  <p className="text-brand-gold font-bold text-xs">+312%</p>
                  <p className="text-white/40 text-[8px]">crescimento em 12 meses</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card border border-brand-blue/20 rounded-xl px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-brand-blue-light" />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs">IA Ativa</p>
                  <p className="text-white/40 text-[8px]">24/7 automatizado</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const isClientes = stat.label === "Clientes satisfeitos";
            const Wrapper = isClientes ? "a" : "div";
            return (
              <Wrapper
                key={stat.label}
                {...(isClientes ? { href: "#depoimentos" } : {})}
                className={`text-center glass-card border border-white/5 rounded-2xl p-5 ${isClientes ? "hover:border-brand-gold/30 hover:shadow-glow-gold transition-all duration-200 cursor-pointer" : ""}`}
              >
                <p className="text-3xl font-bold font-display gradient-text-blue mb-1">
                  {stat.value}
                </p>
                <p className={`text-sm ${isClientes ? "text-brand-gold/80" : "text-white/50"}`}>{stat.label}</p>
              </Wrapper>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
