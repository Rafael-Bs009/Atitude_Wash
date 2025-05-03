import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { motion, useAnimation } from "framer-motion";

export function Services() {
  const controls = useAnimation();

  return (
    <div className="bg-orange-50 pt-7 ">
      <section className="py-16 bg-white rounded-t-[30px]" id="services">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-bold text-primary font-montserrat tracking-wide">
            Serviços
          </h1>
          <Carousel
            opts={{
              align: "start",
              loop: false,
              slidesToScroll: 1,
            }}
            className="w-3/4 max-w-5xl mx-auto"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] xl:flex-[0_0_calc(100%/3)]"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="font-bold ">
                        <div className="flex-1 flex gap-2">
                          <div className="text-2xl lg:text-3xl text-primary select-none">
                            {service.icon}
                          </div>
                          <div className="text-sm md:text-lg select-none tracking-wide font-montserrat">
                            {service.title}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow ">
                      <CardDescription className="text-sm text-gray-800  font-work-sans select-none">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                      <motion.button>
                        <Button
                          className="cursor-pointer select-none text-white  bg-green-500 hover:bg-green-600 transition-all duration-300"
                          onMouseEnter={() => {
                            controls.start({
                              rotate: [0, -10, 10, -10, 10, 0],
                              transition: { duration: 0.5 },
                            });
                          }}
                          onMouseLeave={() => {
                            controls.stop();
                            controls.start({ rotate: 0 });
                          }}
                        >
                          <motion.span animate={controls} className="w-5 h-5">
                            <WhatsappLogo className="size-5 items-center" />
                          </motion.span>
                          <span>Contato via WhatsApp</span>
                        </Button>
                      </motion.button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-primary hover:text-white" />
            <CarouselNext className="hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
