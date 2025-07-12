import avatarImage from "../../../public/avatar.jpg";
import { InputArea } from "../../modals/booking-modal/input-area";
import { SmallText } from "../ui/small-text";
import { Link } from "react-router-dom";

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

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col gap-3 w-[90%]">
                <InputArea name="user" placeholder="Usuário: " />
                <InputArea name="password" placeholder="Senha: " />
              </div>

              <SmallText>
                <Link to="/" className="font-medium underline">
                  Esqueceu a senha?
                </Link>
                <Link to="/cadastrar" className="font-medium underline">
                  Não tem um login? Cadastre-se
                </Link>
              </SmallText>
            </div>

            <button className="bg-white text-black font-medium px-6 shadow-default h-10 rounded-full cursor-pointer font-poppins">
              Entrar
            </button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
