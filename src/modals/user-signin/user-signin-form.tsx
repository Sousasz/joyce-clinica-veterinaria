import { Input } from "@/components/ui/shadcn/input";
import { SmallText } from "@/components/ui/small-text";
import { Link } from "react-router-dom";

export function UserSignInForm() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-3 w-[90%]">
        <Input name="user" placeholder="Usuário: " />
        <Input name="password" placeholder="Senha: " />
      </div>

      <SmallText>
        <Link to="/" className="font-medium underline">
          Esqueceu a senha?
        </Link>
        <Link to="/cadastrar-usuario" className="font-medium underline">
          Não tem um login? Cadastre-se
        </Link>
      </SmallText>
    </div>
  );
}
