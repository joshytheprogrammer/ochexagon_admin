"use client"

import MessageDetails from "@components/adminPanel/dashboard/messages/MessageDetails";
import MessagesContext from "@utils/context/MessagesContext";
import { useContext } from "react";

const MessageView = ({ params }) => {
  const messagesList = useContext(MessagesContext);
  const id = params.id;

  const message = messagesList.find(msg => msg.id === id);
  
  return (
    <>
      <MessageDetails messageData={message} />
    </>
  );
};

export default MessageView;
