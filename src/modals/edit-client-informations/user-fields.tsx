import { EditableField } from "@/components/ui/editable-field";

export function UserFields() {
  return (
    <div className="flex justify-center font-poppins">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-4">
          <EditableField fieldName="Nome completo" fieldContent="John Doe" />

          <EditableField fieldName="CPF/RG" fieldContent={99999999999} />

          <EditableField fieldName="Telefone" fieldContent={999999999} />

          <EditableField fieldName="CEP" fieldContent={9999999} />

          <EditableField fieldName="Número" fieldContent={99} />

          <EditableField fieldName="Complemento" fieldContent="Apto 999" />

          <EditableField fieldName="Endereço" fieldContent="Rua Avenida Avenida" />

          <EditableField fieldName="Bairro" fieldContent="Perdizes" />
        </div>
      </div>
    </div>
  );
}
