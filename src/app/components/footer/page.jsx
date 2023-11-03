import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-col justify-center items-center py-10 space-y-16 px-4 sm:px-12 md:px-20 text-white overflow-x-hidden">
      <div id="footer-container" className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 items-top justify-center max-w-container mt-8 lg:space-x-8">
        <div id="About" className="lg:w-1/2">
          <p className="text-text1 font-semibold">About</p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum
          </p>
        </div>
        <div className="flex flex-row space-x-8 sm:space-x-16 md:space-x-28 lg:space-x-8">
          <div id="home">
            <p className="text-text1 font-semibold">Home</p>
            <ul className="mt-5">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div id="contact">
            <p className="text-text1 font-semibold">Contact</p>
            <ul className="mt-5">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div id="service">
            <p className="text-text1 font-semibold">Service</p>
            <ul className="mt-5">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="bg-style"></div>
    </footer>
  );
};

export default Footer;
