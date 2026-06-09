"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="text-center mb-10"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest font-medium">
            Empresas que jÃ¡ evoluÃ­ram com a gente
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass-card border border-white/6 rounded-2xl p-6 flex items-center justify-center"
        >
          <Image
            src="/clientes.webp"
            alt="Nossos clientes"
            width={900}
            height={300}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

