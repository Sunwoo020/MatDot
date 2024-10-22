"use client";
import { useState } from "react";
import { MenuItem } from "./NavigationMenuItem";
import * as Main from "./util/mainNavigationList";

export default function NavigationBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="relative h-24">
      <div className="flex flex-row space-y-2">
        {Main.MainHeaderItems.map((item) => (
          <MenuItem
            key={item.title}
            item={item}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        ))}
      </div>
    </div>
  );
}
