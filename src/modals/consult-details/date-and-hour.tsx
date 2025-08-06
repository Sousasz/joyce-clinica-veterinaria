import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

export function DateAndHour() {
  return (
    <div className="flex justify-center gap-3 m-5">
      <div className="flex gap-1 items-center">
        <FaRegCalendarCheck className="size-8" />
        <span>Data</span>
      </div>

      <div className="flex gap-1 items-center">
        <IoIosTimer className="size-8" />
        <span>Hora</span>
      </div>
    </div>
  );
}
