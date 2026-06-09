export interface PricingReference {
  label: string;
  url: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  setupPrice: string;
  monthlyPrice?: string;
  monthlyNote?: string;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
  ctaNote: string;
  contactOnly?: boolean;
  references?: PricingReference[];
}

export const biolinkPlans: PricingPlan[] = [
  {
    id: "biolink",
    name: "Biolink",
    tagline: "Um link único e profissional com tudo que seu público precisa encontrar.",
    setupPrice: "R$ 500",
    monthlyPrice: "R$ 100",
    featured: false,
    features: [
      "Página personalizada com sua identidade visual",
      "Links para redes sociais, WhatsApp e site",
      "Design moderno e responsivo",
      "Entrega em até 3 dias úteis",
    ],
    cta: "Quero meu Biolink",
    ctaNote: "Implementação + mensalidade",
    references: [
      { label: "Bruno Freitas Nutri", url: "https://brunofreitasnutri.evolvify.cloud/" },
      { label: "Instituto Danielle Azevedo", url: "https://institutodanielleazevedo.com.br/" },
      { label: "Urbanas Comunicação", url: "https://urbanascomunicacao.com.br/" },
    ],
  },
  {
    id: "biolink-site",
    name: "Biolink + Site",
    tagline: "O combo completo: presença digital profissional do começo ao fim.",
    setupPrice: "R$ 700",
    monthlyPrice: "R$ 200",
    featured: true,
    badge: "Mais escolhido",
    features: [
      "Tudo do plano Biolink incluso",
      "Site profissional completo",
      "Domínio e hospedagem orientados",
      "SEO básico configurado",
      "Entrega em até 7 dias úteis",
    ],
    cta: "Quero o combo",
    ctaNote: "Melhor custo-benefício",
    references: [
      { label: "Bruno Freitas Nutri", url: "https://brunofreitasnutri.evolvify.cloud/" },
      { label: "Fraternidade Filhas de Santa Clara", url: "https://fraternidadedefsc.vercel.app/#/" },
    ],
  },
  {
    id: "site",
    name: "Site",
    tagline: "Um site profissional feito sob medida para o seu negócio.",
    setupPrice: "R$ 500",
    monthlyPrice: "R$ 150",
    monthlyNote: "a depender do estilo",
    featured: false,
    features: [
      "Site profissional completo",
      "Design personalizado",
      "Responsivo para mobile",
      "SEO básico configurado",
      "Entrega em até 7 dias úteis",
    ],
    cta: "Quero meu site",
    ctaNote: "Implementação + mensalidade",
    references: [
      { label: "Fraternidade Filhas de Santa Clara", url: "https://fraternidadedefsc.vercel.app/#/" },
    ],
  },
];

export const attendancePlans: PricingPlan[] = [
  {
    id: "atendimento-essencial",
    name: "Essencial",
    tagline: "Atendimento virtual ágil e profissional para negócios em crescimento.",
    setupPrice: "R$ 350",
    monthlyPrice: "R$ 350",
    featured: false,
    features: [
      "Atendimento virtual via WhatsApp",
      "Respostas rápidas e humanizadas",
      "Agendamentos e confirmações",
      "Relatório mensal de atendimentos",
    ],
    cta: "Começar agora",
    ctaNote: "Cancele quando quiser",
  },
  {
    id: "atendimento-empresarial",
    name: "Empresarial",
    tagline: "Estrutura de atendimento robusta para operações maiores.",
    setupPrice: "R$ 600",
    monthlyPrice: "R$ 600",
    featured: true,
    badge: "Mais completo",
    features: [
      "Tudo do plano Essencial",
      "Maior volume de atendimentos",
      "Suporte em múltiplos canais",
      "Relatórios detalhados semanais",
      "Gestor de conta dedicado",
    ],
    cta: "Falar com a equipe",
    ctaNote: "Cancele quando quiser",
  },
  {
    id: "ia-personalizada",
    name: "IA Personalizada",
    tagline: "Uma IA treinada do zero para o seu negócio — confirmações, atendimento completo ou o que você precisar.",
    setupPrice: "Sob consulta",
    contactOnly: true,
    featured: false,
    features: [
      "IA treinada com seus dados",
      "Fluxo 100% personalizado",
      "Pode ser só de confirmação",
      "Ou atendimento completo",
      "Integração com seu WhatsApp",
    ],
    cta: "Entrar em contato",
    ctaNote: "Análise gratuita do seu negócio",
  },
];
