import { RatingsList } from "./ratings-list";
import { DialogContent, DialogHeader } from "@/components/ui/shadcn/dialog";
import { Title } from "@/components/ui/title";

export function RatingModal() {
  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-auto">
        <DialogHeader className="max-w-full flex items-center">
          <Title>Nossas avaliações</Title>
        </DialogHeader>

        <RatingsList />
      </div>
    </DialogContent>
  );
}
