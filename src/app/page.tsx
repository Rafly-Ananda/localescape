"use client";
import localFont from "next/font/local";
import { MdLocationOn } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { FaStar, FaArrowRight, FaInstagram } from "react-icons/fa6";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cowboy = localFont({
  src: "../../public/fonts/cowboy.otf",
  display: "swap",
});

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  swipeToSlide: true,
};

export default function Home() {
  return (
    <main className="h-full w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="/assets/hero.jpg"
          alt="hero"
          className="h-full w-full object-cover brightness-50"
        />

        <div
          className={`uppercase ${cowboy.className} absolute top-1/2 mt-[5vh] pl-6 text-2xl font-extrabold text-white lg:top-1/3 lg:pl-20 lg:text-5xl`}
        >
          <h1>begin your adventure</h1>
          <h1>travel & nature getaways</h1>
          <h1>for uncommon local experiences</h1>
          <h1>worth creating lifelong memories</h1>
        </div>
      </div>

      {/* Wave Divider Start */}
      <div className="custom-shape-divider-bottom-1710860644 hidden lg:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="custom-shape-divider-bottom-1710996322 block lg:hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/* Wave Divider End */}

      {/* Escape Section */}
      <div className="h-full w-full bg-[#FCF1ED] p-6 pb-32 pt-20 lg:px-20">
        <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start ">
          <h1
            className={`flex-1 uppercase ${cowboy.className} text-center text-2xl font-extrabold text-[#3b4b71] lg:text-left lg:text-5xl`}
          >
            escape into <br className="lg:hidden"></br> the unknown
          </h1>

          <h1 className="mt-2 flex-1 text-center text-sm font-bold text-[#3b4b71] lg:text-left lg:text-base">
            Step out of your comfort zones and explore new horizons filled with
            suprises, wonders, and the thrill of new experiences.
          </h1>
        </div>

        {/* Package Showcase */}
        <div className="mt-16 flex gap-4">
          <Slider {...settings}>
            <div className="relative h-[710px] min-w-[516px] rounded-xl border-2 border-[#3b4b71]">
              <div className="absolute top-[40px] z-10 flex gap-2 rounded-r-full bg-[#FF8197] px-5 py-1">
                <FaStar color="#f9cfa3" />
                <span className="text-sm font-semibold text-[#3b4b71]">
                  Exclusive Package
                </span>
              </div>
              <img
                src="/assets/hero.jpg"
                alt="hero"
                className="h-full w-full rounded-xl object-cover brightness-50"
              />

              <div className="absolute bottom-0 flex flex-col items-start p-4 text-white">
                <div className="flex items-center justify-center gap-2">
                  <IoWarningOutline color="white" className="text-lg" />
                  <span className="text-md">Temporary closed</span>
                </div>
                <h4 className={`text-3xl text-[#f3caa0] ${cowboy.className}`}>
                  TASTE OF WILDERNESS
                </h4>
                <div className="flex items-center justify-center gap-2">
                  <MdLocationOn color="white" className="text-lg" />
                  <span className="text-md font-bold">
                    Ujung Kulon National Park
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-[710px] min-w-[516px] rounded-xl border-2 border-[#3b4b71]">
              <div className="absolute top-[40px] z-10 flex gap-2 rounded-r-full bg-[#FF8197] px-5 py-1">
                <FaStar color="#f9cfa3" />
                <span className="text-sm font-semibold text-[#3b4b71]">
                  Exclusive Package
                </span>
              </div>
              <img
                src="/assets/hero.jpg"
                alt="hero"
                className="h-full w-full rounded-xl object-cover brightness-50"
              />

              <div className="absolute bottom-0 flex flex-col items-start p-4 text-white">
                <div className="flex items-center justify-center gap-2">
                  <IoWarningOutline color="white" className="text-lg" />
                  <span className="text-md">Temporary closed</span>
                </div>
                <h4 className={`text-3xl text-[#f3caa0] ${cowboy.className}`}>
                  TASTE OF WILDERNESS
                </h4>
                <div className="flex items-center justify-center gap-2">
                  <MdLocationOn color="white" className="text-lg" />
                  <span className="text-md font-bold">
                    Ujung Kulon National Park
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-[710px] min-w-[516px] rounded-xl border-2 border-[#3b4b71]">
              <div className="absolute top-[40px] z-10 flex gap-2 rounded-r-full bg-[#FF8197] px-5 py-1">
                <FaStar color="#f9cfa3" />
                <span className="text-sm font-semibold text-[#3b4b71]">
                  Exclusive Package
                </span>
              </div>
              <img
                src="/assets/hero.jpg"
                alt="hero"
                className="h-full w-full rounded-xl object-cover brightness-50"
              />

              <div className="absolute bottom-0 flex flex-col items-start p-4 text-white">
                <div className="flex items-center justify-center gap-2">
                  <IoWarningOutline color="white" className="text-lg" />
                  <span className="text-md">Temporary closed</span>
                </div>
                <h4 className={`text-3xl text-[#f3caa0] ${cowboy.className}`}>
                  TASTE OF WILDERNESS
                </h4>
                <div className="flex items-center justify-center gap-2">
                  <MdLocationOn color="white" className="text-lg" />
                  <span className="text-md font-bold">
                    Ujung Kulon National Park
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Discover Section */}
      <div className="h-full w-full bg-[#3b4b71] px-20 py-32">
        <div className=" flex items-end   justify-between">
          <h1
            className={`text-5xl uppercase text-[#FFCEA0] ${cowboy.className} w-[60%]`}
          >
            discover what makes our trips different to elevate your travel
            experience
          </h1>

          <button className="flex items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-semibold text-[#374B73]">
            The Local Escape Difference <FaArrowRight />
          </button>
        </div>

        <div className="mt-20 grid grid-cols-4 gap-4">
          {[
            "Well-Crafted Trips",
            "Sustainable Travel",
            "The Right Trip",
            "Exclusive Access",
          ].map((e, i) => (
            <div key={i}>
              <div>
                <img
                  src="/assets/hero.jpg"
                  alt="xoxo"
                  className="h-full w-full rounded-xl border border-white object-cover"
                />
              </div>

              <div className="mt-5">
                <h4 className="text-2xl font-extrabold text-[#FFCEA0]">{e}</h4>

                <p className="mt-2 font-bold leading-normal text-white ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat eius, enim, suscipit placeat maiores doloremque
                  provident rerum consequatur tenetur necessitatibus ullam
                  blanditiis! Fugiat incidunt eum, deleniti officiis molestiae
                  voluptatum earum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workspace Section */}
      <div className="h-full w-full bg-[#3b4b71] px-20 pb-32">
        <div className="flex gap-12 rounded-xl bg-[#334265] p-6">
          <div className="h-[676px] w-[558px] flex-1">
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-xl border-2 border-white object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-6">
            <h4
              className={`uppercase text-[#FFCEA0] ${cowboy.className} text-5xl`}
            >
              from the workspace to a breathtaking place
            </h4>

            <p className="text-lg font-semibold text-white">
              Take a much-needed break from the office to bond with your team to
              enchance team cohesion, motivation, and productivity with our
              company trip where we arrange unforgettable experience and
              unmatched services tailored to your preferences.
            </p>

            <p className="text-lg font-semibold text-white">
              Start Planning Your Company Trip With Us!
            </p>

            <button className="flex items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-semibold text-[#374B73]">
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative mt-20">
        <div className="custom-shape-divider-bottom-1710860914">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      {/* Travel as Section */}
      <div className="h-full w-full bg-[#FCF1ED] px-20 py-32">
        <div className="flex gap-12 rounded-xl p-6">
          <div className="flex flex-1 flex-col items-start justify-center gap-6">
            <h4
              className={`uppercase text-[#334265] ${cowboy.className} text-5xl`}
            >
              travel as a force
            </h4>

            <p className="text-lg font-semibold text-[#334265]">
              We believe that sustainable and responsible travel has the power
              to drive positive change. That&apos;s why, in every destination,
              we strive to create socially, economically, and environmentally
              impactful travel experiences during your trips-a force for good
              benefiting local communities, wildlife, and the planets
            </p>

            <button className="flex items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-semibold text-[#374B73]">
              Our Mission <FaArrowRight />
            </button>
          </div>

          <div className="h-[676px] w-[558px] flex-1">
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-xl border-2 border-white object-cover"
            />
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="h-full w-full bg-[#FCF1ED] px-20 pb-32">
        <h1
          className={`uppercase ${cowboy.className} text-5xl font-extrabold text-[#334265]`}
        >
          follow us on instagram
        </h1>

        <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-2">
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
          <div>
            <img
              src="/assets/hero.jpg"
              alt="hero"
              className="h-full w-full rounded-md border-2 border-[#3b4b71] object-cover"
            />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <button className="flex items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-bold text-[#374B73]">
            <FaInstagram /> Follow Us
          </button>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative z-20">
        <div className="custom-shape-divider-top-1710864196">
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
    </main>
  );
}
