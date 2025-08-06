import { ClientRating } from "@/components/main/ratings/client-rating";

export function RatingsList() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="gap-20 grid place-items-center grid-cols-[repeat(auto_fill,_minmax(390px,_1fr))] font-poppins">
        <ClientRating />
      </div>
    </div>
  );
}
