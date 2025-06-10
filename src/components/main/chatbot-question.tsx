import avatarImage from "../../../public/avatar.jpg";

type ChatBotQuestionProps = {
  children: React.ReactNode;
};

export function ChatBotQuestion({ children }: ChatBotQuestionProps) {
  return (
    <div className="flex flex-row-reverse gap-3 items-end">
      <img className="size-10" src={avatarImage} alt="" />

      <div className="max-w-[80%] max-h-full bg-green-light border rounded-t-xl rounded-bl-xl p-3 text-start shadow-md">
        <p className=" break-words overflow-hidden">{children}</p>
      </div>
    </div>
  );
}
