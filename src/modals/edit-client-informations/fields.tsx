import { FormField } from "@/components/ui/form-field";

export function Fields() {
  return (
    <div className="flex justify-center font-poppins">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-4">
          <FormField fieldType="Nome completo" fieldValue="John Doe" />
          <FormField fieldType="CPF/RG" fieldValue={99999999999} />

          <FormField fieldType="Telefone" fieldValue={999999999} />
          <FormField fieldType="CEP" fieldValue={9999999} />

          <div className="flex max-[990px]:flex-col gap-2">
            <FormField fieldType="Número" fieldValue={99} />
            <FormField fieldType="Complemento" fieldValue="apto 999" />
          </div>

          <div className="flex max-[990px]:flex-col gap-2">
            <FormField fieldType="Endereço" fieldValue="Rua Avenida Avenida" />
            <FormField fieldType="Bairro" fieldValue="Perdizes" />
          </div>
        </div>
      </div>
    </div>
  );
}
