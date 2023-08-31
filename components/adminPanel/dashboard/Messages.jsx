"use client"

import { fetchMessages } from "@utils/firebase/utils";
import messagesArray from "@utils/lists/messages";
import Link from "next/link";
import { useEffect, useState } from "react";

const Messages = () => {
  const messageList = messagesArray;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMessages();
        setMessages(data);
      } catch (error) {
        console.log(error.code);
      }
    }
    fetchData();
  }, []);

  console.log(messages);
  
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="flex flex-col-reverse mo-lg:flex-row justify-between mb-2 lg:mb-0">
        <span className="datalength-btn">{messages.length == 1 ? `${messages.length} message` : `${messages.length} messages`}</span>
        <input type="text" className="search-btn w-full mo-lg:w-[50%] mb-5 lg:mb-0" />
      </div>

      <p className="text-sm font-semibold my-2">3 Unread Messages</p>

      <hr />

      <div className="scrollable-content overflow-y-scroll h-[100%] my-4 px-2">
        {messageList.map((message, index) => (
          <Link href={`dashboard/messages/${message.id}`} key={index} className="w-full block py-2 hover:bg-transparent-blue hover:border-l-4 border-primary-color mb-1 last:mb-0 lg:px-4 rounded-[4px]">
            <div className="font-bold flex justify-between mb-2">
              <h2 className="text-lg">{message.senderName}</h2>
              <span className="text-sm">{message.email}</span>
            </div>

            <div className="font-semibold text-sm flex justify-between">
              <p className="truncate-text w-[75%]">{message.message}</p>
              <span>18:47</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Messages;
