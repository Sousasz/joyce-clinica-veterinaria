import { FormField } from "@/components/ui/form-field";
import { GoPencil } from "react-icons/go";

type EditableFieldProps = {
  fieldName: string;
  fieldContent: string | number | boolean;
};

export function EditableField({ fieldName, fieldContent }: EditableFieldProps) {
  return (
    <div className="flex gap-2 items-center">
      <FormField fieldType={fieldName} fieldValue={fieldContent} />
      <button className="cursor-pointer">
        <GoPencil />
      </button>
    </div>
  );
}
