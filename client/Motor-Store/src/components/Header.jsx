import React from "react";
import { useState , useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { DialogWithForm } from "../Authentication/Auth"; 

export function NavbarForDropdownWithMultipleLanguages() {
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState("English");
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const countries = [
    { flag: "🇮🇳", name: "English" },
    { flag: "🇮🇳", name: "Bengali" },
    { flag: "🇮🇳", name: "Hindi" }
  ];

  const handleOpenAuthDialog = () => {
    setOpenAuthDialog((cur) => !cur); 
  };

  return (
    <Navbar className="mx-auto w-[100%] px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex flex-wrap items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-4">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Motor Retail Shop
          </Typography>
        </div>

        <div className="relative flex w-full md:w-1/2 lg:w-2/5 xl:w-1/3 gap-2 order-3 lg:order-2  lg:mt-0">
          <Input
            type="search"
            color="black"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[200px] w-full",
            }}
          />
          <Button
            size="sm"
            color="yellow"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>

        <div className="hidden flex-wrap items-center gap-2 lg:flex order-2 lg:order-3">
          {/* Trigger the DialogWithForm component */}
          <Button variant="gradient" size="sm" onClick={handleOpenAuthDialog}>
            Login / SignUp
          </Button>

          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button
                size="sm"
                variant="outlined"
                className="hidden items-center gap-2 lg:flex"
              >
                <span className="h-min text-base leading-none">
                  {countries.find(({ name }) => name === lang)?.flag}
                </span>
                {countries.find(({ name }) => name === lang)?.name}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenu ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="hidden max-h-72 w-20 lg:block">
              {countries.map(({ name, flag }) => (
                <MenuItem
                  key={name}
                  className="flex items-center gap-2"
                  onClick={() => setLang(name)}
                >
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </div>
      {/* Render the DialogWithForm component */}
      <DialogWithForm open={openAuthDialog} onClose={handleOpenAuthDialog} />
    </Navbar>
  );
}
