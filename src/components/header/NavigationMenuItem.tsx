"use client";
import * as Main from "./util/mainNavigationList";
import * as Sub from "./util/subNavigationList";
import * as Type from "./util";

export const MenuItem = ({
  item,
  activeMenu,
  setActiveMenu,
}: Type.MenuItemProps) => {
  const isActive = activeMenu === item.title;

  return (
    <div
      className="relative m-2"
      onMouseEnter={() => setActiveMenu(item.title)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="flex m-0 items-center justify-center w-36 h-24 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
        {item.icon}
      </div>
      <div
        className={`absolute left-0 w-36 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-400 ease-in-out transform ${
          isActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        {Sub.SubHeaderItems.map((subItem) => (
          <a
            key={subItem.title}
            href={subItem.path}
            className="block p-2 hover:bg-gray-200 rounded-md"
          >
            {subItem.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
