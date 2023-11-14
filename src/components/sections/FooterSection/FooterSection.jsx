import { Link } from "react-router-dom";
import logo from "@images/logo_crito_white.png";
import SocialMedia from "@shared/SocialMedia/SocialMedia";
import "@styles/main.scss";
import "./FooterSection.scss";

const FooterSection = () => {
  const data = [
    {
      heading: "Company",
      links: [
        { url: "*", name: "About" },
        { url: "*", name: "Features" },
        { url: "*", name: "Works" },
        { url: "*", name: "Career" },
      ],
    },
    {
      heading: "Help",
      links: [
        { url: "*", name: "Customer Support" },
        { url: "*", name: "Delivery Details" },
        { url: "*", name: "Terms & Conditions" },
        { url: "*", name: "Privacy Policy" },
      ],
    },
    {
      heading: "Resourses",
      links: [
        { url: "*", name: "Free eBooks" },
        { url: "*", name: "Development Tutorial" },
        { url: "*", name: "How to - Blog" },
        { url: "*", name: "Youtube Playlist" },
      ],
    },
    {
      heading: "Link",
      links: [
        { url: "*", name: "Free eBooks" },
        { url: "*", name: "Development Tutorial" },
        { url: "*", name: "How to - Blog" },
        { url: "*", name: "Youtube Playlist" },
      ],
    },
  ];

  //UI-component: renders the groups of information
  const InfoGroup = ({ group }) => {
    return (
      <article className="linkGroup">
        <h4 className="heading">{group.heading}</h4>
        {group.links.map((link, index) => (
          <Link key={index} to={link.url} className="link">
            {link.name}
          </Link>
        ))}
      </article>
    );
  };

  return (
    <footer className="footerSection">
      <div className="background">
        <div className="contentWrapper">
          <article className="logoInfoWrapper">
            <img src={logo} alt="Crito logotype" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              obcaecati voluptas voluptates! Voluptates laborum nam ratione
              minus necessitatibus, iure praesentium.
            </p>
          </article>
          <div className="cardWrapper">
            {data.map((group, index) => (
              <InfoGroup key={index} group={group} />
            ))}
          </div>
        </div>
      </div>
      <section className="copyright">
        <div className="copyrightContentWrapper">
          <p className="copyTxt">
            © 2023 Crito - Consulting Company Inc. All Rights Reserved.
          </p>
          <SocialMedia />
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
