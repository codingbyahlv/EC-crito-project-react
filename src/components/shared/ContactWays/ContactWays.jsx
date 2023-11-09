//TODO:Fortsätt med stylingen av DisplayContactPage
import IconRenderer from "../IconRenderer/IconRenderer";
import "@styles/main.scss";
import "./ContactWays.scss";

const ContactWays = ({ page }) => {
  const headerData = [
    {
      icon: "phone",
      infoRow: "+46 (8) 121 470 50",
    },
    { icon: "envelope", infoRow: "info@crito.com" },
    {
      icon: "location",
      infoRow: "Sveavägen 31, 111 34 STOCKHOLM",
    },
  ];
  const contactData = [
    {
      icon: "phone",
      infoRow1: "+46 (8) 121 470 50",
      infoRow2: "+46 (8) 121 470 51",
    },
    {
      icon: "envelope",
      infoRow1: "info@crito.com",
      infoRow2: "support@crito.com",
    },
    {
      icon: "location",
      infoRow1: "Sveavägen 31",
      infoRow2: "111 34 STOCKHOLM",
    },
  ];

  const DisplayInHeader = () => {
    return (
      <>
        {headerData.map((contactWay, index) => (
          <article className="infoWrapper" key={index}>
            <IconRenderer className="headerIcon" iconName={contactWay.icon} />
            <p className="info">{contactWay.infoRow}</p>
          </article>
        ))}
      </>
    );
  };

  const DisplayInContactPage = () => {
    return (
      <>
        {contactData.map((contactWay, index) => (
          <article className="infoWrapper" key={index}>
            <IconRenderer className="headerIcon" iconName={contactWay.icon} />
            <p className="info">{contactWay.infoRow1}</p>
            <p className="info">{contactWay.infoRow2}</p>
          </article>
        ))}
      </>
    );
  };

  return (
    <div className="contactWaysWrapper">
      {page === "header" && <DisplayInHeader />}
      {page === "contact" && <DisplayInContactPage />}
    </div>
  );
};

export default ContactWays;
