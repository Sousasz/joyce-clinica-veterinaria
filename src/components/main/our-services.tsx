import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CarouselItemContent } from "./caurosel-item-content";
import { carousel } from "@/constants/carousel";

export function OurServices() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h3 className="text-2xl">
        <span className="font-bold text-green-light">Nossos</span>{" "}
        serviços
      </h3>

      <Carousel className="w-[60rem]">
        <CarouselContent className="flex gap-5">
          {carousel.map((service, index) => {
            return (
              <CarouselItem className="basis-1/3">
                <CarouselItemContent key={index} service={service} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
