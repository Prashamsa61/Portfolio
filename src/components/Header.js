import React from "react";

const Header = () => {
  return (
    <header className="  py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/services">
            <button className="text-2xl italic underline ">
              Tech Enthusiast
            </button>
          </a>
          <a href="/work">
            <button className="btn btn-sm">Work With Me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
