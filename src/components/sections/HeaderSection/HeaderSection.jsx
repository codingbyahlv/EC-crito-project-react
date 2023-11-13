import { NavLink } from "react-router-dom";
import logo from "@images/logo_crito_black.png";
import ButtonLink from "@shared/Buttons/ButtonLink";
import ContactWays from "@shared/ContactWays/ContactWays";
import SocialMedia from "@shared/SocialMedia/SocialMedia";
import "@styles/main.scss";
import "@shared/Buttons/Button.scss";
import "./HeaderSection.scss";
import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MobileMenu = () => {
    return (
      <div className="mobileMenu">
        <nav className="navigationWrapper">
          <NavLink to="/" className="link" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/service" className="link" onClick={toggleMenu}>
            Service
          </NavLink>
          <NavLink to="/news" className="link" onClick={toggleMenu}>
            News
          </NavLink>
          <NavLink to="/contact" className="link" onClick={toggleMenu}>
            Contact
          </NavLink>
          <ButtonLink
            value="Login"
            to="/login"
            iconName="arrow"
            className="btnYellow loginBtn mobileLoginBtn"
            onClick={toggleMenu}
          />
        </nav>
      </div>
    );
  };

  return (
    <header className="headerWrapper">
      <div className="contentWrapper">
        <NavLink to="/" className="imgWrapper">
          <img className="img" src={logo} alt="Crito logotype" />
        </NavLink>
        <div className="txtWrapper">
          <div className="topWrapper">
            <ContactWays page="header" />
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
              to="/login"
              iconName="arrow"
              className="btnYellow loginBtn"
            />
          </div>
        </div>
        {isOpen && <MobileMenu />}
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={toggleMenu}
          width={40}
          height={25}
          strokeWidth={3}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
          className="hamburger"
        />
      </div>
    </header>
  );
};

export default HeaderSection;
