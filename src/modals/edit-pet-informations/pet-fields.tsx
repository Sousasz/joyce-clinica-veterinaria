import { EditableField } from "@/components/ui/editable-field";

export function PetFields() {
  return (
    <div className="flex justify-center font-poppins">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-4">
          <EditableField fieldName="Nome" fieldContent="Amora" />

          <EditableField fieldName="Espécie" fieldContent="Cachorro" />

          <EditableField fieldName="Raça" fieldContent="Pastor alemão" />

          <EditableField
            fieldName="Data de nascimento"
            fieldContent="12/12/2015"
          />

          <EditableField fieldName="Castrado?" fieldContent={true} />

          <EditableField fieldName="Complemento" fieldContent="Apto 999" />

          <EditableField fieldName="Sexo" fieldContent="M" />

          <EditableField fieldName="Peso" fieldContent="38.5" />

          <EditableField fieldName="Temperamento" fieldContent="Equilibrado" />
        </div>
      </div>
    </div>
  );
}
