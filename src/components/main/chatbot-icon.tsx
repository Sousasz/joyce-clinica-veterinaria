import pingoQuestionsImage from "../../../public/pingo-questions.jpg";

type ChatBotProps = {
  onClickIconToChatBot: () => void;
};

export function ChatBotIcon({ onClickIconToChatBot }: ChatBotProps) {
  return (
    <button
      onClick={onClickIconToChatBot}
      className="fixed bottom-0 top-auto right-0 p-4 cursor-pointer"
    >
      <img
        className="rounded-full w-14"
        src={pingoQuestionsImage}
        alt="Imagem do pet do atendimento ao chatbot"
      />
    </button>
  )
}