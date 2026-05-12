"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

function ProjectImage({ src, alt, category }: { src: string; alt: string; category: string }) {
  const [failed, setFailed] = useState(false);
  if (!failed && src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setFailed(true)}
      />
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center mx-auto mb-2">
          <ExternalLink className="w-7 h-7 text-brand-blue-light" />
        </div>
        <span className="text-white/20 text-xs">{category}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projetos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-medium mb-4">
            Cases reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Projetos que{" "}
            <span className="gradient-text-gold">geraram resultados</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Veja como transformamos operações de empresas reais com tecnologia e estratégia.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card border border-white/6 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-dark-3 to-brand-dark-2 overflow-hidden">
                <ProjectImage src={project.image} alt={project.name} category={project.category} />
                <div className="absolute top-3 left-3">
                  <span className="tech-badge">{project.category}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-white/30 text-xs bg-brand-dark-2/80 px-2 py-0.5 rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Results */}
                <div className="space-y-1.5 mb-4">
                  {project.results.slice(0, 2).map((result) => (
                    <div key={result} className="flex items-start gap-2">
                      <span className="text-brand-gold text-xs mt-0.5">↗</span>
                      <span className="text-white/40 text-xs">{result}</span>
                    </div>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Ver todos os projetos <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
