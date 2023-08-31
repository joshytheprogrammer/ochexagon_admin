"use client";

import Header from "@components/adminPanel/Header";
import MenuBtn from "@components/adminPanel/MenuBtn";
import SidePanel from "@components/adminPanel/SidePanel";
import { fetchMessages } from "@utils/firebase/utils";
import { useEffect, useState } from "react";

const AdminPanelLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    !isOpen && setIsOpen(true);
  };

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
};

export default AdminPanelLayout;
