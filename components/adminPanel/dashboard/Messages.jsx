"use client";

import MessagesContext from "@utils/context/MessagesContext";
import Link from "next/link";
import { useContext } from "react";

const Messages = () => {
  const messagesList = useContext(MessagesContext);

  const unReadMessages = messagesList.filter((msg) => msg.data.isRead == false);

  function displayDateOrTime(timestamp) {
    const toDateTime = (timestamp) => {
      const milliseconds =
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;

      const jsDate = new Date(milliseconds);

      return jsDate;
    };

    const currentDateTime = new Date();
    const inputDate = toDateTime(timestamp);

    if (
      currentDateTime.getFullYear() === inputDate.getFullYear() &&
      currentDateTime.getMonth() === inputDate.getMonth() &&
      currentDateTime.getDate() === inputDate.getDate()
    ) {
      const hours = inputDate.getHours().toString().padStart(2, "0");
      const minutes = inputDate.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    } else {
      const day = inputDate.getDate().toString().padStart(2, "0");
      const month = inputDate.getMonth().toString().padStart(2, "0");
      const year = inputDate.getFullYear().toString();
      return `${day}/${month}/${year}`;
    }
  }

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="flex flex-col-reverse mo-lg:flex-row justify-between mb-2 lg:mb-0">
        <span className="datalength-btn">
          {messagesList.length == 1
            ? `${messagesList.length} message`
            : `${messagesList.length} messages`}
        </span>
        <input
          type="text"
          className="search-btn w-full mo-lg:w-[50%] mb-5 lg:mb-0"
        />
      </div>

      <p className="text-sm font-semibold my-2">{`${unReadMessages.length} Unread Messages`}</p>

      <hr />

      <div className="scrollable-content overflow-y-auto h-[100%] my-4 px-2">
        {messagesList.map((message, index) => (
          <Link
            href={`dashboard/messages/${message.id}`}
            key={index}
            className="w-full block py-2 hover:bg-transparent-blue hover:border-l-4 border-primary-color mb-1 last:mb-0 lg:px-4 rounded-[4px]"
          >
            <div className="font-bold flex justify-between mb-2">
              <h2 className="text-lg">{message.data.senderName}</h2>
              <span className="text-sm">{message.data.email}</span>
            </div>

            <div className="font-semibold text-sm flex justify-between">
              <p className="truncate-text w-[75%]">
                {message.data.messageSent}
              </p>
              <span>{`${displayDateOrTime(message.data.timestamp)}`}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Messages;
