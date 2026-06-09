"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import Image from "next/image";
import AISpecialistChat from "./AISpecialistChat";
import { openWhatsApp } from "@/lib/whatsapp";

interface FormData {
  name: string;
  company: string;
  whatsapp: string;
  need: string;
}

export default function SpecialistContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"chat" | "form" | "sent">("chat");
  const [selectedNeed, setSelectedNeed] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    whatsapp: "",
    need: "",
  });

  const handleSelectNeed = (need: string) => {
    setSelectedNeed(need);
    setTimeout(() => {
      setStep("form");
      setForm((prev) => ({ ...prev, need }));
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(form);
    setStep("sent");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep("chat");
      setSelectedNeed("");
      setForm({ name: "", company: "", whatsapp: "", need: "" });
    }, 300);
  };

  return (
    <>
      {/* Trigger invisÃ­vel â€” acionado por outros componentes */}
      <button
        id="specialist-contact-btn"
        onClick={() => setIsOpen(true)}
        className="hidden"
        aria-hidden="true"
      />


      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm glass-card border border-brand-blue/20 rounded-2xl overflow-hidden shadow-2xl shadow-brand-blue/20"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-blue-dark to-brand-blue p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 flex-shrink-0">
                    <Image src="/mascotefeliz.webp" alt="Evo" width={40} height={40} className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Evo â€” Assistente Evolvify</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-white/60 text-xs">Online agora</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4">
                <AnimatePresence mode="wait">
                  {step === "chat" && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <AISpecialistChat onSelectNeed={handleSelectNeed} />
                    </motion.div>
                  )}

                  {step === "form" && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <p className="text-white/70 text-xs mb-3 leading-relaxed">
                        Nossa IA especialista vai entender sua necessidade e indicar a melhor soluÃ§Ã£o para sua empresa.
                      </p>

                      {selectedNeed && (
                        <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-brand-blue/10 border border-brand-blue/20 inline-flex items-center gap-1.5">
                          <span className="text-xs text-brand-gold">âœ¦</span>
                          <span className="text-xs text-brand-blue-light font-medium">{selectedNeed}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-2.5">
                        {[
                          { name: "name", placeholder: "Seu nome completo", type: "text" },
                          { name: "company", placeholder: "Nome da empresa", type: "text" },
                          { name: "whatsapp", placeholder: "WhatsApp com DDD", type: "tel" },
                        ].map((field) => (
                          <input
                            key={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={form[field.name as keyof FormData]}
                            onChange={(e) =>
                              setForm((prev) => ({ ...prev, [field.name]: e.target.value }))
                            }
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/5 transition-all"
                          />
                        ))}

                        <button
                          type="submit"
                          className="w-full btn-gold py-2.5 rounded-xl text-brand-dark font-bold text-sm flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          Falar no WhatsApp Agora
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {step === "sent" && (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <div className="w-14 h-14 mx-auto mb-3">
                        <Image src="/mascotefeliz.webp" alt="Evo" width={56} height={56} className="w-full h-full" />
                      </div>
                      <h3 className="text-white font-bold text-base mb-2">
                        WhatsApp Aberto!
                      </h3>
                      <p className="text-white/60 text-xs">
                        Um especialista vai te atender em instantes.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-4 btn-primary px-6 py-2 rounded-xl text-white text-sm font-medium"
                      >
                        Fechar
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

