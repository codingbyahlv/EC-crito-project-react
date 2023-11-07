import image from "@images/img_hero.png";
import ButtonLink from "@shared/Buttons/ButtonLink";
import "@styles/main.scss";
import "@shared/Buttons/Button.scss";
import "./HeroSection.scss";

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
            <ButtonLink
              value="Get Consulting"
              to="/"
              iconName="arrow"
              className="btnYellow"
            />
            <ButtonLink
              value="Learn More"
              to="/"
              iconName="arrow"
              className=""
            />
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
