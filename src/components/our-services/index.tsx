import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CarouselItemContent } from "../caurosel-item-content";

export function OurServices() {
  return (
    <section className="flex flex-col items-center gap-10">
      <span className="text-xl">
        <span className="font-bold text-gray-light">Nossos</span> serviços
      </span>

      <Carousel>
        <CarouselContent className="flex gap-5">
          <CarouselItem className="basis-1/3">
            <CarouselItemContent />
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <CarouselItemContent />
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <CarouselItemContent />
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <CarouselItemContent />
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <CarouselItemContent />
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <CarouselItemContent />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
