"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, ArrowRight } from "lucide-react";

interface Message {
  id: number;
  from: "ai" | "user";
  text: string;
  typing?: boolean;
}

const introMessages = [
  "Olá! Sou a IA especialista da Evolvify. 👋",
  "Me diz: o que sua empresa mais precisa agora?",
];

const needOptions = [
  "Automação com IA",
  "Sistema Financeiro",
  "Dashboard / Analytics",
  "Gestão de Equipes",
  "Biolink",
  "Outro / Não sei ainda",
];

const needResponses: Record<string, string[]> = {
  "Automação com IA": [
    "Nossas Automações com IA eliminam tarefas repetitivas e deixam sua equipe livre para o que realmente importa.",
    "Benefícios principais:\n• Atendimento 24/7 via WhatsApp sem custo de pessoal\n• Cobrança e follow-up automáticos\n• Triagem e qualificação de leads sem intervenção humana\n• Relatórios enviados direto no seu WhatsApp",
    "Clientes nossos reduziram até 90% do trabalho manual — e viram retorno já nos primeiros 30 dias. ⚡",
  ],
  "Sistema Financeiro": [
    "O Sistema Financeiro da Evolvify é desenvolvido sob medida para o seu negócio — não é um ERP genérico.",
    "Benefícios principais:\n• Fluxo de caixa em tempo real\n• Conciliação bancária automática\n• Relatórios gerenciais sem planilha\n• Alertas de vencimentos e metas",
    "Empresas que implementaram reduziram o fechamento mensal de 5 dias para 1 dia, com zero erros. 📊",
  ],
  "Dashboard / Analytics": [
    "Nossos dashboards conectam todas as fontes de dados da sua empresa e atualizam em tempo real.",
    "Benefícios principais:\n• Visão completa do negócio em uma tela\n• KPIs atualizados automaticamente\n• Alertas quando algo sai da meta\n• Acesso pelo celular para decisões em qualquer lugar",
    "Gestores que usam passam a tomar decisões 3x mais rápido — com dados reais, não feeling. 📈",
  ],
  "Gestão de Equipes": [
    "Nossa plataforma de gestão de colaboradores transforma dados de pessoas em decisões estratégicas.",
    "Benefícios principais:\n• Avaliações 360° automatizadas\n• OKRs e metas por colaborador\n• Dashboard de engajamento em tempo real\n• Redução de turnover com dados preditivos",
    "Empresas que implementaram reduziram o turnover em até 40% no primeiro ano. 👥",
  ],
  "Biolink": [
    "O Biolink da Evolvify é muito mais do que um Linktree — é uma extensão estratégica da sua marca.",
    "Benefícios principais:\n• Design alinhado à identidade da sua marca\n• Hierarquia de links pensada para conversão\n• Centralize redes, contato, portfólio e links importantes\n• Seu público sempre sabe onde ir",
    "Ideal para marcas, instituições e profissionais que querem uma presença digital elegante e organizada. 🔗",
  ],
  "Outro / Não sei ainda": [
    "Sem problema! É muito comum não saber exatamente por onde começar.",
    "Nossos especialistas fazem um diagnóstico gratuito da sua operação e indicam o que vai gerar mais resultado.",
    "É rápido, sem compromisso e sem enrolação. Vamos entender seu negócio antes de recomendar qualquer coisa. 🎯",
  ],
};

interface AISpecialistChatProps {
  onSelectNeed?: (_need: string) => void;
}

export default function AISpecialistChat({ onSelectNeed }: AISpecialistChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [introIndex, setIntroIndex] = useState(0);
  const [phase, setPhase] = useState<"intro" | "options" | "explaining" | "done">("intro");
  const [selectedNeed, setSelectedNeed] = useState("");
  const [responseIndex, setResponseIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Intro messages
  useEffect(() => {
    if (phase !== "intro") return;
    if (introIndex >= introMessages.length) {
      setTimeout(() => setPhase("options"), 400);
      return;
    }
    const delay = introIndex === 0 ? 400 : 1800;
    const t = setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now(), from: "ai", text: "", typing: true }]);
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, text: introMessages[introIndex], typing: false } : m
          )
        );
        setIntroIndex((i) => i + 1);
      }, 1100);
    }, delay);
    return () => clearTimeout(t);
  }, [introIndex, phase]);

  // Explanation messages after selection
  useEffect(() => {
    if (phase !== "explaining") return;
    const responses = needResponses[selectedNeed] ?? [];
    if (responseIndex >= responses.length) {
      setTimeout(() => setPhase("done"), 400);
      return;
    }
    const t = setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now(), from: "ai", text: "", typing: true }]);
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, text: responses[responseIndex], typing: false } : m
          )
        );
        setResponseIndex((i) => i + 1);
      }, 1200);
    }, responseIndex === 0 ? 600 : 2000);
    return () => clearTimeout(t);
  }, [phase, responseIndex, selectedNeed]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, phase]);

  const handleSelectOption = (need: string) => {
    setPhase("explaining");
    setSelectedNeed(need);
    setResponseIndex(0);
    setMessages((prev) => [...prev, { id: Date.now(), from: "user", text: need }]);
  };

  const handleContact = () => {
    onSelectNeed?.(selectedNeed);
  };

  return (
    <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-1 scrollbar-none">
      <AnimatePresence mode="popLayout">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.from === "ai"
                ? "bg-gradient-to-br from-brand-blue to-brand-blue-dark"
                : "bg-white/10"
            }`}>
              {msg.from === "ai"
                ? <Bot className="w-3.5 h-3.5 text-white" />
                : <User className="w-3.5 h-3.5 text-white" />
              }
            </div>

            <div className={`max-w-[82%] rounded-2xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${
              msg.from === "ai"
                ? "bg-brand-blue/15 border border-brand-blue/20 text-white/90 rounded-tl-sm"
                : "bg-white/10 border border-white/10 text-white/80 rounded-tr-sm"
            }`}>
              {msg.typing ? (
                <div className="flex items-center gap-1 py-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-brand-blue"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              ) : msg.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Option buttons */}
      <AnimatePresence>
        {phase === "options" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-1.5 mt-1"
          >
            {needOptions.map((need) => (
              <button
                key={need}
                onClick={() => handleSelectOption(need)}
                className="text-[10px] px-2.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-blue-light hover:bg-brand-blue/25 hover:border-brand-blue/50 transition-all duration-150 font-medium"
              >
                {need}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA after explanation */}
      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1"
          >
            <button
              onClick={handleContact}
              className="w-full btn-gold py-2.5 rounded-xl text-brand-dark font-bold text-xs flex items-center justify-center gap-2"
            >
              Quero entrar em contato
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={messagesEndRef} />
    </div>
  );
}
