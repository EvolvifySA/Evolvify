export const contactConfig = {
  whatsapp: {
    number: "5583920037703",
    defaultMessage: "Olá! Vim pelo site da Evolvify e gostaria de conhecer as soluções.",
    businessApiUrl: "", // Preencher com URL da API futura
  },
  email: {
    comercial: "comercial@evolvify.cloud",
    suporte: "suporte@evolvify.cloud",
    financeiro: "financeiro@evolvify.cloud",
  },
  social: {
    instagram: "https://instagram.com/evolvify.cloud",
    linkedin: "https://www.linkedin.com/company/evolvify-cloud/?viewAsMember=true",
    youtube: "https://youtube.com/@evolvify",
  },
  address: {
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
  },
  ai: {
    // Preparado para integração futura com IA
    apiEndpoint: "/api/ai-specialist",
    model: "claude-sonnet-4-6",
    systemPrompt:
      "Você é um especialista da Evolvify. Ajude os visitantes a entender as soluções e identifique a melhor para a necessidade deles.",
  },
};

export const getWhatsAppLink = (message?: string) => {
  const text = message || contactConfig.whatsapp.defaultMessage;
  return `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
};
