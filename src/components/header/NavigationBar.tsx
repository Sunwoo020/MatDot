"use client";
import { useState } from "react";
import * as Main from "./util/mainNavigationList";
import * as Sub from "./util/subNavigationList";

export default function NavigationBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="relative h-24">
      <div className="flex flex-row space-y-2 ">
        {Main.MainHeaderItems.map((item, index) => (
          <div
            key={index}
            className="relative m-2"
            onMouseEnter={() => setActiveMenu(item.title)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="flex m-0 items-center justify-center w-36 h-24 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
              {item.icon}
            </div>
            <div
              className={`absolute left-0 w-36 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-400 ease-in-out transform ${
                activeMenu === item.title
                  ? "max-h-60 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              {Sub.SubheaderItems.map((subItem, subIndex) => (
                <a
                  key={subIndex}
                  href={subItem.path}
                  className="block p-2 hover:bg-gray-200 rounded-md"
                >
                  {subItem.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
