import ButtonLink from "@shared/Buttons/ButtonLink";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import img_testimonials1 from "@images/img_testimonials1.jpg";
import img_testimonials2 from "@images/img_testimonials2.jpg";
import img_testimonials3 from "@images/img_testimonials3.jpg";
import "@styles/main.scss";
import "./TestimonialSection.scss";

const TestimonialSection = () => {
  const data = [
    {
      name: "Cassandra Warren",
      title: "Business Manager, Dorfus",
      img: img_testimonials1,
      alt: "Portrait of Cassandra Warren",
    },
    {
      name: "Amanda Tulling",
      title: "Senior Developer, Square",
      img: img_testimonials2,
      alt: "Portrait of Amanda Tulling",
    },
    {
      name: "Jack McDogglas",
      title: "Key Account Manager, Gobona",
      img: img_testimonials3,
      alt: "Portrait of Jack McDogglas",
    },
  ];

  return (
    <section className="testimonialSection">
      <div className="background">
        <div className="contentWrapper">
          <p className="sectionHeadingSmall">Testimonial</p>
          <h2 className="sectionHeadingBig">What Our Client Says</h2>
          <div className="cardWrapper">
            {data.map((person, index) => (
              <TestimonialCard key={index} data={person} />
            ))}
            <div className="btnWrapper">
              <ButtonLink
                value="All reviews"
                to="*"
                iconName="arrow"
                className="btnBlack"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
