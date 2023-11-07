import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import "@styles/main.scss";
import "./SocialMedia.scss";

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
