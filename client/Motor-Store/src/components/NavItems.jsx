import React, { useState, useEffect } from "react";
import {
  Navbar, IconButton, Collapse, Menu,
  MenuHandler,
  MenuList,
  MenuItem, Button
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, MapPinIcon, PhoneIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { MenuDefault } from "./NavButtons";
import { DialogWithForm } from "../Authentication/Auth";

export function Navitems() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuItems = ["Menu Item 1", "Menu Item 2", "Menu Item 3"];
  const countries = [
    { flag: "🇮🇳", name: "English" },
    { flag: "🇮🇳", name: "Bengali" },
    { flag: "🇮🇳", name: "Hindi" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 872) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenAuthDialog = () => {
    setOpenAuthDialog((cur) => !cur);
  };

  return (
    <Navbar className="mx-auto w-full px-4 py-2 lg:px-8 lg:py-4 bg-white shadow">
      <div className="flex items-center justify-between p-1">
        {/* Mobile menu button (visible when window width < 755px) */}
        <div className="flex gap-4 justify-start items-center">
          <p className="text-black">Home</p>
          <MenuDefault menuTitle="Categories" items={menuItems} />
          <MenuDefault menuTitle="Collection" items={menuItems} />
        </div>
        {windowWidth < 872 && (
          <IconButton
            variant="text"
            className="ml-auto"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        )}

        {/* Menu items */}
        <div className={`flex gap-7 ${windowWidth < 872 ? "hidden" : "flex"}`}>
          <MenuDefault menuTitle="Collection" items={menuItems} />
          <MenuDefault menuTitle="Shop" items={menuItems} />
          <MenuDefault menuTitle="Location" items={menuItems} />
          <div className="flex items-center cursor-pointer">
            <p className="text-black">Contact</p>
            <PhoneIcon className="text-black h-5 w-5 ml-1.5 mb-0.5" />
          </div>
          <div className="flex items-center cursor-pointer">
            <p className="text-black">Location</p>
            <MapPinIcon className="text-black h-5 w-5 ml-1.5 mb-0.5" />
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <Collapse open={openNav} className="lg:hidden">
        <div className="flex flex-col w-full gap-3 ml-1">
          {/* Only display the MenuDefault for mobile view */}
          <p className="text-black">Shop</p>
          <div className="flex items-center cursor-pointer">
            <p className="text-black">Contact</p>
            <PhoneIcon className="text-black h-5 w-5 ml-1.5 mb-0.5" />
          </div>
          <div className="flex items-center cursor-pointer">
            <p className="text-black">Location</p>
            <MapPinIcon className="text-black h-5 w-5 ml-1.5 mb-0.5" />
          </div>
        </div>
        {/* Login SignUp Option for small screen devices  */}
        <div className="flex w-full flex-nowrap items-center gap-x-4 lg:hidden my-4">
          <Button variant="gradient" size="sm" fullWidth onClick={handleOpenAuthDialog}>
            Login / SignUp
          </Button>
          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button
                fullWidth
                size="sm"
                variant="outlined"
                className="flex items-center justify-center gap-2 lg:hidden"
              >
                🇮🇳 English{" "}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`w-3.h-3.5 h-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                    }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="block max-h-72 w-20 lg:hidden">
              {countries.map(({ name, flag }) => (
                <MenuItem key={name} className="flex items-center gap-2">
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </Collapse>
      <DialogWithForm open={openAuthDialog} onClose={handleOpenAuthDialog} />
    </Navbar>
  );
}
