import { NavLink } from "react-router-dom";
import "../../../assets/styles/main.scss";
import "../../shared/Button/Button.scss";
import "./FeaturesSection.scss";
import FeatureCard from "./FeatureCard/FeatureCard";
import { GoArrowUpRight } from "react-icons/go";

const FeaturesSection = () => {
  const data = [
    {
      icon: "handshake",
      heading: "Business Advice",
      txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "lightbulb",
      heading: "Startup Business",
      txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "finance",
      heading: "Financial Advice",
      txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "cube",
      heading: "Risk Management",
      txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="featuresSection">
      <div className="txtWrapper">
        <p className="sectionHeadingSmall">Features</p>
        <h2 className="sectionHeadingBig">
          Our Accounting is trusted by thousand of companies
        </h2>
        <NavLink to="/" className="button btnYellow learnMoreBtn">
          Learn More <GoArrowUpRight />
        </NavLink>
      </div>
      <div className="featureWrapper">
        {data.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
