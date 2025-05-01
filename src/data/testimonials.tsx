import { Testimonial } from "@/types/testimonial";
import profile1 from "@/assets/profile/profile-1.jpg";
import profile2 from "@/assets/profile/profile-2.jpg";
import profile3 from "@/assets/profile/profile-3.jpg";

export const testimonials: Testimonial[] = [
  {
    testimonial:
      "Meu sofá parecia impossível de recuperar, mas ficou como novo depois da higienização. Atendimento excelente e muito capricho!",
    author: "Juliana Martins, São Paulo - SP",
    image: profile2,
  },
  {
    testimonial:
      "O carro ficou parecendo novo por dentro! Cheiro agradável, bancos limpos, plásticos brilhando. Super indico o serviço!",
    author: "Ricardo Nunes, São Bernardo - SP",
    image: profile1,
  },
  {
    testimonial:
      "Achei o atendimento no WhatsApp muito prático. Tiraram minhas dúvidas, agendaram rápido e o resultado foi excelente!",
    author: "Tatiane Souza, Santo André - SP",
    image: profile3,
  },
];
