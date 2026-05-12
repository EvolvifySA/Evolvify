"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Calendar, Clock, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import CTA from "@/components/CTA";
import { use } from "react";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  function MockupImage() {
    const [failed, setFailed] = useState(false);
    const src = project!.mockupImage || project!.image;
    if (!failed && src) {
      return (
        <Image
          src={src}
          alt={`Mockup ${project!.name}`}
          fill
          className="object-cover rounded-2xl"
          onError={() => setFailed(true)}
        />
      );
    }
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <ExternalLink className="w-12 h-12 text-white/20 mx-auto mb-2" />
          <span className="text-white/20 text-sm">Mockup do projeto</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 hex-bg overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-blue/8 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para projetos
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="tech-badge text-sm">{project.category}</span>
              <div className="flex items-center gap-1.5 text-white/30 text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </div>
              <div className="flex items-center gap-1.5 text-white/30 text-sm">
                <Clock className="w-3.5 h-3.5" />
                {project.duration}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              {project.name}
            </h1>
            <p className="text-white/60 text-xl max-w-2xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Mockup image */}
              <div className="relative h-72 glass-card border border-white/6 rounded-2xl overflow-hidden mb-8">
                <MockupImage />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold font-display mb-4">Sobre o projeto</h2>
                <p className="text-white/60 leading-relaxed mb-8">{project.longDescription}</p>

                <h2 className="text-2xl font-bold font-display mb-4">
                  Resultados <span className="gradient-text-gold">alcançados</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="glass-card border border-green-500/15 rounded-xl p-4 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card border border-white/6 rounded-2xl p-5"
              >
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card border border-brand-gold/15 rounded-2xl p-5"
              >
                <h3 className="text-brand-gold font-semibold mb-2 text-sm uppercase tracking-wider">
                  Quer um projeto similar?
                </h3>
                <p className="text-white/50 text-sm mb-4">
                  Fala com a gente e a gente monta algo do seu jeito.
                </p>
                <Link
                  href="/contato"
                  className="btn-gold block text-center py-3 rounded-xl text-brand-dark font-bold text-sm"
                >
                  Bora conversar
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
