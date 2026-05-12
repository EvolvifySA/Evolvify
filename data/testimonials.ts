export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
  rating: number;
  solution: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Madre Germana",
    role: "Coordenadora de Comunicação",
    company: "Instituto Fraternidade Filhas de Santa Clara",
    avatar: "/images/avatars/avatar1.png",
    testimonial:
      "Com o Biolink da Evolvify, centralizamos tudo em um único link: redes sociais, doações, agenda de eventos e contato. Ficou muito mais fácil para as pessoas nos encontrarem e se conectarem com nossa missão.",
    rating: 5,
    solution: "Biolink",
  },
  {
    id: "2",
    name: "Daniele Azevedo",
    role: "Fundadora",
    company: "Instituto IDA",
    avatar: "/images/avatars/avatar2.png",
    testimonial:
      "Antes tinha vários links espalhados e as pessoas se perdiam. O Biolink resolveu isso de forma elegante e profissional. Hoje consigo direcionar alunos, parceiros e apoiadores para os lugares certos sem complicação.",
    rating: 5,
    solution: "Biolink",
  },
  {
    id: "3",
    name: "Equipe Urbanas",
    role: "Marketing",
    company: "Urbanas",
    avatar: "/images/avatars/avatar3.png",
    testimonial:
      "O Biolink ficou exatamente com a nossa cara — moderno, rápido e com tudo que nossos clientes precisam acessar. Nosso engajamento nas redes aumentou desde que passamos a usar um link só, organizado e bonito.",
    rating: 5,
    solution: "Biolink",
  },
];
