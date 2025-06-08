import pingoImage from "../../../public/pingo.jpg";

type ChatBotResponseProps = {
  children: React.ReactNode;
};

export function ChatBotResponse({ children }: ChatBotResponseProps) {
  return (
    <div className="flex gap-3 items-end">
      <img className="size-10" src={pingoImage} alt="" />

      <div className="max-w-[80%] bg-white border border-green-light rounded-t-xl rounded-br-xl p-3 text-start shadow-md">
        <p>{children}</p>
      </div>
    </div>
  );
}
