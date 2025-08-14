import { DialogContent, DialogHeader } from "@/components/ui/shadcn/dialog";
import { AddVacinesModal } from "../add-vacines";
import { FaCheck } from "react-icons/fa6";

import { useState, FormEvent } from "react";
import { v4 } from "uuid";

import { GoPencil, GoTrash } from "react-icons/go";

type VacineType = "for-dogs" | "for-cats";

type Vacine = {
  id: string;
  vacineName: string;
  description: string;
  vacineType: VacineType;
};

export function EditVacinesModal() {
  const [vacines, setVacines] = useState<Vacine[]>([]);

  const [vacineName, setVacineName] = useState("");
  const [description, setDescription] = useState("");
  const [vacineType, setVacineType] = useState<VacineType>(
    "for-dogs"
  );

  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [tempName, setTempName] = useState("");

  function resetForm() {
    setVacineName("");
    setDescription("");
    setVacineType("for-dogs");
  }

  function addVacine(e: FormEvent) {
    e.preventDefault();

    const trimmedName = vacineName.trim();
    if (!trimmedName) return;

    const duplicate = vacines.some((v) => v.vacineName === trimmedName);
    if (duplicate) return;

    const newVacine: Vacine = {
      id: v4(),
      vacineName: trimmedName,
      description,
      vacineType,
    };

    setVacines((prev) => [...prev, newVacine]);
    resetForm();
  }

  function startInlineEditing(id: string, currentName: string) {
    setEditingItemId(id);
    setTempName(currentName);
  }

  function saveInlineEdit(id: string) {
    if (!tempName.trim()) return;
    setVacines((prev) =>
      prev.map((v: Vacine) =>
        v.id === id ? { ...v, vacineName: tempName.trim() } : v
      )
    );
    setEditingItemId(null);
    setTempName("");
  }

  function cancelInlineEdit() {
    setEditingItemId(null);
    setTempName("");
  }

  function deleteVacine(id: string) {
    setVacines((prev) => prev.filter((v) => v.id !== id));
    if (editingItemId === id) cancelInlineEdit();
  }

  // Render a section (to avoid repeating code)
  function renderSection(title: string, type: VacineType) {
    return (
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-2xl">{title}</h4>
        <div>
          <ul className="flex flex-col gap-3">
            {vacines
              .filter((v) => v.vacineType === type)
              .map((vacine) => (
                <div key={vacine.id} className="flex flex-col gap-1">
                  <div className="flex gap-4 justify-between items-center">
                    <li className="underline list-disc text-xl">
                      {editingItemId === vacine.id ? (
                        <input
                          type="text"
                          value={tempName}
                          onChange={(e) => setTempName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveInlineEdit(vacine.id);
                            if (e.key === "Escape") cancelInlineEdit();
                          }}
                          autoFocus
                          className="border border-gray-400 rounded px-2 py-1"
                        />
                      ) : (
                        vacine.vacineName
                      )}
                    </li>

                    <div className="flex gap-3">
                      {editingItemId === vacine.id ? (
                        <>
                          <button
                            onClick={() => saveInlineEdit(vacine.id)}
                            title="Salvar"
                          >
                            <FaCheck />
                          </button>
                          <button onClick={cancelInlineEdit} title="Cancelar">
                            ✖
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="cursor-pointer"
                            onClick={() =>
                              startInlineEditing(
                                vacine.id,
                                vacine.vacineName
                              )
                            }
                            aria-label="Editar medicamento"
                            title="Editar"
                          >
                            <GoPencil className="size-5" />
                          </button>

                          <button
                            className="cursor-pointer"
                            onClick={() => deleteVacine(vacine.id)}
                            aria-label="Remover medicamento"
                            title="Excluir"
                          >
                            <GoTrash className="size-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <p>{vacine.description}</p>
                </div>
              ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light font-poppins bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-scroll scrollbar-hide">
        <DialogHeader className="max-w-full flex items-center">
          MEDICAMENTOS
        </DialogHeader>

        <div className="flex flex-col gap-14">
          {renderSection("Para cães:", "for-dogs")}
          {renderSection("Para gatos:", "for-cats")}
        </div>

        <AddVacinesModal
          addVacine={addVacine}
          vacineType={vacineType}
          setDescription={setDescription}
          setVacineName={setVacineName}
          setVacineType={setVacineType}
        />
      </div>
    </DialogContent>
  );
}
