import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";


const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[75px] backdrop-blur-2xl
          rounded-full max-w-[460px] mx-auto px-6 flex justify-center 
          items-center text-2xl text-white gap-8"
        >
          <a
            href="#home"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </a>
          <a
            href="#about"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </a>
          <a
            href="#services"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </a>
          <a
            href="#work"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </a>
          <a
            href="#contact"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
