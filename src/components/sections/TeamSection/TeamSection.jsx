import TeamCard from "./TeamCard/TeamCard";
import ButtonLink from "@shared/Buttons/ButtonLink";
import ButtonGeneral from "@shared/Buttons/ButtonGeneral";
import teamMember1 from "@images/img_team1.jpg";
import teamMember2 from "@images/img_team2.jpg";
import teamMember3 from "@images/img_team3.jpg";
import teamMember4 from "@images/img_team4.jpg";
import { FaCircle } from "react-icons/fa";
import "@styles/main.scss";
import "./TeamSection.scss";

const TeamSection = () => {
  const data = [
    {
      img: teamMember1,
      alt: "Portrait of Kristine Palmer",
      heading: "Kristine Palmer",
      title: "Chef Operation Officer",
    },
    {
      img: teamMember2,
      alt: "Portrait of Mark Aubri",
      heading: "Mark Aubri",
      title: "Senior Consultant",
    },
    {
      img: teamMember3,
      alt: "Portrait of Kimerbly Hansen sitting in the window",
      heading: "Kimberly Hansen",
      title: "Senior Consultant",
    },
    {
      img: teamMember4,
      alt: "Portrait of Justin Willoman",
      heading: "Justin Willoman",
      title: "Senior Tech Consultant",
    },
  ];

  return (
    <section className="teamSection">
      <div className="contentWrapper">
        <div className="topWrapper">
          <div>
            <p className="sectionHeadingSmall">Meet Out Team</p>
            <h2 className="sectionHeadingBig">Experience Team Members</h2>
          </div>
          <ButtonLink
            value="Browse Team"
            className="btn"
            iconName="arrow"
            to="/"
          />
        </div>
        <div className="cardWrapper">
          {data.map((member, index) => (
            <TeamCard key={index} data={member} />
          ))}
        </div>
        <div className="dotWrapper">
          <FaCircle className="fa-circle" />
          <FaCircle className="fa-circle active" />
          <FaCircle className="fa-circle" />
          <FaCircle className="fa-circle" />
          <FaCircle className="fa-circle" />
        </div>
        <ButtonGeneral
          value="Show more"
          className="btnBlack showMoreBtn"
          iconName=""
        />
      </div>
    </section>
  );
};

export default TeamSection;
