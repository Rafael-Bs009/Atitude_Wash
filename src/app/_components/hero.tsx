import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { FancyImageComparisonOptimized } from "./couchClean";
import { motion, useAnimation } from "framer-motion";

export function Hero() {
  const controls = useAnimation();

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto py-4 lg:py-16 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
          <div className="space-y-6">
            <h1 className="text-3xl font-montserrat font-bold md:text-4xl lg:text-5xl leading-12 text-primary  ">
              Seu carro ou sofá como novo em poucas horas!
            </h1>
            <p className="font-work-sans text-muted-foreground lg:text-lg">
              Remova manchas, odores e ácaros com nossa limpeza a seco
              especializada.
            </p>

            <div className="flex flex-col justify-end items-end">
              <motion.a
                href="#"
                className="text-white bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                onHoverStart={() => {
                  controls.start({
                    rotate: [0, -10, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  });
                }}
                onHoverEnd={() => {
                  controls.stop();
                  controls.start({ rotate: 0 });
                }}
              >
                <motion.span animate={controls} className="w-5 h-5">
                  <WhatsappLogo className="w-5 h-5" />
                </motion.span>
                Contato via WhatsApp
              </motion.a>

              <div className="mt-8">
                <p className="text-sm mb-4 font-work-sans">
                  <b className="bg-black text-white rounded-md px-2 py-1 ">
                    5%
                  </b>{" "}
                  de desconto na primeira compra.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <FancyImageComparisonOptimized />
          </div>
        </article>
      </div>
    </section>
  );
}
