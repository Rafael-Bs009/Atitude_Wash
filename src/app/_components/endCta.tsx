import {
  HandHeart,
  PiggyBank,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EndCta() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="h-1/6 md:h-1/5 lg:h-1/3 bg-primary" />
        <div className="h-1/2 bg-white" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 md:pt-15 lg:pt-25 pt-0 pb-20">
        <div className="relative lg:-translate-y-1/10 md:translate-y-6 translate-y-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          <Card className="shadow-xl h-40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 ">
                <HandHeart className="text-primary" size={50} />{" "}
                <h1 className="text-lg lg:text-xl font-montserrat font-bold select-none  tracking-wide">
                  Saúde
                </h1>
              </CardTitle>
              <CardDescription>
                <p className="font-work-sans text-sm text-gray-800   select-none">
                  Qualidade de vida começa pelo ar. Elimine fungos e bactérias
                  com quem entende de limpeza
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-xl h-40 ">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 ">
                <PiggyBank className="text-primary" size={50} />{" "}
                <h1 className="text-lg lg:text-xl font-montserrat font-bold select-none  tracking-wide">
                  Economia
                </h1>
              </CardTitle>
              <CardDescription>
                <p className="font-work-sans text-sm text-gray-800   select-none">
                  Renove sem pesar no bolso. Higienizar é até 10x mais barato
                  que substituir seus móveis.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-xl h-40 mb-10 ">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 ">
                <Handshake className="text-primary" size={50} />{" "}
                <h1 className="text-lg lg:text-xl font-montserrat font-bold select-none  tracking-wide">
                  Facilidade
                </h1>
              </CardTitle>
              <CardDescription>
                <p className="font-work-sans text-sm text-gray-800   select-none ">
                  Sem complicação. Tudo agendado online e feito com cuidado
                  direto na sua casa.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16">
          <a
            href="https://wa.me/5511985338018?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-orange-700 font-bold font-montserrat cursor-pointer"
            >
              Quero agendar agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
