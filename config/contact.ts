export const contactConfig = {
  whatsapp: {
    number: "5583996666285",
    defaultMessage: "Olá! Vim pelo site da Evolvify e gostaria de conhecer as soluções.",
    businessApiUrl: "", // Preencher com URL da API futura
  },
  email: {
    contact: "contato@evolvify.com.br",
    support: "suporte@evolvify.com.br",
  },
  social: {
    instagram: "https://instagram.com/evolvify",
    linkedin: "https://linkedin.com/company/evolvify",
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
