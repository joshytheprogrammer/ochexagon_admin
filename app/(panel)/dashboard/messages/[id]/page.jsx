"use client"

import MessageDetails from "@components/adminPanel/dashboard/messages/MessageDetails";
import { fetchMessages } from "@utils/firebase/utils";
import { useEffect, useState } from "react";

const MessageView = ({ params }) => {
  const id = params.id;

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const data = await fetchMessages();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const message = messages.find(msg => msg.id === id);
  
  return (
    <>
      <MessageDetails messageData={message} loading={loading} />
    </>
  );
};

export default MessageView;
