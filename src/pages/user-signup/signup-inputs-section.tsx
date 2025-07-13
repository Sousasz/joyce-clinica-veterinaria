import { Input } from "@/components/ui/shadcn/input";

export function SignUpInputsSection() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-full">
        <Input placeholder="Nome completo:" />
        <Input placeholder="CPF/RG:" />
        <Input placeholder="Data de nascimento:" />
        <Input placeholder="Telefone:" />
        <Input placeholder="CEP:" />

        <div className="flex gap-2">
          <Input placeholder="Número:" />
          <Input placeholder="Complemento:" />
        </div>

        <Input placeholder="Endereço:" />
        <Input placeholder="Bairro:" />
      </div>
    </div>
  );
}
