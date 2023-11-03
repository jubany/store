"use client";
import Svg from '../../../public/assets/svg1.svg';
import Logo from '../../../public/assets/logo.svg';
import Logo1 from '../../../public/assets/logo.svg';
import Facebook from '../../../public/assets/Facebook.svg';
import Watsapp from '../../../public/assets/WhatsApp.svg';
import Instagram from '../../../public/assets/Instagram.svg';
import Twitter from '../../../public/assets/Twitter.svg';
import Home2 from '../../../public/assets/home1.svg';
import Image from 'next/image';


import React from "react";

const Home = () => {
  return (
    <div className="relative">
      {/* section 1 */}
      <section id="section1" className="w-full text-white font-sans overflow-x-hidden">
        <div id="svg1" className="relative z-0">
          <Image
            src={Svg} /*"assets/svg1.svg"*/
            alt=""
            className="absolute z-10 top-[-15%] right-[-15%] md:top-[-10%] md:right-[-20%] lg::right-[-10%] lg:top-[20%]"
          />

          {/* nav */}
          <nav className="flex flex-col space-y-20 lg:space-y-0 md:px-20 md:justify-between lg:flex-row lg:space-x-6 max-w-container px-4 sm:px-12 mx-auto mt-8">
            {/* main nav 1 */}
            <div id="main-nav" className="flex flex-row lg:space-x-7 items-center justify-between z-20">
              <Image src={Logo1} alt="" className="w-[70px]" />
              <ul className="hidden md:flex flex-row md:space-x-12 items-center text-mainNav">
                <li className="group">
                  <a href="#" className="group-hover:bg-[rgba(227,3,135,0.3)] duration-200 px-3 py-1 rounded-md ease-in">
                    Home
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="group-hover:bg-[rgba(227,3,135,0.3)] duration-200 px-3 py-1 rounded-md ease-in">
                    About
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="group-hover:bg-[rgba(227,3,135,0.3)] duration-200 px-3 py-1 rounded-md ease-in">
                    Digital
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="group-hover:bg-[rgba(227,3,135,0.3)] duration-200 px-3 py-1 rounded-md ease-in ">
                    Access
                  </a>
                </li>
              </ul>
              <div id="hamburger-menu" className="w-8 space-y-2 flex flex-col md:hidden">
                <div className="w-[32px] h-[4px] bg-white border-b-2 border-white rounded-lg"></div>
                <div className="w-[32px] h-[4px] bg-white border-b-2 border-white rounded-lg"></div>
                <div className="w-[32px] h-[4px] bg-white border-b-2 border-white rounded-lg"></div>
              </div>
            </div>

            {/* main nav 2 */}
            <div id="main-nav2 " className="flex flex-col sm:flex-row lg:flex-row-reverse items-center md:justify-between justify-end z-20">
              <ul className="hidden flex-row space-x-2 md:flex lg:ml-4">
                <li>
                  <Image src={Facebook} alt="" className="w-[30px] sm:w-[28px] hover:scale-110 duration-200 cursor-pointer" />
                </li>
                <li>
                  <Image src={Watsapp} alt="" className="hover:scale-110 duration-200 w-[30px] sm:w-[28px] cursor-pointer" />
                </li>
                <li>
                  <Image src={Twitter} alt="" className="hover:scale-110 duration-200 w-[30px] sm:w-[28px] cursor-pointer" />
                </li>
                <li>
                  <Image src={Instagram} alt="" className="hover:scale-110 duration-200 w-[30px] sm:w-[28px] cursor-pointer" />
                </li>
              </ul>
              <input
                type="text"
                className="w-[100%] sm:w-[200px] py-2 px-1 rounded-xl outline-none text-sm text-white bg-transparent placeholder:pl-2 md:placeholder:pl-28 placeholder:text-white placeholder:text-mainNav border-[1px] border-white"
                placeholder="Search"
              />
            </div>
          </nav>

          {/* hero section */}
          <div id="hero" className="z-30 relative max-w-container mx-auto px-4 sm:px-12 md:px-20 mt-10 md:mt-44">
            <div className="flex flex-col lg:flex-row">
              {/* text */}
              <div>
                <h1 className="font-cursive text-heading2 leading-[50px] md:text-heading1 md:leading-[96px] tracking-[5px]">
                  FUTURE IS NOW
                </h1>
                <p className="text-[30px] sm:text-[40px] md:text-subtitle tracking-[3px] font-medium mt-1">SMART HOME</p>
                <p className="font-medium text-[22px] sm:text-text1 tracking-[1.5px] leading-10 mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
                <button className="btn px-16 py-2 mt-11 text-button">See More</button>
              </div>
              {/* img */}
              <Image src={Home2} alt="" priority={true} className="mt-16 lg:mt-0 lg:w-[500px] lg:ml-24" />
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-row-reverse mt-14 md:mt-52">
              {/* text */}
              <div>
                <h3 className="font-cursive text-[40px] sm:text-heading2 leading-heading2">SMART HOME</h3>
                <p className="text-[30px] sm:text-subtitle2 sm:tracking-[3px]">Security System</p>
                <p className="text-[22px] sm:text-text1 tracking-[1.5px] leading-10 mt-10">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
              {/* img */}
              <Image src={Logo} alt="" className="mt-16 lg:mt-0 lg:w-[500px] lg:mr-24" />
            </div>
          </div>
        </div>
      </section>
              {/* seccion2 */}

<section id="section2" className="font-sans text-white">
      <div id="svg4" className="relative z-0 overflow-x-hidden">
        <img src="/assets/avg4.svg" alt="" className="absolute z-10 hidden lg:block lg:top-[8%]" />
        <img
          src="/assets/svg1.svg"
          alt=""
          className="absolute z-10 hidden md:block md:right-[-30%] md:top-[35%] lg:top-[20%] lg:right-[-20%]"
        />
      </div>

      <div id="hero-3" className="mx-auto max-w-container px-4 sm:px-12 md:px-20 pt-32 z-20 relative">
        <div className="flex flex-col justify-center items-center lg:flex-row-reverse">
          <div className="w-full">
            <h1 className="font-cursive text-heading2 leading-[60px] lg:text-sec2H1 md:leading-heading[96px]">
              SMART HOME
            </h1>
            <p className="text-[22px] sm:text-text1 tracking-[1.5px] leading-10 mt-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>
            <button className="btn px-10 py-1 mt-11 text-button hover:bg-[#a12fb1]">See More</button>
          </div>

          <img src="/assets/home3.svg" alt="" className="mt-16 lg:mt-0 lg:w-[500px] lg:mr-24" />
        </div>

        <div className="space-x-8 flex flex-col justify-center items-center lg:flex-row mt-36 md:mt-52">
          <div className="w-full">
            <h1 className="font-cursive text-[40px] lg:text-heading2 leading-[60px]">
              MONITOR HOME REMOTELY
            </h1>
            <ul className="mt-20 space-y-8 text-[22px]">
              <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
            </ul>
            <div className="service rounded-xl mt-20 py-14">
              <div className="text-center">
                <p className="text-subtitle2 font-semibold leading-3 tracking-widest">Service</p>
                <h1 className="text-[71px] font-semibold tracking-widest">12345</h1>
              </div>
              <div className="mt-8 text-center">
                <p className="text-text1 font-thin uppercase tracking-widest">Download available on</p>
                <div className="flex flex-col space-y-4 sm:flex-row items-center justify-center sm:space-x-8 sm:space-y-0 mt-4">
                  <button className="btn rounded-none px-14 py-2 max-w-[177px]">Android</button>
                  <button className="btn rounded-none px-14 py-2 max-w-[177px]">Windows</button>
                </div>
              </div>
            </div>
          </div>

          <img src="/assets/Smartphone.svg" alt="" className="hidden lg:flex lg:mt-0 lg:w-[450px] lg:mr-24" />
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row-reverse mt-36 md:mt-52">
          <div className="w-full">
            <h1 className="font-cursive text-[40px] leading-[60px] lg:text-heading2 md:leading-heading[96px]">
              ABOUT US
            </h1>
            <p className="text-[22px] sm:text-text1 tracking-[1.5px] leading-10 mt-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>
            <ul className="flex flex-col justify-center space-y-3 mt-12">
              <li className="space-x-4 flex flex-row">
                <img src="/assets/Phone Icon.svg" alt="" />
                <p className="text-text1">+01 24 5678 91011</p>
              </li>
              <li className="space-x-4 flex flex-row">
                <img src="/assets/Email Icon.svg" alt="" />
                <p className="text-text1">work@myemail.com</p>
              </li>
              <li className="space-x-6 flex flex-row">
                <img src="/assets/Address Icon.svg" alt="" />
                <p className="text-text1">Your Address Here</p>
              </li>
            </ul>
          </div>

          <img src="/assets/home4.svg" alt="" className="mt-16 lg:mt-0 lg:w-[500px] lg:mr-24" />
        </div>
      </div>

      <div className="relative z-0">
        <img src="/assets/svg2.svg" alt="" className="absolute z-10 lg:hidden" />
        <img src="/assets/svg3.svg" alt="" className="absolute z-10 top-[17%] right-0 lg:hidden" />
        <div id="tech-container" className="flex flex-col justify-center items-center mt-28 py-10 px-4 sm:px-12 md:px-20 relative z-20">
          <p className="text-subtitle2 text-center">Check what your house can do for you</p>
          <div id="tech" className="flex flex-col space-y-5 lg:flex-row lg::space-y-0 items-end max-w-container mt-12">
            <img
              src="/assets/tech1.svg"
              alt=""
              className="w-full lg:max-w-[300px] lg:hover:scale-125 hover:scale-110 duration-100"
            />
            <img
              src="/assets/tech2.svg"
              alt=""
              className="w-full lg:max-w-[300px] lg:hover:scale-125 hover:scale-110 duration-100"
            />
            <img
              src="/assets/tech3.svg"
              alt=""
              className="w-full lg:max-w-[300px] lg:hover:scale-125 hover:scale-110 duration-100"
            />
          </div>
        </div>
      </div>
    </section>
    </div>

  );
};

export default Home;
