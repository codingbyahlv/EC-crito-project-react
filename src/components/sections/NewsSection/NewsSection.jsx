import { useState, useEffect } from "react";
import ButtonLink from "@shared/Buttons/ButtonLink";
import ButtonGeneral from "@shared/Buttons/ButtonGeneral";
import NewsCard from "./NewsCard/NewsCard";
import { getAllNews as NewsAPI_getAllNews } from "../../../services/NewsAPI";
import { FaCircle } from "react-icons/fa";
import "@styles/main.scss";
import "./NewsSection.scss";

const NewsSection = ({ displayedNb, heading, background }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const respData = await NewsAPI_getAllNews();
      setNews(respData);
    } catch (error) {
      alert("Oh shit! Something wrong!");
    }
  };

  const RenderNews = () => {
    return (
      <div className="cardWrapper">
        {news.slice(0, displayedNb).map((news) => (
          <NewsCard key={news.id} data={news} />
        ))}
      </div>
    );
  };

  return (
    <section
      className={background ? "newsSection newsSectionBg" : "newsSection"}
    >
      <div className="contentWrapper">
        <div className="headingWrapper">
          <div>
            {displayedNb !== undefined && (
              <p className="sectionHeadingSmall">Article & News</p>
            )}
            <h2 className="sectionHeadingBig">{heading}</h2>
          </div>
          {displayedNb !== undefined && (
            <ButtonLink
              value="Browse Articles"
              to="/news"
              iconName="arrow"
              className="browseLink"
            />
          )}
        </div>
        <RenderNews />
        {displayedNb !== undefined && (
          <div className="dotWrapper">
            <FaCircle className="fa-circle" />
            <FaCircle className="fa-circle active" />
            <FaCircle className="fa-circle" />
            <FaCircle className="fa-circle" />
            <FaCircle className="fa-circle" />
          </div>
        )}
        {displayedNb !== undefined && (
          <ButtonGeneral
            value="Show more"
            className="btnBlack showMoreBtn"
            iconName=""
          />
        )}
      </div>
    </section>
  );
};

export default NewsSection;
//TODO: Lägg in för paginering på News-sidan
