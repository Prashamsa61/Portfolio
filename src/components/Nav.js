import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-router-dom";

// Array of navigation links with 'to' (target section) and 'icon' (link icon) properties
const navLinks = [
  { to: "/", icon: <BiHomeAlt /> },
  { to: "/about", icon: <BiUser /> },
  { to: "/services", icon: <BsClipboardData /> },
  { to: "/work", icon: <BsBriefcase /> },
  { to: "/contact", icon: <BsChatSquareText /> },
];

// Functional component called 'Nav' that will render the navigation bar
const Nav = () => {
  // Height of the fixed navigation bar
  const navbarHeight = 75;

  return (
    // Navigation bar component
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* Center the content horizontally */}
        <div
          className="w-full bg-black/20 h-[75px] backdrop-blur-2xl
         rounded-full max-w-[460px] mx-auto px-6 flex justify-center 
         items-center text-2xl text-white gap-8"
        >
          {/* Map over the 'navLinks' array to create navigation links */}
          {navLinks.map((link, index) => (
            <Link
              key={index} // React requires a unique key prop for each element when rendering a list of components. 'index' is used as the key here.
              to={link.to} // 'to' is the prop that specifies the target section for scrolling
              smooth={true}
              offset={-navbarHeight} // Offset to adjust scroll position for the fixed navigation bar
              activeClass="active" // CSS class applied to the active link
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" // CSS classes for styling the link
            >
              {link.icon} {/* Render the link icon */}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
