import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import "../../../assets/styles/main.scss";
import "./SocialMedia.scss";

// import React from "react";

const SocialMedia = () => {
  return (
    <div className="socialMediaIconsWrapper">
      <BsFacebook />
      <FaXTwitter />
      <BsInstagram />
      <BsLinkedin />
    </div>
  );
};

export default SocialMedia;
