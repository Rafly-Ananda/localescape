"use client";
import localFont from "next/font/local";
import { MdLocationOn } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { FaStar, FaArrowRight, FaInstagram } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";

import Hamburger from "hamburger-react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

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
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsHamburgerOpen(false);
  }, []);

  if (isHamburgerOpen) {
    return (
      <div className="h-screen w-screen bg-[#374B73]">
        <div
          className={` flex h-[128px] w-full items-center justify-between px-6 py-5 lg:px-20`}
        >
          <img
            src="/assets/nav_logo.png"
            alt="Nav Logo"
            className="w-16 lg:h-auto lg:w-auto"
          />

          <div className="lg:hidden">
            <Hamburger
              toggled={isHamburgerOpen}
              toggle={setIsHamburgerOpen}
              color="#ffffff"
            />
          </div>
        </div>

        <ul className=" flex flex-col gap-[28px] p-6 font-bold text-white">
          <li className="flex items-center justify-between gap-2">
            Destinations <IoIosArrowForward className="text-lg" />
          </li>
          <li className="flex items-center justify-between gap-2">
            Ways To Travel <IoIosArrowForward className="text-lg" />
          </li>
          <li className="flex items-center justify-between gap-2">
            About <IoIosArrowForward className="text-lg" />
          </li>
          <li className="flex items-center justify-between gap-2">
            Journal <IoIosArrowForward className="text-lg" />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <Navbar
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
      />
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
        {/* <div className="custom-shape-divider-bottom-1710860644 hidden lg:block">
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
        </div> */}

        <div className="custom-shape-divider-bottom-1710996322 n">
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
        <div className="h-full w-full bg-[#FCF1ED] p-6 pb-24 pt-20 lg:px-20 lg:pb-32">
          <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start ">
            <h1
              className={`flex-1 uppercase ${cowboy.className} text-center text-2xl font-extrabold text-[#3b4b71] lg:text-left lg:text-5xl`}
            >
              escape into <br className="lg:hidden"></br> the unknown
            </h1>

            <h1 className="mt-2 flex-1 text-center text-sm font-bold text-[#3b4b71] lg:text-left lg:text-base">
              Step out of your comfort zones and explore new horizons filled
              with suprises, wonders, and the thrill of new experiences.
            </h1>
          </div>

          {/* Package Showcase */}
          <div className="mt-16">
            <div className="hidden gap-4 lg:flex">
              {/* Big Main */}
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
              {/* 4 Smaller */}
              <div className="relative grid h-[710px] w-full grid-cols-2 grid-rows-2 gap-4">
                <div className="relative">
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
                    <h4
                      className={`text-3xl text-[#f3caa0] ${cowboy.className}`}
                    >
                      SANCTUARY OF WONDERS
                    </h4>
                    <div className="flex items-center justify-center gap-2">
                      <MdLocationOn color="white" className="text-lg" />
                      <span className="text-md font-bold">
                        Way Kambas National Park
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/assets/hero.jpg"
                    alt="hero"
                    className="h-full w-full rounded-xl object-cover brightness-50"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start p-4 text-white">
                    <h4
                      className={`text-3xl text-[#f3caa0] ${cowboy.className}`}
                    >
                      THE LOST PARADISE
                    </h4>
                    <div className="flex items-center justify-center gap-2">
                      <MdLocationOn color="white" className="text-lg" />
                      <span className="text-md font-bold">Kei Islands</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/assets/hero.jpg"
                    alt="hero"
                    className="h-full w-full rounded-xl object-cover brightness-50"
                  />
                  <div className="absolute bottom-0 flex flex-col items-start p-4 text-white">
                    <h4
                      className={`text-3xl text-[#f3caa0] ${cowboy.className}`}
                    >
                      EDGE OF WONDERS
                    </h4>
                    <div className="flex items-center justify-center gap-2">
                      <MdLocationOn color="white" className="text-lg" />
                      <span className="text-md font-bold">
                        Labuan Bajo Island
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
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
                    <h4
                      className={`text-3xl text-[#f3caa0] ${cowboy.className}`}
                    >
                      FLAVORS OF NATURE
                    </h4>
                    <div className="flex items-center justify-center gap-2">
                      <MdLocationOn color="white" className="text-lg" />
                      <span className="text-md font-bold">Banyuwangi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Slider {...settings} className="block lg:hidden">
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
        <div className="h-full w-full bg-[#3b4b71] px-6 py-24 lg:px-20 lg:py-32">
          <div className=" flex flex-col items-center justify-between lg:flex-row lg:items-end">
            <h1
              className={`text-2xl uppercase text-[#FFCEA0] lg:text-5xl ${cowboy.className} w-full text-center lg:w-[60%] lg:text-left`}
            >
              discover what makes our trips different to elevate your travel
              experience
            </h1>

            <button className="hidden items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-semibold text-[#374B73] lg:flex">
              The Local Escape Difference <FaArrowRight />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-4 lg:mt-20 lg:grid-cols-4 lg:grid-rows-1">
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
                  <h4 className="text-lg font-bold text-[#FFCEA0] lg:text-2xl">
                    {e}
                  </h4>

                  <p className="mt-2 text-xs leading-normal text-white lg:text-base ">
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

          <div className="mt-10 flex w-full items-center justify-center lg:hidden">
            <button className="flex w-[80%] items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-semibold  text-[#374B73] ">
              The Local Escape Difference <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Workspace Section */}
        <div className="h-full w-full bg-[#3b4b71] p-6 pb-24 lg:px-20 lg:pb-32">
          <div className="flex w-full flex-col gap-12 rounded-xl bg-[#334265] p-6 lg:flex-row">
            <div className="h-auto w-auto flex-1 lg:h-[676px] lg:w-[558px]">
              <img
                src="/assets/hero.jpg"
                alt="hero"
                className="h-full w-full rounded-xl border-2 border-white object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col items-start justify-center gap-6">
              <h4
                className={`uppercase text-[#FFCEA0] ${cowboy.className} text-center text-2xl lg:text-left lg:text-5xl`}
              >
                from the workspace to a breathtaking place
              </h4>

              <p className="text-center text-sm font-semibold text-white lg:text-left lg:text-lg">
                Take a much-needed break from the office to bond with your team
                to enchance team cohesion, motivation, and productivity with our
                company trip where we arrange unforgettable experience and
                unmatched services tailored to your preferences.
              </p>

              <p className="text-sm font-semibold text-white lg:text-lg">
                Start Planning Your Company Trip With Us!
              </p>

              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-semibold text-[#374B73] lg:w-fit">
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
        <div className="h-full w-full bg-[#FCF1ED] px-6 py-24 lg:px-20 lg:py-32">
          <div className="flex flex-col gap-12 rounded-xl  lg:flex-row">
            <div className="flex flex-1 flex-col items-center justify-center gap-6 lg:items-start">
              <h4
                className={`uppercase text-[#334265] ${cowboy.className} text-center text-2xl lg:text-left lg:text-5xl`}
              >
                travel as a force for good
              </h4>

              <p className="text-center text-sm font-semibold text-[#334265] lg:text-left lg:text-lg">
                We believe that sustainable and responsible travel has the power
                to drive positive change. That&apos;s why, in every destination,
                we strive to create socially,economically, and environmentally
                impactful travel experiences during your trips-a force for good
                benefiting local communities, wildlife, and the planets
              </p>

              <div className="h-auto w-auto flex-1 lg:hidden">
                <img
                  src="/assets/hero.jpg"
                  alt="hero"
                  className="h-full w-full rounded-xl border-2 border-white object-cover"
                />
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-semibold text-[#374B73] lg:w-fit">
                Our Mission <FaArrowRight />
              </button>
            </div>

            <div className="hidden h-[676px] w-[558px] flex-1 lg:block">
              <img
                src="/assets/hero.jpg"
                alt="hero"
                className="h-full w-full rounded-xl border-2 border-white object-cover"
              />
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="h-full w-full bg-[#FCF1ED] px-6 pb-14 lg:px-20 lg:pb-32">
          <h1
            className={`uppercase ${cowboy.className} text-center text-2xl font-extrabold text-[#334265] lg:text-left lg:text-5xl`}
          >
            follow us on instagram
          </h1>

          <div className="mt-10 grid grid-cols-2 grid-rows-4 gap-2 lg:grid-cols-4 lg:grid-rows-2">
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
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#FF8197] p-2 font-bold text-[#374B73] lg:w-fit">
              <FaInstagram /> Follow Us
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
