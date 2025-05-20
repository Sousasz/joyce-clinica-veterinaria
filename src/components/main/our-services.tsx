import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CarouselItemContent } from "./caurosel-item-content";
import { carousel } from "@/constants/carousel";
import { Title } from "../shared/title"; 
import TitleAsset from "../../../public/assets/title-asset.svg?react"

export function OurServices() {
  return (
    <section className="flex flex-col items-center gap-10">
      

      {/* Sobrepor imagens para efeito de Título */}
      <div>
        <Title  textInBold="Nossos" text="serviços" />
        <TitleAsset className="relative" />
      </div>

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
