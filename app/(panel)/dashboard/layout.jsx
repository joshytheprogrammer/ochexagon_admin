"use client"

import MessagesContext from "@utils/context/MessagesContext";
import { fetchMessages } from "@utils/firebase/utils";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
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

  return (
    <MessagesContext.Provider value={messages}>
      <div className="h-full w-full flex flex-col">
        <h1 className="font-bold text-[25px]">Messages</h1>
      
        <div className="bg-white border w-full h-[85%] lg:h-[90%] rounded-lg mt-6 py-4 px-2 mo-sm:px-4 first-letter:self-center justify-self-center overflow-hidden">
          {children}
        </div>
      </div>
    </MessagesContext.Provider>
  );
};

export default DashboardLayout;
