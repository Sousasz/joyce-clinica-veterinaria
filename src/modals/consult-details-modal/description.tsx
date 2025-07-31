import { Title } from "@/components/ui/title";

export function Description() {
  return (
    <div className="flex flex-col gap-4">
      <Title className="bg-white p-1" textInBold="Descrição" />
      <p className="max-w-[30rem] text-start my-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        sunt odio non accusamus vero esse nam vitae ex repellendus, a minus rem
        voluptates? Exercitationem asperiores, voluptas, laborum quae hic nisi
        labore fuga totam aperiam non facere. Ad maiores sint quod quae
        perferendis soluta? 
      </p>
    </div>
  );
}
