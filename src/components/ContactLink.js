import React from "react";

const ContactLink = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "#contact";
  };
  return (
    <a
      href="#contact"
      className="btn btn-lg flex items-center mx-7"
      onClick={handleContactClick}
    >
      Contact me
    </a>
  );
};

export default ContactLink;
