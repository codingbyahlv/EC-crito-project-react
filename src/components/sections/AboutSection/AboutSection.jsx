import whiteLines from "@images/bg_white_lines.png";
import aboutImg from "@images/img_about.jpg";
import ButtonLink from "@shared/Buttons/ButtonLink";
import { FaPlay } from "react-icons/fa";
import "@styles/main.scss";
import "@shared/Buttons/Button.scss";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className="contentWrapper">
        <div className="txtWrapper">
          <p className="sectionHeadingSmall">About company</p>
          <h2 className="sectionHeadingBig">
            We are Business Consulting & Credit Repair Experts
          </h2>
          <div className="pWrapper">
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              officiis quas assumenda esse obcaecati? Ex esse error voluptates
              iure vel totam eos.
            </p>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              esse quasi incidunt adipisci accusantium libero provident
              voluptate amet.
            </p>
          </div>
          <div className="btnWrapper">
            <ButtonLink value="Learn More" to="/" className="btnBlack" />
            <div className="playBtnWrapper">
              <button className="button btnWhite playBtn btnRound">
                <FaPlay className="icon" />
              </button>
              <p>Intro video</p>
            </div>
          </div>
        </div>
        <div className="imgWrapper">
          <img src={whiteLines} alt="" className="linesOverlay" />
          <img
            src={aboutImg}
            alt="Woman walking in the corridor at work"
            className="img"
          />
          <div className="imgTxtWrapper">
            <h3 className="imgHeading">
              Samantha Brown, <span>Founder</span>
            </h3>
            <p className="imgTxt">
              &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              &quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
