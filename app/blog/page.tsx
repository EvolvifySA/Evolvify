"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";

const categoryMeta: Record<string, { gradient: string; glow: string; dot: string }> = {
  IA:         { gradient: "from-brand-blue/40 via-violet-500/15 to-brand-dark-2",   glow: "group-hover:shadow-[0_0_40px_rgba(26,111,214,0.15)]", dot: "bg-brand-blue-light" },
  Automação:  { gradient: "from-cyan-500/25 via-brand-blue/10 to-brand-dark-2",     glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",  dot: "bg-cyan-400" },
  Dashboards: { gradient: "from-brand-gold/30 via-amber-500/10 to-brand-dark-2",    glow: "group-hover:shadow-[0_0_40px_rgba(217,157,45,0.15)]", dot: "bg-brand-gold" },
  Estratégia: { gradient: "from-emerald-500/25 via-teal-500/10 to-brand-dark-2",    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]", dot: "bg-emerald-400" },
  Cases:      { gradient: "from-purple-500/25 via-brand-blue/10 to-brand-dark-2",   glow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]", dot: "bg-purple-400" },
  Tecnologia: { gradient: "from-indigo-500/25 via-brand-blue/10 to-brand-dark-2",   glow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]", dot: "bg-indigo-400" },
};

function getCategoryMeta(cat: string) {
  return categoryMeta[cat] ?? categoryMeta["IA"];
}

function AbstractCover({ category, large = false }: { category: string; large?: boolean }) {
  const meta = getCategoryMeta(category);
  return (
    <div className={`relative w-full ${large ? "h-72 lg:h-full min-h-[320px]" : "h-48"} bg-gradient-to-br ${meta.gradient} overflow-hidden`}>
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow orb */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-40 ${meta.dot}`} />
      {/* Dots pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Category label */}
      <div className="absolute bottom-4 left-4">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/50">
          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
          {category}
        </span>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.find((p) => p.featured);
  const grid = activeCategory === "Todos"
    ? blogPosts.filter((p) => !p.featured)
    : filtered;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 hex-bg opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] h-[200px] bg-brand-gold/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">
                Evolvify Insights
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-6"
            >
              Inteligência
              <span className="block gradient-text-blue">que transforma</span>
              <span className="block text-white/30 text-4xl sm:text-5xl lg:text-6xl font-light mt-1">negócios.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 text-lg leading-relaxed max-w-xl"
            >
              Insights sobre IA, automação, operações e crescimento digital — escritos por quem implementa na prática.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Pills — sticky */}
      <div className="sticky top-16 lg:top-20 z-30 bg-brand-dark/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-none">
            {blogCategories.map((cat) => {
              const isActive = activeCategory === cat;
              const meta = cat !== "Todos" ? getCategoryMeta(cat) : null;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.96 }}
                  className={`relative flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 border border-white/20 text-white"
                      : "bg-transparent border border-white/8 text-white/40 hover:text-white/70 hover:border-white/15"
                  }`}
                >
                  {meta && (
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${meta.dot} ${isActive ? "opacity-100" : "opacity-50"}`} />
                  )}
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <AnimatePresence mode="wait">
        {featured && activeCategory === "Todos" && (
          <motion.section
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="py-12 relative"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className={`relative grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-white/8 transition-all duration-500 ${getCategoryMeta(featured.category).glow} hover:border-white/15`}>
                  {/* Cover */}
                  <AbstractCover category={featured.category} large />

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between bg-brand-dark-2/60 backdrop-blur-sm">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-gold/25 bg-brand-gold/8 text-brand-gold text-xs font-semibold uppercase tracking-wider">
                          ✦ Destaque
                        </span>
                        <span className="text-white/25 text-xs">
                          {featured.readTime} min de leitura
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white leading-tight mb-4 group-hover:text-brand-gold transition-colors duration-300">
                        {featured.title}
                      </h2>

                      <p className="text-white/45 text-base leading-relaxed mb-8">
                        {featured.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/25 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featured.readTime} min</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{featured.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-blue-light text-sm font-semibold group-hover:text-brand-gold transition-colors">
                        Ler insight <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Grid */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === "Todos" && grid.length > 0 && (
            <div className="flex items-center gap-4 mb-8">
              <span className="text-white/20 text-xs uppercase tracking-widest font-medium">Mais recentes</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {(activeCategory === "Todos" ? grid : filtered).map((post, i) => {
                const meta = getCategoryMeta(post.category);
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className={`group flex flex-col rounded-2xl overflow-hidden border border-white/6 bg-brand-dark-2/40 backdrop-blur-sm transition-all duration-300 hover:border-white/12 ${meta.glow} h-full`}
                    >
                      <AbstractCover category={post.category} />

                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-brand-gold transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-white/35 text-sm leading-relaxed mb-5 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="flex items-center gap-1.5 text-white/20 text-xs">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                          </div>
                          <div className="flex items-center gap-1 text-white/30 text-xs font-medium group-hover:text-brand-gold transition-colors">
                            Ler <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {(activeCategory !== "Todos" && filtered.length === 0) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/20 text-sm">Nenhum insight nesta categoria ainda.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
