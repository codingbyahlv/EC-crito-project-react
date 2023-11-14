import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import "@styles/main.scss";
import "./SocialMedia.scss";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="socialMediaIconsWrapper">
      <Link className="link" to="https://facebook.com" target="_blank">
        <BsFacebook />
      </Link>
      <Link className="link" to="https://twitter.com" target="_blank">
        <FaXTwitter />
      </Link>
      <Link className="link" to="https://instagram.com" target="_blank">
        <BsInstagram />
      </Link>
      <Link className="link" to="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </Link>
    </div>
  );
};

export default SocialMedia;
