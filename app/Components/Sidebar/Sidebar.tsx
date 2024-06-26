"use client";
import React from "react";
import Image from "next/image";
import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <nav
      className={`relative w-[15rem] bg-bg2 border-2 border-border1 rounded-xl flex flex-col justify-between text-grey3`}
    >
      <div className="profile relative flex flex-col items-center m-6 p-4 cursor-pointer rounded-xl group">
        <div
          className={`profile-overlay absolute top-0 left-0 w-full h-full bg-bg3 backdrop-blur transition-all duration-500 rounded-xl border border-border2 opacity-20 group-hover:opacity-100`}
        ></div>
        <div className="image relative z-10 flex-shrink-0 inline-block overflow-hidden transition-all duration-500 rounded-full w-20 h-20">
          <Image
            width={70}
            height={70}
            src="/avatar1.webp"
            alt="profile"
            className="rounded-full transition-all duration-500 group-hover:scale-110"
          />
        </div>
        <h1 className="relative z-10 mt-4 text-center font-bold text-grey0">
          <span>Anko</span>
          <span>Mitarashi</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${
                pathname === link ? "bg-bgLink2" : ""
              } relative p-3 my-1 grid grid-cols-[40px_1fr] cursor-pointer items-center hover:bg-bgLink1 group`}
              onClick={() => handleClick(link)}
            >
              <div
                className={`absolute top-0 left-0 w-0 h-full bg-bgLink2 z-10 transition-all duration-300 ease-in-out group-hover:w-full`}
              ></div>
              <div
                className={`absolute top-0 right-0 w-0 h-full bg-greenDark z-10 transition-all duration-300 ease-in-out ${
                  pathname === link ? "w-1.5" : ""
                }`}
                style={{
                  borderBottomLeftRadius: "5px",
                  borderTopLeftRadius: "5px",
                }}
              ></div>
              <div className="flex items-center text-icons2 group-hover:text-icons2 z-20">
                {item.icon}
              </div>
              <Link
                href={link}
                className="ml-4 font-medium transition-all duration-300 ease-in-out z-20"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="mt-auto p-4 bg-button text-white hover:bg-opacity-75">
        Button
      </button>
    </nav>
  );
};

export default Sidebar;
