import image from "@images/img_choose_us.jpg";
import WhyUsCard from "./WhyUsCard/WhyUsCard";
import "@styles/main.scss";
import "./WhyUsSection.scss";

const WhyUsSection = () => {
  const data = [
    {
      icon: "thumb",
      heading: "Process Excellence",
      text: "Lorem, ipsum dolor sit amet consectetur.",
    },
    {
      icon: "stategi",
      heading: "Strategic Planning",
      text: "Lorem, ipsum dolor sit amet consectetur.",
    },
    {
      icon: "design",
      heading: "Experience Design",
      text: "Lorem, ipsum dolor sit amet consectetur.",
    },
    {
      icon: "ai",
      heading: "Artificial Interligence",
      text: "Lorem, ipsum dolor sit amet consectetur.",
    },
  ];
  return (
    <section className="whyUsSection">
      <div className="leftWrapper">
        <div className="leftContent">
          <div>
            <p className="sectionHeadingSmall">Why Choose Us</p>
            <h2 className="sectionHeadingBig">
              Why We Are The Best Business Consulting Agency
            </h2>
          </div>
          <div className="articleWrapper">
            {data.map((group, index) => (
              <WhyUsCard key={index} data={group} />
            ))}
          </div>
        </div>
      </div>
      <div className="rightWrapper">
        <div className="rightContent">
          <img
            src={image}
            className="img"
            alt="Two women sitting and discussing"
          />
        </div>
        <div className="background"></div>
      </div>
    </section>
  );
};

export default WhyUsSection;
