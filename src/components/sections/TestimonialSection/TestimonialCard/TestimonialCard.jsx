import { FaStar } from "react-icons/fa";
import "@styles/main.scss";
import "./TestimonialCard.scss";

const TestimonialCard = ({ data }) => {
  return (
    <article className="testimonialCard">
      <div className="starWrapper">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="reviewTxt">
        &quot; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe
        nesciunt nemo eligendi numquam voluptate &quot;
      </p>
      <div className="infoWrapper">
        <img src={data.img} className="img" alt={data.alt} />
        <div className="txtWrapper">
          <h4 className="heading">{data.name}</h4>
          <p className="txt">{data.title}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
