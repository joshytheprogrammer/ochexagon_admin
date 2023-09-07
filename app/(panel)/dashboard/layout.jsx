"use client";

import MessagesContext from "@utils/context/MessagesContext";
import { firestore } from "@utils/firebase/firebase";
import { fetchMessages } from "@utils/firebase/utils";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const colRef = collection(firestore, "messages");
  const q = query(colRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMessages();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const updatedData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          const data = []

          snapshot.forEach((doc) => {
            data.push(doc.data().isRead);
        });

          setMessages(updatedData);
          setLoading(false);
        });
    
        // unsubscribe();
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [q]);

  return (
    <MessagesContext.Provider value={{messages, loading}}>
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
