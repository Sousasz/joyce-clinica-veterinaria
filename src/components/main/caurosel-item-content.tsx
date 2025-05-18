
type CarouselItemContentProps = {
  service: object;
};

export function CarouselItemContent({ service }: CarouselItemContentProps) {
  return (
    <div className="flex justify-center items-center">
      <img src={service.imgUrl} alt={`Imagem do serviço ${service.type}`} />
      <span className="text-white text-center font-bold text-3xl max-w-sm absolute -tracking-[-0.15rem]">
        {service.type}
      </span>
    </div>
  );
}
