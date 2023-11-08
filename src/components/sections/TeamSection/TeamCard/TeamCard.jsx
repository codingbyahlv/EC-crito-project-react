import "@styles/main.scss";
import "./TeamCard.scss";

const TeamCard = ({ data }) => {
  return (
    <article className="teamCard">
      <img src={data.img} alt={data.alt} />
      <h3>{data.heading}</h3>
      <p>{data.title}</p>
    </article>
  );
};

export default TeamCard;
