import Rating from "react-rating";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

export function RateMainContent() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 font-poppins">
      <div className="flex flex-col w-full">
        <p className="underline">Como você avalia o atendimento?</p>
        <Rating
          initialRating={0}
          emptySymbol={<IoStarOutline className="size-5" color="#c2c2c2" />}
          fullSymbol={<IoStarSharp className="size-5" color="#FFCB14" />}
        />
      </div>

      <textarea
        placeholder="Deixe seu comentário"
        className="border-2 border-white shadow-default rounded-xl outline-none font-poppins p-2 h-48 w-full placeholder:text-sm"
        name="description"
      ></textarea>

      <button className="bg-white text-black font-medium px-6 shadow-default h-10 rounded-full cursor-pointer font-poppins">
        Publicar
      </button>
    </div>
  );
}
