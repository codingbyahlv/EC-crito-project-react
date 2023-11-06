import "../../../assets/styles/main.scss";
import IconRenderer from "../IconRenderer/IconRenderer";
import "./ContactWays.scss";

const ContactWays = () => {
  const headerData = [
    { icon: "phone", infoRow1: "+46 (8) 121 470 50" },
    { icon: "envelope", infoRow1: "info@crito.com" },
    { icon: "location", infoRow1: "Sveavägen 31, 111 34 STOCKHOLM" },
  ];

  return (
    <div className="contactWaysWrapper">
      {headerData.map((contactWay, index) => (
        <article className="infoWrapper" key={index}>
          <IconRenderer className="headerIcon" iconName={contactWay.icon} />
          <p className="info">{contactWay.infoRow1}</p>
        </article>
      ))}
    </div>
  );
};

export default ContactWays;
