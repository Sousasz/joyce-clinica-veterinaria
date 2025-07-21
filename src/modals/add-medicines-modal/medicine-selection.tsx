export function MedicineSelection() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <input
          type="radio"
          name="medicine-type"
          value="no-injectable-medicines"
        />
        <label htmlFor="no-injectables-medicines">
          Medicamento não injetável
        </label>
      </div>

      <div className="flex items-center gap-1">
        <input type="radio" name="medicine-type" value="injectable-medicines" />
        <label htmlFor="injectables-medicines">Medicamento injetável</label>
      </div>
    </div>
  );
}
