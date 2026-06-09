"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, RotateCcw } from "lucide-react";
import Image from "next/image";

interface Message {
  id: number;
  from: "ai" | "user";
  text: string;
  typing?: boolean;
}

interface Chip {
  label: string;
  flow: string;
}

interface Flow {
  messages: string[];
  chips?: Chip[];
  done?: boolean;
}

const flows: Record<string, Flow> = {
  start: {
    messages: [
      "Olá! Sou a Evo, assistente virtual da Evolvify. 👋",
      "O que sua empresa mais precisa agora?",
    ],
    chips: [
      { label: "🤖 Automação com IA", flow: "automacao" },
      { label: "🔗 Biolink", flow: "biolink" },
      { label: "🌐 Site Profissional", flow: "site" },
      { label: "💬 Atendimento Virtual", flow: "atendimento" },
      { label: "🤔 Não sei por onde começar", flow: "nao-sei" },
    ],
  },
  automacao: {
    messages: [
      "Boa escolha! Automação com IA é nossa especialidade. 🚀",
      "O que você quer automatizar?",
    ],
    chips: [
      { label: "Atendimento no WhatsApp", flow: "automacao-whatsapp" },
      { label: "Cobrança e follow-up", flow: "automacao-cobranca" },
      { label: "Relatórios e dashboards", flow: "automacao-relatorios" },
    ],
  },
  "automacao-whatsapp": {
    messages: [
      "Perfeito! Um bot de atendimento no WhatsApp trabalha 24h por dia, sem custo de pessoal adicional. 💪",
      "Ele qualifica leads, responde dúvidas, agenda reuniões e só chama um humano quando o cliente está pronto para fechar.",
      "Clientes nossos reduziram até 90% do trabalho manual e viram retorno já nos primeiros 30 dias. ⚡",
    ],
    chips: [{ label: "Quero saber mais", flow: "contato" }],
    done: true,
  },
  "automacao-cobranca": {
    messages: [
      "Cobranças e follow-up automáticos eliminam a inadimplência sem constrangimento. 📬",
      "O sistema envia lembretes personalizados, renegocia automaticamente e mantém seu caixa sempre atualizado.",
    ],
    chips: [{ label: "Quero saber mais", flow: "contato" }],
    done: true,
  },
  "automacao-relatorios": {
    messages: [
      "Imagine receber todo dia um relatório completo do seu negócio direto no WhatsApp — sem abrir sistema nenhum. 📊",
      "Nossos dashboards conectam todas as fontes de dados e atualizam em tempo real. Gestores tomam decisões 3x mais rápido.",
    ],
    chips: [{ label: "Quero saber mais", flow: "contato" }],
    done: true,
  },
  biolink: {
    messages: [
      "O Biolink da Evolvify é muito mais que um Linktree — é uma extensão da sua marca. 🔗",
      "Um único link profissional com todas as suas redes, contato, portfólio e o que mais precisar.",
    ],
    chips: [
      { label: "Ver planos e valores", flow: "biolink-planos" },
      { label: "Quero falar com a equipe", flow: "contato" },
    ],
  },
  "biolink-planos": {
    messages: [
      "Temos dois caminhos para você:",
      "• Biolink: R$ 500 implementação + R$ 100/mês\n• Biolink + Site: R$ 700 implementação + R$ 200/mês\n• Site: R$ 500 implementação + R$ 150/mês",
      "Entrega em poucos dias úteis, sem burocracia. 🚀",
    ],
    chips: [{ label: "Quero contratar", flow: "contato" }],
    done: true,
  },
  site: {
    messages: [
      "Um site profissional faz toda a diferença na hora de conquistar novos clientes. 🌐",
      "Que tipo de site você precisa?",
    ],
    chips: [
      { label: "Site institucional", flow: "site-institucional" },
      { label: "Landing page", flow: "site-landing" },
    ],
  },
  "site-institucional": {
    messages: [
      "Criamos sites institucionais modernos, rápidos e com SEO configurado para você aparecer no Google. ✅",
      "R$ 500 de implementação + R$ 150/mês. Entrega em até 7 dias úteis.",
    ],
    chips: [{ label: "Quero contratar", flow: "contato" }],
    done: true,
  },
  "site-landing": {
    messages: [
      "Landing pages são ideais para campanhas, lançamentos e captura de leads. 🎯",
      "Desenvolvemos com foco em conversão — cada elemento pensado para transformar visitante em cliente.",
      "Entre em contato para um orçamento personalizado.",
    ],
    chips: [{ label: "Quero um orçamento", flow: "contato" }],
    done: true,
  },
  atendimento: {
    messages: [
      "Nosso serviço de Atendimento Virtual garante que nenhum cliente fique sem resposta. 💬",
      "Qual é o tamanho da sua operação?",
    ],
    chips: [
      { label: "Pequeno negócio", flow: "atendimento-essencial" },
      { label: "Empresa maior", flow: "atendimento-empresarial" },
      { label: "Quero IA personalizada", flow: "atendimento-ia" },
    ],
  },
  "atendimento-essencial": {
    messages: [
      "Plano Essencial: R$ 600 de implementação + R$ 350/mês. 📱",
      "Inclui atendimento via WhatsApp, respostas humanizadas, agendamentos e relatório mensal.",
    ],
    chips: [{ label: "Quero contratar", flow: "contato" }],
    done: true,
  },
  "atendimento-empresarial": {
    messages: [
      "Plano Empresarial: R$ 600 de implementação + R$ 600/mês. 🏢",
      "Maior volume de atendimentos, múltiplos canais, relatórios semanais e gestor de conta dedicado.",
    ],
    chips: [{ label: "Quero contratar", flow: "contato" }],
    done: true,
  },
  "atendimento-ia": {
    messages: [
      "A IA Personalizada é treinada do zero com os dados do seu negócio. 🤖",
      "Pode ser apenas de confirmação, atendimento completo ou qualquer fluxo que você precisar.",
      "O valor é sob consulta — é bem mais fácil a gente entender sua operação antes de precificar.",
    ],
    chips: [{ label: "Quero um orçamento", flow: "contato" }],
    done: true,
  },
  "nao-sei": {
    messages: [
      "Sem problema! É muito comum não saber por onde começar. 😊",
      "Nossos especialistas fazem um diagnóstico gratuito da sua operação e indicam o que vai gerar mais resultado.",
      "Rápido, sem compromisso e sem enrolação. Vamos entender seu negócio antes de recomendar qualquer coisa. 🎯",
    ],
    chips: [{ label: "Quero o diagnóstico gratuito", flow: "contato" }],
    done: true,
  },
  contato: {
    messages: ["Perfeito! Vou te conectar com nosso time agora. 🙌"],
    done: true,
  },
};

