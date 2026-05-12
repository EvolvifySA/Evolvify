"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import CTA from "@/components/CTA";

const categoryMeta: Record<string, { gradient: string; dot: string }> = {
  IA:         { gradient: "from-brand-blue/40 via-violet-500/15 to-brand-dark-2",   dot: "bg-brand-blue-light" },
  Automação:  { gradient: "from-cyan-500/25 via-brand-blue/10 to-brand-dark-2",     dot: "bg-cyan-400" },
  Dashboards: { gradient: "from-brand-gold/30 via-amber-500/10 to-brand-dark-2",    dot: "bg-brand-gold" },
  Estratégia: { gradient: "from-emerald-500/25 via-teal-500/10 to-brand-dark-2",    dot: "bg-emerald-400" },
  Cases:      { gradient: "from-purple-500/25 via-brand-blue/10 to-brand-dark-2",   dot: "bg-purple-400" },
  Tecnologia: { gradient: "from-indigo-500/25 via-brand-blue/10 to-brand-dark-2",   dot: "bg-indigo-400" },
};

function ArticleCover({ category }: { category: string }) {
  const meta = categoryMeta[category] ?? categoryMeta["IA"];
  return (
    <div className={`relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br ${meta.gradient}`}>
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-30 ${meta.dot}`} />
      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute bottom-4 left-5">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/50">
          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
          {category}
        </span>
      </div>
    </div>
  );
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-12 hex-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-blue/6 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="tech-badge">{post.category}</span>
              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <Calendar className="w-3 h-3" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <Clock className="w-3 h-3" />
                {post.readTime} min de leitura
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Cover */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ArticleCover category={post.category} />
      </div>

      {/* Content */}
      <section className="pb-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 prose prose-invert prose-sm max-w-none"
            >
              <div className="glass-card border border-white/6 rounded-2xl p-8">
                <div
                  className="text-white/70 leading-relaxed space-y-4 text-sm"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {post.content.split("\n").map((line, i) => {
                    if (line.startsWith("## ")) {
                      return (
                        <h2 key={i} className="text-white font-bold text-xl mt-8 mb-3">
                          {line.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (line.startsWith("### ")) {
                      return (
                        <h3 key={i} className="text-white font-semibold text-lg mt-6 mb-2">
                          {line.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return (
                        <p key={i} className="text-white font-semibold">
                          {line.replace(/\*\*/g, "")}
                        </p>
                      );
                    }
                    if (line.trim() === "") return <br key={i} />;
                    return (
                      <p key={i} className="text-white/60 leading-relaxed">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Tags */}
              <div className="glass-card border border-white/6 rounded-2xl p-5">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>

              {/* CTA sidebar */}
              <div className="glass-card border border-brand-gold/15 rounded-2xl p-5">
                <p className="text-brand-gold font-semibold text-sm mb-2">
                  Precisa de ajuda?
                </p>
                <p className="text-white/50 text-xs mb-4">
                  Fale com nossos especialistas e descubra como aplicar isso na sua empresa.
                </p>
                <Link
                  href="/contato"
                  className="btn-gold block text-center py-2.5 rounded-xl text-brand-dark font-bold text-sm"
                >
                  Falar com especialista
                </Link>
              </div>

              {/* Related */}
              <div className="glass-card border border-white/6 rounded-2xl p-5">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Leia também
                </h3>
                <div className="space-y-3">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      href={`/blog/${p.slug}`}
                      className="block text-white/60 text-xs hover:text-brand-gold transition-colors leading-relaxed"
                    >
                      → {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
