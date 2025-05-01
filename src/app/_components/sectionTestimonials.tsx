import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <div className="bg-white pt-7 ">
      <section className="py-16 bg-white rounded-t-[30px]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-16 font-bold text-primary font-montserrat tracking-wide">
            Depoimentos dos nossos clientes
          </h1>
          <div className="relative max-w-5xl mx-auto">
            <Carousel
              opts={{
                loop: true,
              }}
              className=" w-3/4 max-w-5xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-[0_0_100%] min-w-0 "
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>
                          <div className="flex items-center justify-center">
                            <Avatar className="w-20 h-20 md:w-25 md:h-25 lg:w-30 lg:h-30 border-2 border-primary">
                              <AvatarImage
                                src={testimonial.image}
                                alt={`Foto de ${testimonial.author}`}
                                className="object-cover"
                              ></AvatarImage>
                              <AvatarFallback>
                                {testimonial.author?.[0] ?? "?"}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="">
                        <CardDescription className="text-center font-work-sans select-none font-semibold text-gray-700 text-lg lg:text-lx tracking-wide">
                          {testimonial.testimonial}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex text-sm lg:text-lg font-work-sans select-none justify-center text-muted-foreground items-center">
                        <p>{testimonial.author}</p>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:bg-primary hover:text-white" />
              <CarouselNext className="hover:bg-primary hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
