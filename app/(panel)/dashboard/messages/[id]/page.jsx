"use client"

import MessageDetails from "@components/adminPanel/dashboard/messages/MessageDetails";
import MessagesContext from "@utils/context/MessagesContext";
import { useContext } from "react";

const MessageView = ({ params }) => {
  const { messages, loading } = useContext(MessagesContext);
  const id = params.id;

  const message = messages.find(msg => msg.id === id);
  
  return (
    <>
      <MessageDetails messageData={message} loading={loading} />
    </>
  );
};

export default MessageView;
