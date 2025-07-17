import { Title } from "@/components/ui/title";

export function Description() {
  return (
    <>
      <Title className="text-white" textInBold="Descrição" />
      <textarea
        className="w-full h-62 border-2 border-white shadow-default rounded-xl outline-none font-poppins p-2"
        name="description"
      ></textarea>
    </>
  );
}
