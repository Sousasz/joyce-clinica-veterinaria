import brandImage from "../../../public/Brand.png";

export function Brand() {
  return (
    <div className="flex justify-center items-center p-20 max-[550px]:p-5 backdrop-blur-2xl m-10  max-[550px]:m-5">
      <div className="flex justify-center items-center w-full rounded-4xl border border-white backdrop-blur-md bg-white/25 shadow-2xl absolute">
        <img
          className="w-[50rem] max-[1000px]:w-[40rem] max-[1000px]:mt-14 max-[830px]:w-[30rem] max-[645px]:w-[24rem] max-[645px]:mt-10 max-[550px]:w-[18rem] max-[425px]:w-[14rem] max-[425px]:mt-5 mt-20 h-full"
          src={brandImage}
          alt="Marca da clínica veterinária"
        />
      </div>
    </div>
  );
}
