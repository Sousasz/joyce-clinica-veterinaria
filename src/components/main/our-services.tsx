import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CarouselItemContent } from "./caurosel-item-content";
import { carousel } from "@/constants/carousel";
import { Title } from "../shared/title";

export function OurServices() {
  return (
    <section className="flex flex-col items-center gap-10" id="services">
      <div>
        <Title textInBold="Nossos" text="serviços" />
      </div>

      <Carousel>
        <CarouselContent className="flex gap-5 ">
          {carousel.map((service, index) => {
            return (
              <CarouselItem key={index} className="basis-1/3">
                <CarouselItemContent service={service} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
