import React from "react";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
export function MenuDefault({ menuTitle, items }) {
  return (
    <Menu>
      <MenuHandler>
        <div className="flex items-center cursor-pointer">
          <p className="bg-transparent text-black">{menuTitle}</p>
          <ChevronDownIcon className="h-5 w-5 ml-1 text-black" /> {/* Add the down arrow icon here */}
        </div>
      </MenuHandler>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
