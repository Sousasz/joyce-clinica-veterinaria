import { Subtitle } from "@/components/ui/subtitle";

export function Description() {
  return (
    <div className="flex flex-col gap-4">
      <Subtitle>Descrição</Subtitle>
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
