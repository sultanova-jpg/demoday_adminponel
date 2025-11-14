import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../store/DarkModeStore";

import {
  Card,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";

import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isDark = useDarkMode((state) => state.isDark);
  const changeMode = useDarkMode((state) => state.changeMode);

  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);

  const navItems = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/animal", label: "Animals" },
      { to: "/feed", label: "Marine Animals" },
    ],
    []
  );

  const NavList = ({ close }) => (
    <List className="gap-1 -mx-1 mt-4">
      {navItems.map(({ to, label }) => {
        const active = pathname === to;

        return (
          <Link key={to} to={to} onClick={() => close && close()}>
            <ListItem
              className={`
                rounded-xl px-3 py-3 transition duration-200
                flex items-center gap-3
                ${
                  active
                    ? "bg-[#E6F1EC] text-[#0A2317] dark:bg-[#243a2f] dark:text-[#A8D29B]"
                    : "hover:bg-[#F2F7F4] dark:hover:bg-[#1f2c26] text-[#0A2317] dark:text-[#A8D29B]"
                }
              `}
            >
              {label}
              {active && (
                <span className="ml-auto h-2 w-2 rounded-full bg-[#28604F]"></span>
              )}
            </ListItem>
          </Link>
        );
      })}
    </List>
  );

  const ThemeToggle = () => (
    <button
      onClick={changeMode}
      className="w-full flex items-center justify-between
      rounded-xl px-4 py-3 ring-1 ring-black/5 dark:ring-white/10
      bg-[#F2F7F4] hover:bg-[#E6F1EC]
      dark:bg-[#1a2721] dark:hover:bg-[#243a2f]"
    >
      <span className="text-sm font-medium text-[#0A2317] dark:text-[#A8D29B]">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
      <span className="grid place-items-center h-8 w-8 rounded-full bg-white dark:bg-[#101715]">
        {isDark ? (
          <IoSunnyOutline className="h-5 w-5 text-yellow-600" />
        ) : (
          <BsMoon className="h-5 w-5 text-[#28604F]" />
        )}
      </span>
    </button>
  );

  return (
    <>
      {/* DESKTOP — lg и выше */}
      <aside className="hidden lg:block h-screen sticky top-0">
        <Card
          className="
            h-full w-72 p-4 border border-gray-200 dark:border-[#3B6145]
            bg-white/90 dark:bg-[#18211E] rounded-2xl shadow-xl
            flex flex-col
          "
        >
          <Typography
            variant="h5"
            className="font-semibold tracking-tight text-[#0A2317] dark:text-[#A8D29B] px-2"
          >
            🌍 WildWorld
          </Typography>

          <NavList />

          <div className="mt-auto px-2 pb-2">
            <ThemeToggle />
          </div>
        </Card>
      </aside>

      {/* MOBILE — ВСЕ экраны ниже lg */}
      <div className="lg:hidden">
        {/* BURGER BUTTON */}
        <button
          onClick={() => setOpenMobile(true)}
          className="fixed top-4 left-4 z-40 p-2 rounded-xl
          bg-white/90 dark:bg-[#18211E]
          shadow-md border border-gray-300 dark:border-[#3B6145]"
        >
          <Bars3Icon className="h-7 w-7 text-[#0A2317] dark:text-[#A8D29B]" />
        </button>

        {/* MOBILE SIDEBAR */}
        {openMobile && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpenMobile(false)}
            ></div>

            <Card
              className="
                fixed top-0 left-0 h-full w-64 z-50 p-4
                bg-white dark:bg-[#18211E]
                border-r border-gray-200 dark:border-[#3B6145]
                rounded-none rounded-r-2xl shadow-2xl flex flex-col
              "
            >
              {/* Верхняя часть */}
              <div className="flex justify-between items-center px-2">
                <Typography
                  variant="h5"
                  className="font-semibold text-[#0A2317] dark:text-[#A8D29B]"
                >
                  🌍 WildWorld
                </Typography>
                <button
                  onClick={() => setOpenMobile(false)}
                  className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <XMarkIcon className="h-6 w-6 text-[#0A2317] dark:text-[#A8D29B]" />
                </button>
              </div>

              <NavList close={() => setOpenMobile(false)} />

              <div className="mt-auto px-2 pb-3">
                <ThemeToggle />
              </div>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
