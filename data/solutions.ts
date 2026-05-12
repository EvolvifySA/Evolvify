import {
  BarChart3,
  Brain,
  Code2,
  CreditCard,
  Globe,
  LayoutDashboard,
  Link2,
  Users,
} from "lucide-react";

export interface Solution {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  realExample: string;
  technologies: string[];
  featured: boolean;
}

export const solutions: Solution[] = [
  {
    id: "automacoes-ia",
    icon: "Brain",
    title: "Automações com IA",
    shortDescription: "Automatize processos repetitivos e libere sua equipe para o que realmente importa.",
    description:
      "Implantamos automações inteligentes com Inteligência Artificial que eliminam tarefas manuais, erros humanos e retrabalho. De atendimento ao cliente a análise de dados, a IA trabalha 24h por dia pela sua empresa.",
    benefits: [
      "Até 90% de redução em tarefas repetitivas",
      "Atendimento 24/7 sem custo adicional",
      "Análise de dados em segundos",
      "Integração com WhatsApp, email e sistemas internos",
      "ROI médio de 300% no primeiro ano",
    ],
    realExample:
      "Uma escola com 500 alunos automatizou matrículas, cobranças e comunicados, liberando 3 funcionários para atividades estratégicas.",
    technologies: ["Claude AI", "OpenAI", "n8n", "Python", "Webhooks"],
    featured: true,
  },
  {
    id: "sistema-financeiro",
    icon: "CreditCard",
    title: "Sistema Financeiro",
    shortDescription: "Controle total das finanças da sua empresa com inteligência e automação.",
    description:
      "Desenvolvemos sistemas financeiros completos, adaptados à realidade da sua empresa. Controle de fluxo de caixa, contas a pagar e receber, conciliação bancária, relatórios gerenciais e muito mais — tudo integrado e automatizado.",
    benefits: [
      "Redução de 80% no tempo de fechamento mensal",
      "Elimina planilhas desatualizadas e erros manuais",
      "Relatórios gerenciais em tempo real",
      "Integração com bancos e ERPs",
      "Alertas automáticos de vencimentos e metas",
    ],
    realExample:
      "Uma distribuidora com 50 funcionários reduziu seu tempo de conciliação bancária de 3 dias para 2 horas após a implementação.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Integração Bancária"],
    featured: true,
  },
  {
    id: "gestao-desempenho",
    icon: "Users",
    title: "Gestão de Desempenho",
    shortDescription: "Avalie, motive e desenvolva sua equipe com dados concretos.",
    description:
      "Plataforma completa de gestão de colaboradores com avaliações 360°, OKRs, PDI (Plano de Desenvolvimento Individual), feedback contínuo e indicadores de engajamento. Transforme dados de pessoas em decisões estratégicas.",
    benefits: [
      "Aumento de 35% no engajamento de equipes",
      "Avaliações 360° automatizadas e justas",
      "PDI personalizado para cada colaborador",
      "Dashboards de performance em tempo real",
      "Redução de turnover com dados preditivos",
    ],
    realExample:
      "Uma empresa de varejo com 200 colaboradores implementou o sistema e reduziu o turnover em 40% no primeiro ano.",
    technologies: ["React", "Node.js", "MongoDB", "AI Analytics"],
    featured: true,
  },
  {
    id: "sistemas-sob-medida",
    icon: "Code2",
    title: "Sistemas Sob Medida",
    shortDescription: "Quando nenhum sistema pronto resolve — criamos o seu do zero.",
    description:
      "Desenvolvemos sistemas completamente personalizados para atender necessidades específicas do seu negócio. Desde ERPs customizados a plataformas de nicho, entregamos soluções robustas, escaláveis e fáceis de usar.",
    benefits: [
      "100% adaptado ao seu processo",
      "Sem limitações de sistemas genéricos",
      "Suporte e evolução contínua",
      "Arquitetura escalável para crescimento",
      "Integrações com qualquer sistema existente",
    ],
    realExample:
      "Uma construtora precisava gerenciar obras, contratos e medições. Criamos um ERP completo em 60 dias.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    featured: false,
  },
  {
    id: "dashboards",
    icon: "LayoutDashboard",
    title: "Dashboards & Indicadores",
    shortDescription: "Tome decisões baseadas em dados, não em achismos.",
    description:
      "Criamos dashboards executivos e operacionais que transformam dados complexos em insights visuais claros. Conectamos todas as suas fontes de dados e entregamos uma visão completa do negócio em tempo real.",
    benefits: [
      "Visão 360° do negócio em uma tela",
      "KPIs atualizados em tempo real",
      "Alertas automáticos por desvios",
      "Acesso mobile para gestores",
      "Integração com qualquer fonte de dados",
    ],
    realExample:
      "Uma rede de clínicas com 8 unidades passou a tomar decisões de expansão baseadas em dados reais de cada unidade.",
    technologies: ["React", "D3.js", "Power BI", "BigQuery", "API REST"],
    featured: true,
  },
  {
    id: "integracoes",
    icon: "Link2",
    title: "Integrações entre Sistemas",
    shortDescription: "Faça seus sistemas conversarem e elimine a dupla digitação.",
    description:
      "Integramos seus sistemas existentes para que os dados fluam automaticamente entre eles. ERP + CRM + Financeiro + E-commerce + WhatsApp — tudo conectado, sem retrabalho.",
    benefits: [
      "Elimina 100% da dupla digitação",
      "Dados consistentes em todos os sistemas",
      "Automação de fluxos entre plataformas",
      "APIs RESTful e webhooks",
      "Monitoramento 24/7 das integrações",
    ],
    realExample:
      "Um e-commerce integrou Shopify + ERP + logística, reduzindo erros de pedido em 95%.",
    technologies: ["REST API", "GraphQL", "Webhooks", "n8n", "Zapier"],
    featured: false,
  },
  {
    id: "sites-landing-pages",
    icon: "Globe",
    title: "Sites & Landing Pages",
    shortDescription: "Presença digital que converte visitantes em clientes.",
    description:
      "Desenvolvemos sites institucionais, landing pages de alta conversão e plataformas digitais completas. Design premium, performance máxima, SEO otimizado e foco em resultados.",
    benefits: [
      "Conversão até 3x maior que sites genéricos",
      "Performance 100/100 no Google PageSpeed",
      "SEO técnico avançado",
      "Integração com CRM e analytics",
      "Responsivo e acessível",
    ],
    realExample:
      "Uma consultoria triplicou sua geração de leads em 90 dias com uma nova landing page otimizada.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    featured: false,
  },
  {
    id: "consultoria-digital",
    icon: "BarChart3",
    title: "Consultoria Digital",
    shortDescription: "Diagnóstico e estratégia tecnológica para sua empresa crescer com eficiência.",
    description:
      "Analisamos sua operação atual, identificamos gargalos tecnológicos e desenhamos um roadmap de transformação digital completo. Priorizamos investimentos com maior retorno e menor risco.",
    benefits: [
      "Diagnóstico completo em 5 dias",
      "Roadmap priorizado por ROI",
      "Identificação de gargalos ocultos",
      "Benchmark com concorrentes do setor",
      "Acompanhamento de resultados",
    ],
    realExample:
      "Uma indústria economizou R$ 280.000/ano após consultoria que identificou 7 processos manuais automatizáveis.",
    technologies: ["Análise de Processos", "Mapeamento BPMN", "OKRs", "Roadmap"],
    featured: false,
  },
];

export const solutionIcons: Record<string, React.ComponentType> = {
  CreditCard,
  Users,
  Brain,
  Code2,
  LayoutDashboard,
  Link2,
  Globe,
  BarChart3,
};
