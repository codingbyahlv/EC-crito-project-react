import IconRenderer from "@shared/IconRenderer/IconRenderer";
import "@styles/main.scss";
import "./FeatureCard.scss";

const FeatureCard = ({ feature }) => {
  return (
    <article className="cardWrapper">
      <IconRenderer className="featureIcon" iconName={feature.icon} />
      <h3 className="heading">{feature.heading}</h3>
      <p className="txt">{feature.txt}</p>
    </article>
  );
};

export default FeatureCard;
