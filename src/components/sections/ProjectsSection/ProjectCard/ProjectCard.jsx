import "@styles/main.scss";
import "./ProjectCard.scss";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <article className="projectCard">
      <img className="img" src={data.img} alt={data.alt} />
      <h3 className="heading">{data.heading}</h3>
      <NavLink className="link" to="/">
        <span>Read More</span>
        <GoArrowUpRight className="link" />
      </NavLink>
    </article>
  );
};

export default ProjectCard;
