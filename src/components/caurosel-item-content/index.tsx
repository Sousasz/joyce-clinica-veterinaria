import vetCareImage from "../../../public/vet-care.jpg"

export function CarouselItemContent() {
  return (
    <div className="flex justify-center items-center">
      <img src={vetCareImage} alt="" />
      <span className="text-white font-bold text-4xl absolute -tracking-[-0.15rem]">
        Medicação
      </span>
    </div>
  );
}
