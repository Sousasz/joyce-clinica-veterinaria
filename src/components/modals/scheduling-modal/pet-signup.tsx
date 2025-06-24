import { SmallText } from "@/components/shared/small-text";

export function PetSignUp() {
  return (
    <SmallText>
      <p>
        Caso ainda nao tenha seu animal cadastrado, clique neste botão para
        cadastrá-lo
      </p>

      <a className="font-bold text-center underline" href="#">
        Cadastrar Novo Animal
      </a>
    </SmallText>
  );
}
