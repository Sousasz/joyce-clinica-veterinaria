import brandImage from "../../../public/Brand.png";

export function Brand() {
  return (
    <div className="flex justify-center items-center p-20 backdrop-blur-2xl">
      <div className=" h-[30rem] rounded-4xl  border border-white z-[999px] m-5 left-auto right-auto backdrop-blur-md bg-white/35 shadow-2xl absolute">
        <img className="w-[50rem] p-20" src={brandImage} alt="Marca da clínica veterinária" />
      </div>
    </div>
  );
}
