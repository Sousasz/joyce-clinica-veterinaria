import { SchedulingSheet } from "./scheduling-sheet";
import { SchedulingDetails } from "./scheduling-details";

export function SchedulingMainContent() {
  return (
    <div className="flex justify-between items-center gap-10 h-full">
      <SchedulingSheet />
      <SchedulingDetails />
    </div>
  );
}
