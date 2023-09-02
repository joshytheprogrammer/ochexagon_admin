"use client";

import MessagesContext from "@utils/context/MessagesContext";
import Link from "next/link";
import { useContext } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "@utils/firebase/firebase";
import { displayDateOrTime } from "@utils/firebase/utils";

const Messages = () => {
  const { messages, loading } = useContext(MessagesContext);

  const unReadMessages = messages.filter((msg) => msg.isRead == false);

  const handleClick = async (messageId) => {
    const messageRef = doc(firestore, "messages", messageId);
    await updateDoc(messageRef, {
      isRead: true,
    });
  };

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="flex flex-col-reverse mo-lg:flex-row justify-between mb-2 lg:mb-0">
        <span className="datalength-btn">
          {messages.length == 1
            ? `${messages.length} message`
            : `${messages.length} messages`}
        </span>
        <input
          type="text"
          className="search-btn w-full mo-lg:w-[50%] mb-5 lg:mb-0"
        />
      </div>

      <p className="text-sm font-semibold my-2">
        {unReadMessages.length == 1
          ? `${unReadMessages.length} Unread message`
          : `${unReadMessages.length} Unread messages`}
      </p>

      <hr />

      {loading && <div>Loading...</div>}
      {messages && (
        <div className="scrollable-content overflow-y-auto h-[100%] my-4 px-2">
          {messages.map((message, index) => (
            <Link
              href={`dashboard/messages/${message.id}`}
              onClick={() => handleClick(message.id)}
              key={index}
              className={`messageLink w-full block py-2 hover:bg-transparent-blue hover:border-l-4 border-primary-color mb-1 last:mb-0 lg:px-4 rounded-[4px] ${
                message.isRead ? "read" : "unread"
              }`}
            >
              <div className="flex justify-between mb-2">
                <h2 className="text-lg">{message.senderName}</h2>
                <span className="text-sm">{message.email}</span>
              </div>

              <div className="text-sm flex justify-between">
                <p className="truncate-text w-[75%]">{message.messageSent}</p>
                <span>{displayDateOrTime(message.timestamp)}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
