import { Service } from "@/types/service";
import {
  Couch,
  Armchair,
  ShieldCheck,
  Car,
  Broom,
  CarProfile,
  Rug,
} from "@phosphor-icons/react";

export const services: Service[] = [
  {
    title: "Higienização de Sofás",
    description:
      "Dê uma nova vida ao seu sofá! Nossa higienização profissional remove manchas, sujeiras, odores e até ácaros, garantindo mais conforto, saúde e durabilidade para seu estofado. Ideal para quem busca um ambiente limpo, seguro e acolhedor.",
    icon: <Couch />,
    linkText:
      "Olá, vi no site sobre a Higienização de Sofás e gostaria de solicitar um orçamento.",
  },
  {
    title: "Higienização de Poltronas e Cadeiras",
    description:
      "Executamos a higienização completa de poltronas e cadeiras, incluindo peças de escritório e estofados residenciais, eliminando manchas, ácaros, odores e sujeiras que comprometem o bem-estar e a durabilidade dos móveis.",
    icon: <Armchair />,
    linkText:
      "Olá, vi no site sobre Higienização de Poltronas e Cadeiras e gostaria de fazer um orçamento.",
  },
  {
    title: "Impermeabilização de Estofados",
    description:
      "Protegemos sofás, poltronas e cadeiras com impermeabilização profissional, que evita a absorção de líquidos, previne manchas e aumenta a durabilidade do tecido.",
    icon: <ShieldCheck />,
    linkText:
      "Olá, vi no site sobre Impermeabilização de Estofados e gostaria de fazer um orçamento.",
  },
  {
    title: "Higienização de Tapetes",
    description:
      "Realizamos a limpeza profunda de tapetes, removendo sujeiras, ácaros, odores e manchas, promovendo um ambiente mais saudável e renovando a aparência das peças.",
    icon: <Rug />,
    linkText:
      "Olá, vi no site sobre Higienização de Tapetes e gostaria de fazer um orçamento.",
  },
  {
    title: "Higienização Interna de Automóveis",
    description:
      "Realizamos limpeza detalhada de bancos, carpetes e porta-malas, tratamento de plásticos e borrachas com proteção UV, além da remoção de odores indesejáveis — para um interior renovado, saudável e com aparência de novo.",
    icon: <CarProfile />,
    linkText:
      "Olá, vi no site sobre Higienização Interna de Automóveis e gostaria de fazer um orçamento.",
  },
  {
    title: "Higienização Externa de Automóveis",
    description:
      "Lavagem completa com produtos de alta performance, aplicação de cera protetora, polimento básico e limpeza detalhada de rodas e pneus — para um brilho duradouro e proteção contra as agressões do dia a dia.",
    icon: <Car />,
    linkText:
      "Olá, vi no site sobre Higienização Externa de Automóveis e gostaria de fazer um orçamento.",
  },
  {
    title: "Limpeza Pós-evento",
    description:
      "Realizamos a higienização completa de estofados e móveis após eventos, removendo resíduos, odores e sujeiras para restaurar o ambiente com rapidez e excelência.",
    icon: <Broom />,
    linkText:
      "Olá, vi no site sobre Limpeza Pós-evento e gostaria de fazer um orçamento.",
  },
];
