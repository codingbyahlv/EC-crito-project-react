import ButtonLink from "@shared/Buttons/ButtonLink";
import FeatureCard from "./FeatureCard/FeatureCard";
import "@styles/main.scss";
import "@shared/Buttons/Button.scss";
import "./FeaturesSection.scss";

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
        <ButtonLink
          value="Learn More"
          to="*"
          iconName="arrow"
          className="btnYellow learnMoreBtn"
        />
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
