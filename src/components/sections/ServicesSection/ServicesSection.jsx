import ButtonLink from "@shared/Buttons/ButtonLink";
import ServiceCard from "./ServiceCard/ServiceCard";
import "@styles/main.scss";
import "./ServicesSection.scss";

const ServicesSection = () => {
  const data = [
    "Business Advice",
    "Startup Business",
    "Financial Advice",
    "Risk Management",
  ];

  return (
    <section className="servicesSection">
      <div className="contentWrapper">
        <p className="sectionHeadingSmall">Our services</p>
        <h2 className="sectionHeadingBig heading">
          We Provide The Best Service For Consulting
        </h2>
        <div className="serviceCardWrapper">
          {data.map((heading, index) => (
            <ServiceCard key={index} heading={heading} />
          ))}
        </div>
        <ButtonLink
          iconName="arrow"
          to="/"
          className=""
          value="Browse Services"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
