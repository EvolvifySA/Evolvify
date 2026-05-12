"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function EvoMascot() {
  const [showBubble, setShowBubble] = useState(false);
  const [wave, setWave] = useState(false);

  // Abre o balão automaticamente após 4s
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Acena a cada 6s para chamar atenção
  useEffect(() => {
    const interval = setInterval(() => {
      setWave(true);
      setTimeout(() => setWave(false), 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Balão de fala */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="relative glass-card border border-brand-blue/25 rounded-2xl p-4 max-w-[220px] shadow-glow-blue"
          >
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-brand-dark-3 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            {/* Cauda do balão */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 glass-card border-r border-b border-brand-blue/25 rotate-45" />
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              <span className="text-xs font-semibold text-brand-gold">Evo</span>
            </div>
            <p className="text-white/90 text-xs leading-relaxed mb-3">
              Olá! Eu sou o <strong className="text-brand-gold">Evo</strong>.
              <br />
              Vamos evoluir sua empresa? 🚀
            </p>
            <button
              onClick={() => {
                setShowBubble(false);
                document.getElementById("specialist-contact-btn")?.click();
              }}
              className="w-full btn-gold text-xs py-2 px-3 rounded-lg text-brand-dark font-bold text-center"
            >
              Falar com a IA ⚡
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascote */}
      <motion.button
        onClick={() => setShowBubble(!showBubble)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-16 h-16 cursor-pointer"
        animate={wave
          ? { rotate: [0, -15, 15, -10, 10, 0], y: [0, -4, 0] }
          : { y: [0, -8, 0] }
        }
        transition={wave
          ? { duration: 0.8, ease: "easeInOut" }
          : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Anel de pulso */}
        <motion.div
          className="absolute inset-0 rounded-full bg-brand-blue/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-brand-gold/20"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Avatar */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-dark-3 border-2 border-brand-blue/50 shadow-glow-blue flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 56 56" className="w-13 h-13" fill="none">
            <circle cx="28" cy="28" r="22" fill="url(#evoGrad)" />
            {/* Olhos */}
            <ellipse cx="21" cy="24" rx="3.5" ry="4" fill="#0A1628" />
            <ellipse cx="35" cy="24" rx="3.5" ry="4" fill="#0A1628" />
            <ellipse cx="21" cy="24" rx="2" ry="2.5" fill="#3B8EE8" opacity="0.9" />
            <ellipse cx="35" cy="24" rx="2" ry="2.5" fill="#3B8EE8" opacity="0.9" />
            <circle cx="22" cy="23" r="0.8" fill="white" />
            <circle cx="36" cy="23" r="0.8" fill="white" />
            {/* Sorriso */}
            <path d="M20 33 Q28 39 36 33" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Detalhes laterais */}
            <path d="M10 20 L6 18 M10 28 L6 28 M10 36 L6 34" stroke="#1A6FD6" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <path d="M46 20 L50 18 M46 28 L50 28 M46 36 L50 34" stroke="#1A6FD6" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            {/* Antena */}
            <line x1="28" y1="6" x2="28" y2="14" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28" cy="5" r="2" fill="#F5A623" />
            <defs>
              <radialGradient id="evoGrad" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#1E7FE8" />
                <stop offset="100%" stopColor="#0A2D6E" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Badge AI */}
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center shadow-glow-gold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-[8px] font-bold text-brand-dark">AI</span>
        </motion.div>
      </motion.button>
    </div>
  );
}
