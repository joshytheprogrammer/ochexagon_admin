"use client";

import { BiSolidDashboard, BiLogOut } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { signOut } from "next-auth/react";

const SidePanel = ({ isOpen, setIsOpen }) => {
  const route = usePathname();

  const closeMenu = () => {
    isOpen && setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const sidebarRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      sidebarRef &&
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target)
    ) {
      isOpen && setIsOpen(false);
    } else {
      isOpen && setIsOpen(true);
    }
  };

  const handleSignOut = () => {
    signOut({ 
      redirect: true,
      callbackUrl: "/"
    })
  };

  return (
    <aside
      className={`bg-primary-color text-white h-full w-[50%] sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%] fixed z-[99] lg:static transition-transform duration-500 ease-linear ${
        !isOpen ? "translate-x-[-100%]" : "translate-x-0"
      } lg:translate-x-0`}
      ref={sidebarRef}
    >
      <div className="flex flex-row justify-between items-center m-4 mb-12 mr-3">
        <h2 className="uppercase font-semibold text-2xl">menu</h2>

        <button onClick={closeMenu} className="text-2xl lg:hidden">
          <MdClose />
        </button>
      </div>
      <div className="flex flex-col">
        <div>
          <Link
            href="/dashboard"
            className={`sidebar-links ${
              route === "/dashboard" || route.startsWith("/dashboard")
                ? "text-primary-color"
                : "text-white"
            } ${
              route === "/dashboard" || route.startsWith("/dashboard")
                ? "bg-white"
                : ""
            }`}
          >
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/blog"
            className={`sidebar-links ${
              route === "/blog" || route.startsWith("/blog")
                ? "text-primary-color bg-white"
                : "text-white"
            }`}
          >
            <BiSolidDashboard />
            <span>Blog Posts</span>
          </Link>
          <Link
            href="/testimonials"
            className={`sidebar-links ${
              route === "/testimonials" || route.startsWith("/testimonials")
                ? "text-primary-color bg-white"
                : "text-white"
            }`}
          >
            <BiSolidDashboard />
            <span>Testimonials</span>
          </Link>
        </div>
        <hr className="w-[80%] self-center" />
        <button
          onClick={handleSignOut}
          className="text-white w-fit flex items-center mt-6 ml-4"
        >
          <BiLogOut className="text-[25px] mr-2" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default SidePanel;
