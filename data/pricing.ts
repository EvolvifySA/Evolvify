export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  featured: boolean;
  badge?: string;
  features: PricingFeature[];
  cta: string;
  ctaNote: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "ia-propria",
    name: "IA Própria & Humanizada",
    tagline: "Um agente de Inteligência Artificial exclusivo, treinado com a base de dados da sua empresa para vender e atender como um humano.",
    price: "Sob Consulta",
    priceNote: "Proposta personalizada para o seu negócio",
    featured: true,
    badge: "Mais Recomendado",
    features: [
      { text: "IA Própria Treinada com seus PDFs, site, histórico de vendas e catálogos", included: true },
      { text: "Atendimento 100% Humanizado com NLP que entende contexto, gírias e intenção de compra", included: true },
      { text: "Transição Fluida (Handoff): IA qualifica o lead e passa ao vendedor com resumo completo", included: true },
      { text: "Disparos e Retenção Inteligente: reengaja leads frios sem parecer robô", included: true },
      { text: "Integração via Webhooks com sistemas externos de marketing", included: true },
    ],
    cta: "Agendar Demonstração da IA",
    ctaNote: "Veja sua IA funcionando antes de decidir",
  },
  {
    id: "ecossistema",
    name: "Ecossistema Sob Medida",
    tagline: "Você diz o problema, nós construímos a solução. Escolha os módulos que sua operação precisa ou crie do zero conosco.",
    price: "Projeto Sob Orçamento",
    priceNote: "Orçamento detalhado em até 48h",
    featured: false,
    features: [
      { text: "Acesso total à IA Própria e ao CRM WhatsApp", included: true },
      { text: "Módulos Multi-SaaS: Financeiro, RH, Landing Page, Dashboards, Portais de Clientes", included: true },
      { text: "Integrações Complexas com ERPs e sistemas legados via WhatsApp e IA", included: true },
      { text: "Engenharia Dedicada com desenvolvimento ágil de funcionalidades exclusivas", included: true },
      { text: "Infraestrutura Cloud Isolada: ambiente conteinerizado com foco em segurança e estabilidade", included: true },
    ],
    cta: "Montar Meu Ecossistema",
    ctaNote: "Fale com nossa equipe de engenharia",
  },
  {
    id: "ai-frontline",
    name: "AI Frontline",
    tagline: "A Linha de Frente Autônoma. Automatize a triagem e o primeiro atendimento. A inteligência qualifica, e você só recebe os resultados.",
    price: "Sob Consulta",
    priceNote: "Ideal para operações de alto volume",
    featured: false,
    features: [
      { text: "Triagem 100% Automatizada: IA coleta dados e entende intenção de compra sem intervenção humana", included: true },
      { text: "Roteamento Inteligente: aciona humano apenas quando o lead está quente e pronto para fechar", included: true },
      { text: "Relatórios Push direto no WhatsApp ou e-mail do gestor (fechamento do dia/semana)", included: true },
      { text: "Auditoria Invisível: todas as conversas gravadas e categorizadas automaticamente", included: true },
    ],
    cta: "Falar com Consultor",
    ctaNote: "Análise gratuita da sua operação",
  },
];
