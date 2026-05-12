"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { contactConfig, getWhatsAppLink } from "@/config/contact";

export default function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-contact-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setLoading(false);
      setSent(true);

      setTimeout(() => {
        const whatsappMessage = `Olá! Me chamo ${form.name} e já enviei minha mensagem pelo site. Gostaria de conversar mais sobre as soluções da Evolvify.`;
        const waLink = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(waLink, "_blank");
      }, 2000);
    } catch (err) {
      setLoading(false);
      setError("Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.");
      console.error("Erro:", err);
    }
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const waLink = getWhatsAppLink(
    `Oi! Me chamo ${form.name || "___"} e quero saber mais sobre automações com IA.`
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hex-bg overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-medium mb-6">
              Bora conversar?
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
              Fala com a{" "}
              <span className="gradient-text-gold">gente</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Sem enrolação. Manda uma mensagem e a gente te responde rápido pra entender o que você precisa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* WhatsApp CTA */}
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group flex items-center gap-4 glass-card border border-green-500/25 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/25 transition-colors">
              <MessageCircle className="w-7 h-7 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-lg">WhatsApp — jeito mais rápido</p>
              <p className="text-white/50 text-sm">Clica aqui e manda uma mensagem direto. A gente responde na hora.</p>
            </div>
            <span className="text-green-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Abrir →
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${contactConfig.email.contact}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="group flex items-center gap-4 glass-card border border-white/6 rounded-2xl p-5 hover:border-brand-blue/25 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-brand-blue-light" />
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">E-mail</p>
              <p className="text-white font-medium text-sm">{contactConfig.email.contact}</p>
            </div>
          </motion.a>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-white/25 text-xs">ou deixa seus dados aqui</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card border border-green-500/20 rounded-2xl p-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold font-display text-white mb-3">
                  Mensagem enviada!
                </h2>
                <p className="text-white/60 max-w-sm mx-auto">
                  Recebemos seu contato! Enviamos uma cópia para seu email. Você será redirecionado para o WhatsApp em breve. Se não redirecionar automaticamente, <a href={getWhatsAppLink(`Olá! Me chamo ${form.name} e já enviei minha mensagem pelo site.`)} target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:text-brand-gold transition-colors">clique aqui</a>.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card border border-white/6 rounded-2xl p-8 space-y-5"
              >
                <h2 className="text-lg font-bold text-white mb-1">Manda uma mensagem</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Seu nome *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Como te chamamos?"
                      className="w-full bg-white/15 border border-white/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-white/15 border border-white/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">O que você precisa? *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Me conta o que tá rolando na sua empresa, o que você quer automatizar ou resolver..."
                    className="w-full bg-white/15 border border-white/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/10 transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold py-4 rounded-xl text-brand-dark font-bold text-base flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar mensagem
                    </>
                  )}
                </button>
                <p className="text-white/25 text-xs text-center">
                  A gente responde rápido, sem enrolação.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </>
  );
}
