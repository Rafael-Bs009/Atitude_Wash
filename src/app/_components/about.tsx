import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <div className="bg-white pt-7">
      <section className="bg-orange-50 py-20 rounded-t-[30px]" id="about">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12  px-6">
          <div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl  text-start mb-16 font-bold text-primary font-montserrat tracking-wide">
                  Sobre
                </h1>
                <p className="text-gray-700 lg:text-lg leading-relaxed font-work-sans max-w-3xl mx-auto">
                  Na Atitude <i>Wash</i>, transformamos ambientes através da{" "}
                  <strong>higienização profissional de estofados</strong>,
                  promovendo mais saúde, conforto e bem-estar para sua casa ou
                  empresa. Nosso compromisso é oferecer{" "}
                  <strong>soluções de alta qualidade</strong>, utilizando
                  tecnologias modernas e produtos biodegradáveis para cuidar da
                  sua saúde e do meio ambiente.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-4 font-montserrat ">
                  Nossa Missão
                </h2>
                <p className="text-gray-700  leading-relaxed font-work-sans">
                  Proporcionar ambientes mais saudáveis e modernos por meio de
                  uma{" "}
                  <strong>
                    higienização eficaz, personalizada e sustentável
                  </strong>
                  , garantindo o bem-estar de nossos clientes e colaboradores.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              className=" mb-16 lg:mt-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-4 font-montserrat text-center">
                  Nossos Valores
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-4 font-work-sans">
                  <li>
                    <strong>Saúde e Bem-Estar:</strong> Criação de espaços
                    seguros, limpos e confortáveis.
                  </li>
                  <li>
                    <strong>Qualidade e Confiança:</strong> Resultados que
                    superam expectativas com transparência.
                  </li>
                  <li>
                    <strong>Responsabilidade Ambiental:</strong> Uso de produtos
                    ecológicos e práticas sustentáveis.
                  </li>
                  <li>
                    <strong>Inovação Contínua:</strong> Investimento em
                    tecnologias e técnicas de ponta.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className=" lg:mb-0 mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4 font-montserrat text-center">
                  Por que escolher a Atitude <i>Wash</i>?
                </h3>
                <ul className="text-gray-700 font-work-sans">
                  {[
                    "Equipe treinada e especializada",
                    "Produtos seguros e biodegradáveis",
                    "Eliminação de ácaros, bactérias e odores",
                    "Atendimento rápido, eficiente e a domicílio",
                    "Compromisso com sua saúde e o meio ambiente",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center w-fit px-4 py-2 rounded-full"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          <motion.div
            className=" mb-16 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-end text-primary">
              <a
                href="#redes"
                className="flex justify-between items-center gap-2 border-b border-primary cursor-pointer select-none"
              >
                <p className="font-work-sans  leading-relaxed">
                  Conheça nossas redes sociais
                </p>
                <ArrowDownRight />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
