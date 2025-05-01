import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";

export function Faq() {
  return (
    <div className="bg-white pt-7">
      <section className="py-16 bg-orange-50 rounded-t-[30px]">
        <div className=" container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  mb-16 font-semibold text-primary font-montserrat tracking-wide">
            Perguntas Frequentes (FAQ)
          </h1>
          <div className="relative max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="w-full mb-16">
              <AccordionItem value="item-1">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg  select-none tracking-wide font-montserrat">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-800  font-work-sans select-none ">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center text-primary ">
              <a
                href="#"
                className="flex justify-between items-center gap-2 border-b border-primary cursor-pointer select-none"
              >
                <p className="font-work-sans  leading-relaxed">
                  Ficou com alguma dúvida ou quer agendar um serviço? Fale com a
                  gente agora mesmo!
                </p>
                <ArrowDownRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
