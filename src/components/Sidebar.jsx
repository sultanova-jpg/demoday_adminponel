import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../store/DarkModeStore";
import {
  Card,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { BsMoon } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isDark = useDarkMode((state) => state.isDark)
  const changeMode = useDarkMode((state) => state.changeMode)

  useEffect(()=>{
      if (isDark) {
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
    }, [isDark])
  function change() {
    document.documentElement.classList.toggle("dark");
    setIsDark((v) => !v);
  }

  const navItems = useMemo(
    () => [
      { to: "/", label: "Home", icon: PresentationChartBarIcon },
      { to: "/animal", label: "Animals", icon: UserCircleIcon },
      { to: "/feed", label: "Marine Animals", icon: InboxIcon },
    ],
    []
  );

  return (
    <aside className="h-screen sticky top-0">
      <Card
        className="
          h-full w-72 border border-gray-200 dark:border-[#3B6145]
          bg-white/90 dark:bg-[#18211E] backdrop-blur
          shadow-xl shadow-[#264d3d]/20 dark:shadow-black/20
          rounded-2xl p-4 flex flex-col
        "
      >
        {/* header */}
        <div className="mb-4 px-3">
          <Typography
            variant="h5"
            className="font-semibold tracking-tight text-[#0A2317] dark:text-[#A8D29B]"
          >
            🌍 WildWorld
          </Typography>
          <p className="text-xs mt-1 text-[#3b5a4c] dark:text-[#8fb49f]">
            Explore • Learn • Protect
          </p>
        </div>

        {/* nav */}
        <List className="gap-1 -mx-1">
          {navItems.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link key={to} to={to}>
                <ListItem
                  className={`
                    group rounded-xl px-3 py-3
                    transition-all duration-200
                    flex items-center gap-3
                    ${active
                      ? "bg-[#E6F1EC] text-[#0A2317] dark:bg-[#243a2f] dark:text-[#A8D29B]"
                      : "hover:bg-[#F2F7F4] dark:hover:bg-[#1f2c26] text-[#0A2317] dark:text-[#A8D29B]"
                    }
                  `}
                >
                  <span
                    className={`
                      grid place-items-center h-9 w-9 rounded-lg
                      ring-1 ring-black/5 dark:ring-white/10
                      ${active ? "bg-[#CFE3C9]" : "bg-[#E8F1EC] dark:bg-[#1a2721]"}
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                  {/* active pill */}
                  {active && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-[#28604F]" />
                  )}
                </ListItem>
              </Link>
            );
          })}
        </List>

        <div className="mt-auto px-3 pt-4">
          {/* theme toggle */}
          <button
            onClick={changeMode}
            className="
              w-full flex items-center justify-between
              rounded-xl px-4 py-3
              ring-1 ring-black/5 dark:ring-white/10
              bg-[#F2F7F4] hover:bg-[#E6F1EC]
              dark:bg-[#1a2721] dark:hover:bg-[#243a2f]
              transition-all
            "
            aria-label="Toggle dark mode"
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

          {/* footer tiny */}
          <p className="mt-3 text-[10px] text-[#55786a] dark:text-[#7aa590]">
            v1.0 • UI by Tailwind + Material Tailwind
          </p>
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
