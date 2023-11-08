import IconRenderer from "@shared/IconRenderer/IconRenderer";
import "@styles/main.scss";
import "./WhyUsCard.scss";

const WhyUsCard = ({ data }) => {
  const { icon, heading, text } = data;
  return (
    <article className="whyUsCard">
      <div className="whyUsIcon">
        <IconRenderer iconName={icon} className="" />
      </div>
      <div className="txtWrapper">
        <h3 className="heading">{heading}</h3>
        <p className="txt">{text}</p>
      </div>
    </article>
  );
};

export default WhyUsCard;
