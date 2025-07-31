import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/shadcn/carousel";
import { CarouselItemContent } from "./carousel-item-content";
import { carousel } from "@/constants/carousel";
import { Title } from "../../ui/title";

export function OurServices() {
  return (
    <section className="flex flex-col items-center gap-10" id="services">
      <div>
        <Title>Nossos serviços</Title>
      </div>

      <Carousel>
        <CarouselContent>
          {carousel.map((service, index) => {
            return (
              <CarouselItem
                className="basis-1/3 max-w-[90%] max-[415px]:w-[5rem]"
                key={index}
              >
                <CarouselItemContent service={service} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
