import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import "@styles/main.scss";
import "./SocialMedia.scss";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="socialMediaIconsWrapper">
      <Link className="link">
        <BsFacebook />
      </Link>
      <Link className="link">
        <FaXTwitter />
      </Link>
      <Link className="link">
        <BsInstagram />
      </Link>
      <Link className="link">
        <BsLinkedin />
      </Link>
    </div>
  );
};

export default SocialMedia;
