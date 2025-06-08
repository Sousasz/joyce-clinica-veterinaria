import avatarImage from "../../../public/avatar.jpg"

export function Chatbot() {
  return (
    <button className="fixed bottom-0 top-auto right-0 p-4 cursor-pointer">
      <img className="rounded-full w-10" src={avatarImage} alt="Imagem do pet do atendimento ao chatbot" />
    </button>
  );
}
