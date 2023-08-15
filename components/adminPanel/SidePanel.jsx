"use client";

import { BiSolidDashboard } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidePanel = () => {
  const route = usePathname();

  return (
    <aside className="bg-primary-color text-white w-[15%] hidden translate-x-[-100%]">
      <h2 className="uppercase font-semibold text-2xl m-4 mb-12">menu</h2>

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
