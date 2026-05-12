export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  results: string[];
  image: string;
  mockupImage: string;
  featured: boolean;
  year: string;
  client: string;
  duration: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "sistema-financeiro-empresarial",
    name: "Sistema Financeiro Empresarial",
    category: "Sistema Financeiro",
    description:
      "Plataforma financeira completa para distribuidora com controle de fluxo de caixa, conciliação bancária automática e relatórios gerenciais em tempo real.",
    longDescription:
      "Desenvolvemos um sistema financeiro robusto para uma distribuidora com 180 funcionários. A solução inclui gestão de contas a pagar e receber, conciliação bancária automatizada com integração via Open Finance, centro de custos por departamento, relatórios gerenciais personalizáveis e alertas inteligentes via WhatsApp para gestores.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Open Finance API", "Vercel"],
    results: [
      "Redução de 87% no tempo de conciliação bancária",
      "Fechamento mensal em 1 dia (antes: 5 dias)",
      "Zero erros de lançamento manual",
      "Economia de R$ 120.000/ano em horas de trabalho",
    ],
    image: "/images/projects/projeto1.png",
    mockupImage: "/images/projects/mockup1.png",
    featured: true,
    year: "2024",
    client: "Distribuidora Confidencial",
    duration: "3 meses",
  },
  {
    id: "2",
    slug: "plataforma-avaliacao-colaboradores",
    name: "Plataforma de Avaliação de Colaboradores",
    category: "Gestão de Pessoas",
    description:
      "Sistema completo de gestão de desempenho com avaliação 360°, OKRs, PDI e dashboard de engajamento para rede de varejo com 400 colaboradores.",
    longDescription:
      "Criamos uma plataforma de gestão de pessoas completa para uma rede de varejo. O sistema inclui ciclos de avaliação 360°, definição e acompanhamento de OKRs por área, planos de desenvolvimento individual automatizados, gamificação para engajamento, e dashboard executivo com indicadores de clima e performance.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "AWS"],
    results: [
      "Turnover reduzido de 28% para 12% em 6 meses",
      "Engajamento da equipe aumentou 41%",
      "100% das avaliações concluídas no prazo",
      "Promoções baseadas em dados, não em feeling",
    ],
    image: "/images/projects/projeto2.png",
    mockupImage: "/images/projects/mockup2.png",
    featured: true,
    year: "2024",
    client: "Rede de Varejo Confidencial",
    duration: "4 meses",
  },
  {
    id: "3",
    slug: "automacao-ia-multisetorial",
    name: "Automação com IA para Empresas",
    category: "Automação com IA",
    description:
      "Implementação de IA para automatizar atendimento, cobranças, comunicações e processos repetitivos em empresas de diferentes segmentos.",
    longDescription:
      "Implantamos automações inteligentes com IA em empresas de diferentes setores — educação, saúde, varejo, serviços e mais. Cada projeto é adaptado à realidade do cliente, com chatbot no WhatsApp, automação de cobrança, envio de comunicados personalizados e análise preditiva de dados para decisões mais rápidas.",
    technologies: ["Claude AI", "Python", "n8n", "WhatsApp Business API", "PostgreSQL"],
    results: [
      "Até 90% de redução em tarefas manuais repetitivas",
      "Tempo de resposta ao cliente: de horas para minutos",
      "Equipes realocadas para atividades estratégicas",
      "Atendimento 24/7 sem custo adicional de pessoal",
    ],
    image: "/images/projects/projeto3.png",
    mockupImage: "/images/projects/mockup3.png",
    featured: true,
    year: "2024",
    client: "Múltiplos Clientes",
    duration: "2–4 semanas",
  },
  {
    id: "4",
    slug: "dashboard-comercial",
    name: "Dashboard Comercial Inteligente",
    category: "Dashboard & Analytics",
    description:
      "Dashboard executivo em tempo real para equipe comercial de empresa de SaaS, integrando CRM, marketing e financeiro.",
    longDescription:
      "Desenvolvemos um dashboard comercial que unifica dados de Salesforce, HubSpot, Google Analytics e sistema financeiro interno. A solução entrega visibilidade completa do funil de vendas, previsão de receita com IA, análise de performance por vendedor, e alertas automáticos para oportunidades em risco.",
    technologies: ["React", "D3.js", "Python", "BigQuery", "Salesforce API", "HubSpot API"],
    results: [
      "Tempo de reunião de pipeline: de 2h para 20min",
      "Forecast de receita com 94% de precisão",
      "Identificação de 30% mais oportunidades de upsell",
      "Redução de 60% no tempo de relatórios manuais",
    ],
    image: "/images/projects/projeto4.png",
    mockupImage: "/images/projects/mockup4.png",
    featured: true,
    year: "2025",
    client: "Empresa SaaS Confidencial",
    duration: "6 semanas",
  },
  {
    id: "5",
    slug: "portal-interno-construtora",
    name: "Portal Interno de Construtora",
    category: "Sistema Sob Medida",
    description:
      "ERP completo para construtora com gestão de obras, contratos, medições, fornecedores e documentação técnica.",
    longDescription:
      "Criamos um ERP sob medida para uma construtora de médio porte. O portal centraliza gestão de obras com cronogramas e medições, controle de contratos com fornecedores, gestão de documentação técnica e regulatória, relatórios de avanço físico-financeiro, e integração com sistema de RH para alocação de equipes.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3", "Docker", "Nginx"],
    results: [
      "100% dos contratos acessíveis digitalmente",
      "Aprovação de medições: de 5 dias para 4h",
      "Zero perda de documentação técnica",
      "Visibilidade em tempo real de todas as obras",
    ],
    image: "/images/projects/projeto5.png",
    mockupImage: "/images/projects/mockup5.png",
    featured: false,
    year: "2024",
    client: "Construtora Confidencial",
    duration: "5 meses",
  },
];

export const projectCategories = [
  "Todos",
  "Sistema Financeiro",
  "Gestão de Pessoas",
  "Automação com IA",
  "Dashboard & Analytics",
  "Sistema Sob Medida",
];
