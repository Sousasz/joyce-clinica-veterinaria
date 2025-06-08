import { FaRegPaperPlane } from "react-icons/fa";
import { FormEvent, useState } from "react";

export function ChatBotSubmit() {

  const [questions, setQuestions] = useState<string[] | undefined>([]);

  function addQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = new FormData(event.currentTarget)
    const value = target.get("question")?.toString()

    setQuestions([...questions, value])
    console.log(questions)
  }

  return (
    <div className="w-full flex border-2 border-t-green-light border-b-white p-4">
      <input
        name="question"
        className="w-full h-full text-black outline-none"
        type="text"
        placeholder="Digite aqui sua mensagem..."
      />
      <button onSubmit={() => addQuestion} className="cursor-pointer">
        <FaRegPaperPlane className="size-5" />
      </button>
    </div>
  );
}
