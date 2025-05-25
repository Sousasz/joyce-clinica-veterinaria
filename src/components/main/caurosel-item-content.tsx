
type CarouselItemContentProps = {
  service: object;
};

export function CarouselItemContent({ service }: CarouselItemContentProps) {
  return (
    <div className="flex justify-center items-center">
      <img src={service.imgUrl} alt={`Imagem do serviço ${service.type}`} />
      <span className="text-white text-center font-bold text-3xl max-w-sm absolute max-[1245px]:text-2xl max-[1035px]:max-w-[150px] max-[640px]:text-xl max-[530px]:text-sm -tracking-[-0.15rem]">
        {service.type}
      </span>
    </div>
  );
}
