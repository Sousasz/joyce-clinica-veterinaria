import { Input } from "@/components/ui/shadcn/input"; 

type InputAreaProps = {
  name: string;
  placeholder: string;
};

export function InputArea({ name, placeholder }: InputAreaProps) {
  return (
    <div className="grid gap-3">
      <Input
        className=" font-poppins rounded-full shadow-lg border-white border-2"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
