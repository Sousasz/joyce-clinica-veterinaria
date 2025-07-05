import { FaRegCalendarCheck } from "react-icons/fa6";

export function Filter() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3">
        <span>Filtrar por data:</span>
        <FaRegCalendarCheck className="size-8" />
      </div>
    </div>
  );
}
