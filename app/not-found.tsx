"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hex-bg">
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-blue/8 rounded-full blur-[100px]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-4"
      >
        <p className="text-8xl font-bold font-display gradient-text-blue mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Página não encontrada</h1>
        <p className="text-white/50 mb-8 max-w-sm mx-auto">
          Esta página não existe ou foi movida. Mas sua empresa pode evoluir — volte para o início.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
        >
          <Home className="w-4 h-4" />
          Voltar ao início
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
