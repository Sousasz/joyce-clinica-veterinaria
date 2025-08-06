import { Subtitle } from "@/components/ui/subtitle";
import { FormField } from "@/components/ui/form-field";

export function PetDetails() {
  return (
    <div className="flex flex-col gap-4">
      <Subtitle>Animal</Subtitle>

      <div className="flex flex-col gap-4">
        <img src="" alt="" />
        <FormField fieldType="Nome" fieldValue="Amora" />
        <FormField fieldType="Espécie" fieldValue="Cachorro" />
        <FormField fieldType="Raça" fieldValue="Pastor alemão" />
        <FormField fieldType="Idade aproximada" fieldValue="8" />
        <FormField fieldType="Castrado?" fieldValue="Sim" />
        <FormField fieldType="Sexo" fieldValue="Macho" />
        <FormField fieldType="Peso" fieldValue="38.5" />
        <FormField fieldType="Temperamento" fieldValue="Equilibrado" />
      </div>
    </div>
  );
}
