import "@styles/main.scss";
import "./NewsCard.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsCard = ({ data }) => {
  const [formattedData, setFormattedData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    formatDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = () => {
    const options = { day: "numeric", month: "short" };
    const formattedDate = new Date(data.published).toLocaleDateString(
      "en-GB",
      options
    );
    const dateArray = formattedDate.split(" ");

    setFormattedData(dateArray);
  };

  return (
    <article
      className="newsCard"
      onClick={() => {
        navigate(`/news/${data.id}`);
        console.log("klickad");
      }}
    >
      <div className="imgWrapper">
        {formattedData && (
          <div className="dateWrapper">
            <p className="date">{formattedData[0]}</p>
            <p className="month">{formattedData[1]}</p>
          </div>
        )}
        <img
          className="img"
          src={data.imageUrl}
          alt="A woman sitting in a classNameroom"
        />
      </div>
      <p className="category">{data.category}</p>
      <h3>{data.title}</h3>
      <p className="txt">{data.content}</p>
    </article>
  );
};

export default NewsCard;
