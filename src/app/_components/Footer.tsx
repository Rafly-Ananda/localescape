import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="relative bg-[#374B73] pb-10 lg:mt-20">
      {/* Wave Divider */}
      <div className="relative z-20 border-t border-[#fcf1ed]">
        <div className=" custom-shape-divider-top-1710864196">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center justify-between p-6 lg:p-20">
          <img
            src="/assets/nav_logo.png"
            alt="Nav Logo"
            className="w-16 lg:h-auto lg:w-auto"
          />
          <img
            src="/assets/footer_copy.png"
            alt="Footer Copy"
            className="w-16 lg:h-auto lg:w-auto"
          />

          <div className=" hidden gap-4 text-3xl text-white lg:flex">
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>

        <div className="flex items-center justify-between p-6 lg:justify-center lg:p-0">
          <span className="text-xs text-white lg:text-sm lg:font-bold">
            &copy; 2024 Local Escape | All Rights Reserved
          </span>

          <div className="flex gap-4 text-3xl text-white lg:hidden">
            <FaWhatsapp size={25} />
            <FaInstagram size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
