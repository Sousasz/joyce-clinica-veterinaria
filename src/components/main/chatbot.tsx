import { useState } from "react";
import { ChatBotIcon } from "./chatbot-icon";
import { ChatBotHeader } from "./chatbot-header";
import { ChatBotContent } from "./chatbot-content";
import { ChatBotResponse } from "./chatbot-response";
import { ChatBotQuestion } from "./chatbot-question";
import { ChatBotSubmit } from "./chatbot-submit";

export function Chatbot() {

  const [isOpenChat, setIsOpenChat] = useState(false);

  function onClickIconToChatBot() {
    setIsOpenChat(!isOpenChat);
  }

  function onCloseChatBot() {
    setIsOpenChat(false);
  }

  

  return (
    <>
      {isOpenChat ? (
        <section className="flex flex-col fixed bottom-0 top-auto right-0 border border-gray-600">
          <div className="bg-white w-[40rem] h-[30rem]">
            <ChatBotHeader onCloseChatBot={onCloseChatBot} />

            <ChatBotContent>
              <ChatBotResponse>Hello World</ChatBotResponse>
              <ChatBotQuestion>AAAAAAAAAAAAAAA</ChatBotQuestion>
            </ChatBotContent>

            <ChatBotSubmit />
          </div>
        </section>
      ) : (
        <ChatBotIcon onClickIconToChatBot={onClickIconToChatBot} />
      )}
    </>
  );
}
