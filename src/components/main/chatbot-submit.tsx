import { FaRegPaperPlane } from "react-icons/fa";
import { FormEvent } from 'react'

type ChatBotSubmit = {
  addQuestion: (e: FormEvent<HTMLFormElement>) =>  void
}

export function ChatBotSubmit({ addQuestion }: ChatBotSubmit) {
  return (
    <form onSubmit={addQuestion} className="w-full flex border-2 border-t-green-light border-b-white p-3">
      <input
        name="question"
        className="w-full h-full text-black outline-none px-3"
        type="text"
        placeholder="Digite aqui sua mensagem..."
      />
      <button className="cursor-pointer">
        <FaRegPaperPlane className="size-5" />
      </button>
    </form>
  );
}
