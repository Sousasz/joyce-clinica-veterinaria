import { ChatBotIcon } from "./chatbot-icon";
import { ChatBotHeader } from "./chatbot-header";
import { ChatBotContent } from "./chatbot-content";
import { ChatBotResponse } from "./chatbot-response";
import { ChatBotQuestion } from "./chatbot-question";
import { ChatBotSubmit } from "./chatbot-submit";
import { useState, FormEvent } from "react";

export function Chatbot() {

  const [isOpenChat, setIsOpenChat] = useState(false);
  const [message, setMessage] = useState<string[] | undefined>([])


  function onClickIconToChatBot() {
    setIsOpenChat(!isOpenChat);
  }

  function onCloseChatBot() {
    setIsOpenChat(false);
  }

  
  function addQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = new FormData(e.currentTarget)
    const value = target.get("question")?.toString()

    setMessage([...message, value])

    console.log(message)
  }

  

  return (
    <>
      {isOpenChat ? (
        <section className="flex flex-col fixed bottom-0 top-auto right-0 border border-gray-600 max-[680px]:right-auto">
          <div className="bg-white w-[40rem] h-[30rem] max-[680px]:w-[30rem] max-[500px]:w-[25rem] max-[425px]:w-[22rem]">
            <ChatBotHeader onCloseChatBot={onCloseChatBot} />

            <ChatBotContent>
              <ChatBotResponse>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae ipsa quos dolorem, commodi, harum ducimus mollitia, eos illum eum nulla fugiat ex quam dolore sit. Et reprehenderit beatae eveniet qui aut vero cum minima, ipsa repudiandae iusto delectus aliquam optio possimus expedita, obcaecati molestias cupiditate deserunt quidem quam quod.</ChatBotResponse>

              {message?.map((text, index) => {
                return (
                  <ChatBotQuestion key={index}>{text}</ChatBotQuestion>
                )
              })}
              
            </ChatBotContent>

            <ChatBotSubmit addQuestion={addQuestion} />
          </div>
        </section>
      ) : (
        <ChatBotIcon onClickIconToChatBot={onClickIconToChatBot} />
      )}
    </>
  );
}
