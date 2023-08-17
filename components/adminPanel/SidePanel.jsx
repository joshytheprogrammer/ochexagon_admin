"use client";

import { BiSolidDashboard } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidePanel = ({ isOpen, setIsOpen }) => {
  const route = usePathname();

  const closeMenu = () => {
    isOpen && setIsOpen(false);
  }

  return (
    <aside
      className={`bg-primary-color text-white h-full w-[50%] sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%] fixed lg:static transition-transform duration-500 ease-linear ${!isOpen ? "translate-x-[-100%]" : "translate-x-0"} lg:translate-x-0`}
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
              route === "/dashboard" ? "text-primary-color" : "text-white"
            } ${route === "/dashboard" ? "bg-white" : ""}`}
          >
            <BiSolidDashboard />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/blog"
            className={`sidebar-links ${
              route === "/blog" ? "text-primary-color" : "text-white"
            } ${route === "/blog" ? "bg-white" : ""}`}
          >
            <BiSolidDashboard />
            <span>Blog Posts</span>
          </Link>
          <Link
            href="/testimonials"
            className={`sidebar-links ${
              route === "/testimonials" ? "text-primary-color" : "text-white"
            } ${route === "/testimonials" ? "bg-white" : ""}`}
          >
            <BiSolidDashboard />
            <span>Testimonials</span>
          </Link>
        </div>
        <hr className="w-[80%] self-center" />
        <Link href="/" className="text-white w-fit flex items-center mt-6 ml-4">
          <BiSolidDashboard className="text-[25px] mr-2" />
          <span>Log Out</span>
        </Link>
      </div>
    </aside>
  );
};

export default SidePanel;
