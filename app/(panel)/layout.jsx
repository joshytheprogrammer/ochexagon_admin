"use client";

import Header from "@components/adminPanel/Header";
import MenuBtn from "@components/adminPanel/MenuBtn";
import SidePanel from "@components/adminPanel/SidePanel";
import { auth } from "@utils/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AdminPanelLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    !isOpen && setIsOpen(true);
  };

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();


  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('You are signed in');
    } else {
      router.push('/');
      console.log('You need to sign in')
    }
  })

  // const user = auth.currentUser;

  // if (!user) {
  //   router.push("/");
  // } else {
    return (
      <div className="adminPanel bg-blueish-white w-full flex flex-col h-screen">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <SidePanel isOpen={isOpen} setIsOpen={setIsOpen} />
          <main className="w-full lg:w-[85%] h-full px-4 mo-lg:px-8 lg:px-12 py-4">
            <MenuBtn onClick={openMenu} />
            {children}
          </main>
        </div>
      </div>
    );
  // }
};

export default AdminPanelLayout;