interface AISpecialistChatProps {
  onSelectNeed?: (_need: string) => void;
}

export default function AISpecialistChat({ onSelectNeed }: AISpecialistChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentChips, setCurrentChips] = useState<Chip[]>([]);
  const [chipsDisabled, setChipsDisabled] = useState(false);
  const [phase, setPhase] = useState<"running" | "done">("running");
  const [currentFlow, setCurrentFlow] = useState("start");
  const [msgQueue, setMsgQueue] = useState<string[]>([]);
  const [pendingChips, setPendingChips] = useState<Chip[] | undefined>();
  const [pendingDone, setPendingDone] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef(false);

  const addTypingThenMessage = (text: string, onDone: () => void) => {
    const typingId = Date.now();
    setMessages((prev) => [...prev, { id: typingId, from: "ai", text: "", typing: true }]);
    const delay = 1800 + Math.random() * 600;
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) => (m.id === typingId ? { ...m, text, typing: false } : m))
      );
      onDone();
    }, delay);
  };

  const runMsgQueue = (queue: string[], chips?: Chip[], done?: boolean) => {
    if (queue.length === 0) {
      if (chips) setCurrentChips(chips);
      if (done) setPhase("done");
      processingRef.current = false;
      return;
    }
    const [first, ...rest] = queue;
    addTypingThenMessage(first, () => {
      setTimeout(() => runMsgQueue(rest, chips, done), 300);
    });
  };

  const startFlow = (flowId: string, userLabel?: string) => {
    if (processingRef.current) return;
    processingRef.current = true;
    setChipsDisabled(true);
    setCurrentChips([]);
    setPhase("running");

    if (userLabel) {
      setMessages((prev) => [...prev, { id: Date.now(), from: "user", text: userLabel }]);
    }

    const flow = flows[flowId];
    if (!flow) return;

    setTimeout(() => runMsgQueue(flow.messages, flow.chips, flow.done), userLabel ? 400 : 0);
  };

  useEffect(() => {
    startFlow("start");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentChips.length > 0) setChipsDisabled(false);
  }, [currentChips]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentChips, phase]);

  const handleChip = (chip: Chip) => {
    if (chipsDisabled) return;
    if (chip.flow === "contato") {
      setMessages((prev) => [...prev, { id: Date.now(), from: "user", text: chip.label }]);
      setCurrentChips([]);
      setChipsDisabled(true);
      addTypingThenMessage("Perfeito! Vou te conectar com nosso time agora. 🙌", () => {
        setPhase("done");
        processingRef.current = false;
      });
      onSelectNeed?.(chip.label);
      return;
    }
    startFlow(chip.flow, chip.label);
  };

  const handleRestart = () => {
    setMessages([]);
    setCurrentChips([]);
    setChipsDisabled(false);
    setPhase("running");
    processingRef.current = false;
    setTimeout(() => startFlow("start"), 100);
  };

  return (
    <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-1 scrollbar-none">
      <AnimatePresence mode="popLayout">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div className={`w-8 h-8 flex-shrink-0 ${msg.from !== "ai" ? "rounded-full bg-white/10 flex items-center justify-center" : ""}`}>
              {msg.from === "ai" ? (
                <Image
                  src={msg.typing ? "/mascotepensando.svg" : "/mascoteapontando.svg"}
                  alt="Evo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              ) : (
                <User className="w-3.5 h-3.5 text-white" />
              )}
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

      {/* Chips */}
      <AnimatePresence>
        {currentChips.length > 0 && !chipsDisabled && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-1.5 mt-1"
          >
            {currentChips.map((chip) => (
              <button
                key={chip.label}
                onClick={() => handleChip(chip)}
                className="text-[10px] px-2.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-blue-light hover:bg-brand-blue/25 hover:border-brand-blue/50 transition-all duration-150 font-medium"
              >
                {chip.label}
              </button>
            ))}
            {currentFlow !== "start" && (
              <button
                onClick={handleRestart}
                className="text-[10px] px-2.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white/40 hover:text-white/70 hover:border-white/30 transition-all duration-150 font-medium flex items-center gap-1"
              >
                <RotateCcw className="w-2.5 h-2.5" /> Início
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA final */}
      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 flex flex-col gap-2"
          >
            <button
              onClick={() => onSelectNeed?.("contato")}
              className="w-full btn-gold py-2.5 rounded-xl text-brand-dark font-bold text-xs flex items-center justify-center gap-2"
            >
              Falar com a equipe agora →
            </button>
            <button
              onClick={handleRestart}
              className="w-full py-2 rounded-xl text-white/40 text-[10px] hover:text-white/70 transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3 h-3" /> Recomeçar conversa
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={messagesEndRef} />
    </div>
  );
}
