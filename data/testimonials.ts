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
    company: "Fraternidade Filhas de Santa Clara",
    avatar: "/images/avatars/avatar1.png",
    testimonial:
      "Depois que começamos a usar o Biolink da Evolvify, ficou bem mais fácil reunir tudo em um único link. Agora as pessoas conseguem encontrar nossas informações sem dificuldade.",
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
      "Com o Biolink da Evolvify conseguimos reunir redes sociais, contatos e informações importantes em um só lugar. Ficou mais simples para as pessoas encontrarem o que precisam.",
    rating: 5,
    solution: "Biolink",
  },
  {
    id: "3",
    name: "Kamila",
    role: "Marketing",
    company: "Urbanas Comunicação",
    avatar: "/images/avatars/avatar3.png",
    testimonial:
      "Do atendimento a entrega: excelência, comprometimento e rapidez! Com esta nova ferramenta a Urbanas Comunicação vem garantindo maior visibilidade, transmitindo mais credibilidade para a prospecção de novos clientes!",
    rating: 5,
    solution: "Biolink",
  },
];
