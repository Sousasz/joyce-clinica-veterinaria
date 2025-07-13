import avatarImage from "../../../../public/avatar.jpg";
import Rating from "react-rating";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { Comment } from "./comment";
import { ratings } from "@/constants/ratings";

export function ClientRating() {
  return (
    <>
      {ratings.map((rating, index) => {
        return (
          <div className="flex justify-center gap-5 max-[415px]:w-80 ">
            <img
              key={index}
              className="h-min w-52 rounded-full"
              src={avatarImage}
              alt="Imagem do cliente"
            />

            <div className="flex flex-col">
              <Rating
                initialRating={rating.stars}
                emptySymbol={
                  <IoStarOutline className="size-5" color="#c2c2c2" />
                }
                fullSymbol={<IoStarSharp className="size-5" color="#FFCB14" />}
                readonly
              />

              <Comment>{rating.comment}</Comment>
            </div>
          </div>
        );
      })}
    </>
  );
}
