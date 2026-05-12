"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import CTA from "@/components/CTA";

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hex-bg overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-medium mb-6">
              Cases de sucesso
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
              Projetos que{" "}
              <span className="gradient-text-gold">comprovam resultados</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Cada projeto é uma história de transformação real. Veja como resolvemos desafios complexos com tecnologia precisa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 sticky top-16 z-30 bg-brand-dark/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white shadow-glow-sm-blue"
                    : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="group glass-card border border-white/6 rounded-2xl overflow-hidden hover:border-brand-gold/25 transition-all duration-300"
                >
                  {/* Image area */}
                  <div className="h-48 bg-gradient-to-br from-brand-dark-3 to-brand-dark-2 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="w-7 h-7 text-brand-blue-light" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="tech-badge">{project.category}</span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="text-white/30 text-xs bg-brand-dark-2/80 px-2 py-0.5 rounded-full">
                        {project.duration}
                      </span>
                      <span className="text-white/30 text-xs bg-brand-dark-2/80 px-2 py-0.5 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-1.5 mb-4">
                      {project.results.slice(0, 2).map((r) => (
                        <div key={r} className="flex items-start gap-2">
                          <span className="text-green-400 text-xs mt-0.5">✓</span>
                          <span className="text-white/40 text-xs">{r}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>

                    <Link
                      href={`/projetos/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-brand-blue-light text-sm font-medium hover:text-brand-gold transition-colors"
                    >
                      Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      <CTA />
    </>
  );
}
