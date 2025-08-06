import { SmallText } from "@/components/ui/small-text";

export function SignUpPetNotification() {
  return (
    <SmallText>
      <p>
        Caso ainda nao tenha seu animal cadastrado, clique neste botão para
        cadastrá-lo
      </p>

      <a href="#" className="font-bold text-center underline">
        Cadastrar Novo Animal
      </a>
    </SmallText>
  );
}
