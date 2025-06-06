import avatarImage from "../../../public/avatar.jpg";
import Rating from "react-rating";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

export function Review() {
  return (
    <div className="flex justify-center gap-5 max-[415px]:w-80 ">
      <img className="w-full h-min max-[1865px]:h-10 max-[1865px]:w-44 max-[1140px]:h-8 max-[1140px]:w-40 max-[924px]:h-14 max-[924px]:w-40 max-[800px]:h-min" src={avatarImage} alt="Imagem do cliente" />
      <div className="flex flex-col">
        <Rating
          initialRating={3}
          emptySymbol={<IoStarOutline className="size-5" color="#c2c2c2" />}
          fullSymbol={<IoStarSharp className="size-5" color="#FFCB14" />}
          readonly
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          distinctio nesciunt aliquam fugit ex maxime commodi recusandae tempore
          voluptates molestias delectus, saepe at consequuntur, enim autem esse
          incidunt sapiente. Cumque non sapiente saepe dolore exercitationem,
        </p>
      </div>
    </div>
  );
}
