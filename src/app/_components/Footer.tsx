import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="relative mt-20  bg-[#374B73] pb-10">
      <div className="flex items-center justify-between p-20">
        <img
          src="/assets/nav_logo.png"
          alt="Nav Logo"
          className="h-auto w-auto"
        />
        <img
          src="/assets/footer_copy.png"
          alt="Footer Copy"
          className="h-auto w-auto"
        />

        <div className="flex gap-4 text-3xl text-white">
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="text-sm font-bold text-white">
          &copy; 2024 Local Escape | All Rights Reserved
        </span>
      </div>
    </div>
  );
}
