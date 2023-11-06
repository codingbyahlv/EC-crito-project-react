import IconRenderer from "../../../shared/IconRenderer/IconRenderer";
import "../../../../assets/styles/main.scss";
import "./FeatureCard.scss";
import PropTypes from "prop-types";

const FeatureCard = ({ feature }) => {
  return (
    <article className="cardWrapper">
      <IconRenderer className="featureIcon" iconName={feature.icon} />
      <h3 className="heading">{feature.heading}</h3>
      <p className="txt">{feature.txt}</p>
    </article>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.object,
};

export default FeatureCard;
