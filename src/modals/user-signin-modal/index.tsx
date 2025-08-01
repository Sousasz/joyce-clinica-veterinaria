import avatarImage from "../../../public/avatar.jpg";
import { UserSignInForm } from "./user-signin-form";
import { Touchable } from "@/components/ui/touchable";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

export function UserSignIn() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="cursor-pointer">
            <img
              className="size-10"
              src={avatarImage}
              alt="Imagem do usuário"
            />
          </button>
        </DialogTrigger>

        <DialogContent className="shadow-default bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat rounded-4xl">
          <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 overflow-y-scroll scrollbar-hide">
            <DialogHeader className="max-w-full flex items-center">
              <DialogTitle className="text-center text-3xl font-poppins font-light p-1 w-80">
                Login
              </DialogTitle>
            </DialogHeader>

            <UserSignInForm />

            <Touchable>Entrar</Touchable>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
