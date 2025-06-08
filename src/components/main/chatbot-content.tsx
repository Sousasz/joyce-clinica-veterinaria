
type ChatBotContent = {
  children: React.ReactNode
}

export function ChatBotContent({ children }: ChatBotContent) {
  return (
    <section className="flex flex-col w-full h-[350px] p-4 py-8 overflow-y-auto gap-10">
      {children}
    </section>
  )
}