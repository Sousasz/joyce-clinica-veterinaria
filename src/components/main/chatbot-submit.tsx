import { FaRegPaperPlane } from "react-icons/fa";
import { FormEvent, useState } from 'react'

export function ChatBotSubmit() {

  const [message, setMessage] = useState<string | undefined>()

  function addQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = new FormData(e.currentTarget)
    const value = target.get("question")?.toString()

    setMessage(value)

    console.log(message)
  }

  return (
    <form onSubmit={() => addQuestion} className="w-full flex border-2 border-t-green-light border-b-white p-4">
      <input
        name="question"
        className="w-full h-full text-black outline-none"
        type="text"
        placeholder="Digite aqui sua mensagem..."
      />
      <button className="cursor-pointer">
        <FaRegPaperPlane className="size-5" />
      </button>
    </form>
  );
}
