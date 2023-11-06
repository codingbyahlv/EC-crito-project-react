import "../../../assets/styles/main.scss";
import "./HeroSection.scss";
import "../../shared/Button/Button.scss";
import image from "../../../assets/images/img_hero.png";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="contentWrapper">
        <div className="txtWrapper">
          <h1 className="heading">We provide The Best business solutions</h1>
          <p className="subTxt">
            Establish your vision and value proposition and turn them into
            testable prototypes.
          </p>
          <div className="btnWrapper">
            <NavLink to="/" className="button btnYellow link">
              Get Consulting <GoArrowUpRight />
            </NavLink>
            <NavLink to="/" className="button link">
              Learn More <GoArrowUpRight />
            </NavLink>
          </div>
        </div>
        <div className="imgWrapper">
          <img className="img" src={image} alt="Man looking on an ipad" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
