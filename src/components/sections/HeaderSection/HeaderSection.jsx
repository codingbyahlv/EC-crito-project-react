import { NavLink } from "react-router-dom";
import ContactWays from "../../shared/ContactWays/ContactWays";
import SocialMedia from "../../shared/SocialMedia/SocialMedia";
import "../../../assets/styles/main.scss";
import "./HeaderSection.scss";
import logo from "../../../assets/images/logo_crito_black.png";
import { GoArrowUpRight } from "react-icons/go";
import "../../shared/Button/Button.scss";

const HeaderSection = () => {
  return (
    <header className="headerWrapper">
      <div className="contentWrapper">
        <NavLink to="/" className="imgWrapper">
          <img className="img" src={logo} alt="Crito logotype" />
        </NavLink>
        <div className="txtWrapper">
          <div className="topWrapper">
            <ContactWays />
            <SocialMedia />
          </div>
          <div className="bottomWrapper">
            <nav className="navigationWrapper">
              <NavLink to="/" className="link">
                Home
              </NavLink>
              <NavLink to="/service" className="link">
                Service
              </NavLink>
              <NavLink to="/news" className="link">
                News
              </NavLink>
              <NavLink to="/contact" className="link">
                Contact
              </NavLink>
            </nav>
            <NavLink to="/" className="button btnYellow loginBtn">
              Login <GoArrowUpRight />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
