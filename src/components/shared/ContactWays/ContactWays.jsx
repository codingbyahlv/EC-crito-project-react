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
      heading: "Visit us",
      infoRow1: "+46 (8) 121 470 50",
      infoRow2: "+46 (8) 121 470 51",
    },
    {
      icon: "envelope",
      heading: "Call us",
      infoRow1: "info@crito.com",
      infoRow2: "support@crito.com",
    },
    {
      icon: "location",
      heading: "Email us",
      infoRow1: "Sveavägen 31",
      infoRow2: "111 34 STOCKHOLM",
    },
  ];

  //UI-component: render the UI when the component is displayed om the header
  const DisplayInHeader = () => {
    return (
      <div className="contactWaysHeader">
        {headerData.map((contactWay, index) => (
          <article className="infoWrapper" key={index}>
            <IconRenderer className="headerIcon" iconName={contactWay.icon} />
            <p className="info">{contactWay.infoRow}</p>
          </article>
        ))}
      </div>
    );
  };

  //UI-component: render the UI when the component is displayed om the contact page
  const DisplayInContactPage = () => {
    return (
      <div className="contactWaysPage">
        {contactData.map((contactWay, index) => (
          <article className="infoWrapper" key={index}>
            <div className="iconWrapper">
              <IconRenderer className="pageIcon" iconName={contactWay.icon} />
            </div>
            <div className="txtWrapper">
              <h3 className="heading">{contactWay.heading}</h3>
              <p className="info">{contactWay.infoRow1}</p>
              <p className="info">{contactWay.infoRow2}</p>
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <>
      {page === "header" && <DisplayInHeader />}
      {page === "contact" && <DisplayInContactPage />}
    </>
  );
};

export default ContactWays;
