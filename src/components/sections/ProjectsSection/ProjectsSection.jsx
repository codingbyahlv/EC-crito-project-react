import ButtonLink from "@shared/Buttons/ButtonLink";
import ProjectCard from "./ProjectCard/ProjectCard";
import project1 from "../../../assets/images/img_project1.jpg";
import project2 from "../../../assets/images/img_project2.jpg";
import project3 from "../../../assets/images/img_project3.jpg";
import project4 from "../../../assets/images/img_project4.jpg";
import "@styles/main.scss";
import "./ProjectsSection.scss";

const ProjectsSection = () => {
  const data = [
    {
      img: project1,
      alt: "Man reading Business magazine",
      heading: "Grow your business",
    },
    {
      img: project2,
      alt: "Close up of an ipad and smartwatch",
      heading: "Why your client need a responsive website",
    },
    {
      img: project3,
      alt: "Close up of a notepad and pen",
      heading: "Educate your employees to get better results",
    },
    {
      img: project4,
      alt: "Close up of a computer",
      heading: "Business Insights is a important piece of your business",
    },
  ];
  return (
    <section className="projectsSection">
      <div className="contentWrapper">
        <p className="sectionHeadingSmall">Project & Case Studies</p>
        <h2 className="sectionHeadingBig">Let’s Looks Our Global Projects</h2>
        <div className="projectsWrapper">
          {data.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
        <ButtonLink
          value="All recent projects"
          to="*"
          iconName="arrow"
          className="btnBlack"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
