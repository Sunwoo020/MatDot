"use client";
import { useState } from "react";
import { subNavigationListProps } from "./util/subNavigationList/interface";
import { subNavigationList } from "./util/subNavigationList";
import { mainNavigationListProps } from "./util/mainNavigationList/interface";
import { mainNavigationList } from "./util/mainNavigationList";

export default function NavigationBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const MainHeaderItems: mainNavigationListProps<mainNavigationList>[] = [
    { title: "맛집", icon: "맛집" },
    { title: "추천", icon: "추천" },
    { title: "리스트", icon: "리스트" },
  ];

  const SubheaderItems: subNavigationListProps<subNavigationList>[] = [
    { title: "요즘 뜨는 맛집", icon: "요즘 뜨는 맛집", path: "/popular" },
    { title: "지역별 맛집", icon: "지역별 맛집", path: "/region" },
    { title: "내 맛집", icon: "내 맛집", path: "/my" },
  ];

  return (
    <div className="relative h-24">
      <div className="flex flex-row space-y-2 ">
        {MainHeaderItems.map((item, index) => (
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
              {SubheaderItems.map((subItem, subIndex) => (
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
