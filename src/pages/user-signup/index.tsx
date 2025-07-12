import { Title } from "@/components/ui/title";
import { Touchable } from "@/components/ui/touchable";
import { Input } from "@/components/ui/shadcn/input";

export function UserSignUp() {
  return (
    <div className="w-screen h-screen shadow-default bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat p-10">
      <div className="h-full backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col items-center gap-5 overflow-y-scroll scrollbar-hide">
        <Title textInBold="Cadastro" text="do cliente" />

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col gap-3">
            <Input
              className=" font-poppins rounded-full shadow-lg border-white border-2"
              placeholder="Nome completo:"
            />
            <Input
              className=" font-poppins rounded-full shadow-lg border-white border-2"
              placeholder="CPF/RG:"
            />
          </div>

          <Touchable>Concluído</Touchable>
        </div>
      </div>
    </div>
  );
}
