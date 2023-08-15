"use client";

import Header from "@components/adminPanel/Header";
import MenuBtn from "@components/adminPanel/MenuBtn";
import SidePanel from "@components/adminPanel/SidePanel";
import { useState } from "react";

const AdminPanelLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    !isOpen && setIsOpen(true);
  }

  return (
    <div className="adminPanel bg-blueish-white w-full flex flex-col h-screen">
      <Header />

      <div className="flex flex-grow">
        <SidePanel isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-grow p-4">
          <MenuBtn onClick={openMenu} />

          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminPanelLayout;
