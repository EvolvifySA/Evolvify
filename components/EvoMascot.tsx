"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

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
              <Image src="/mascotefeliz.svg" alt="Evo" width={20} height={20} className="w-5 h-5" />
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
        <div className="relative w-16 h-16">
          <Image src="/mascotefeliz.svg" alt="Evo" width={64} height={64} className="w-16 h-16" />
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
