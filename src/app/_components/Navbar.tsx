import React from "react";

// Icons
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="absolute z-10 flex h-[128px] w-full items-center justify-between px-20 py-5">
      <img
        src="/assets/nav_logo.png"
        alt="Nav Logo"
        className="h-auto w-auto"
      />

      <ul className="flex gap-[28px] font-bold text-white">
        <li className="flex items-center justify-center gap-2">
          Destinations <IoIosArrowDown className="text-lg" />
        </li>
        <li className="flex items-center justify-center gap-2">
          Ways To Travel <IoIosArrowDown className="text-lg" />
        </li>
        <li className="flex items-center justify-center gap-2">
          About <IoIosArrowDown className="text-lg" />
        </li>
        <li className="flex items-center justify-center gap-2">
          Journal <IoIosArrowDown className="text-lg" />
        </li>
      </ul>
    </div>
  );
}
