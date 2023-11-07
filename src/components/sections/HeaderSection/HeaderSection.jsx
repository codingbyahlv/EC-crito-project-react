import { NavLink } from "react-router-dom";
import logo from "@images/logo_crito_black.png";
import ButtonLink from "@shared/Buttons/ButtonLink";
import ContactWays from "@shared/ContactWays/ContactWays";
import SocialMedia from "@shared/SocialMedia/SocialMedia";
import "@styles/main.scss";
import "@shared/Buttons/Button.scss";
import "./HeaderSection.scss";

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
            <ButtonLink
              value="Login"
              to="/"
              iconName="arrow"
              className="btnYellow loginBtn"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
