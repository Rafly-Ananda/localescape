"use client";
import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

// Icons
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  return (
    <div className="absolute z-10 flex h-[128px] w-full items-center justify-between px-6 py-5 lg:px-20">
      <img
        src="/assets/nav_logo.png"
        alt="Nav Logo"
        className="h-14 w-16 lg:h-auto lg:w-auto"
      />

      <div className="lg:hidden">
        <Hamburger
          toggled={isHamburgerOpen}
          toggle={setIsHamburgerOpen}
          color="#ffffff"
        />
      </div>

      <ul className="hidden gap-[28px] font-bold text-white lg:flex">
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
