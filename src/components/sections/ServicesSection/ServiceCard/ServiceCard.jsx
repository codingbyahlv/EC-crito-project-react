import ButtonLink from "@shared/Buttons/ButtonLink";
import { GoHorizontalRule } from "react-icons/go";
import "@styles/main.scss";
import "./ServiceCard.scss";

const ServiceCard = ({ heading }) => {
  return (
    <article className="card">
      <GoHorizontalRule className="icon" />
      <h3 className="heading">{heading}</h3>
      <p className="txt">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in
        nam possimus.
      </p>
      <ButtonLink iconName="arrowRight" to="/" className="btnBlack btnRound" />
    </article>
  );
};

export default ServiceCard;
