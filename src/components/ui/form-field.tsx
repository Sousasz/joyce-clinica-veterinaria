
type FormFieldProps = {
  fieldType: string,
  fieldValue: string | number | boolean,
  className?: string
}

export function FormField({ fieldType, fieldValue, className }: FormFieldProps) {
  return (
    <span className={`font-medium ${className}`}>
      {fieldType}: <span className="text-zinc-700 font-normal">{fieldValue}</span>
    </span>
  );
}
