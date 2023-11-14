//TODO: Lägg in för paginering på News-sidan??
import { useEffect, useState } from "react";
import { useNewsContext } from "../../../hooks/useNews";
import ButtonLink from "@shared/Buttons/ButtonLink";
import ButtonGeneral from "@shared/Buttons/ButtonGeneral";
import NewsCard from "./NewsCard/NewsCard";
import { FaCircle } from "react-icons/fa";
import "@styles/main.scss";
import "./NewsSection.scss";

const NewsSection = ({ displayedNb, heading, background }) => {
  const { news } = useNewsContext();
  const [showAll, setShowAll] = useState(false);
  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  const [activePageNb, setActivePageNb] = useState(0);
  const pages = news.length / displayedNb;

  useEffect(() => {
    setStartIndex(0);
    setEndIndex(displayedNb);
    setActivePageNb(1);
    if (displayedNb === undefined) setShowAll(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedNb]);

  //function: handle the clicks on the prev button
  const handleLeftClick = () => {
    setStartIndex((prev) => prev - 3);
    setEndIndex((prev) => prev - 3);
    setActivePageNb((prev) => prev + -1);
  };

  //function: handle the clicks on the next button
  const handleRightClick = () => {
    setStartIndex((prev) => prev + 3);
    setEndIndex((prev) => prev + 3);
    setActivePageNb((prev) => prev + 1);
  };

  //UI-component: renders the card area
  const RenderNews = () => {
    return (
      <div className="cardWrapper">
        {startIndex !== 0 && (
          <ButtonGeneral
            onClick={handleLeftClick}
            className="button btnRound btnYellow btnAbsoluteLeft"
            iconName="chevronLeft"
          />
        )}
        {news.slice(startIndex, endIndex).map((news) => (
          <NewsCard key={news.id} data={news} />
        ))}
        {endIndex !== news.length && endIndex !== undefined && (
          <ButtonGeneral
            onClick={handleRightClick}
            className="button btnRound btnYellow btnAbsoluteRight"
            iconName="chevronRight"
          />
        )}
      </div>
    );
  };

  //UI-component: renders the page dots
  const RenderDots = () => {
    const dots = [];
    for (let i = 0; i < pages; i++) {
      dots.push(
        <FaCircle
          className={i === activePageNb - 1 ? "fa-circle active" : "fa-circle"}
          key={i}
        />
      );
    }
    return <div className="dotWrapper">{dots}</div>;
  };

  return (
    <section
      className={background ? "newsSection newsSectionBg" : "newsSection"}
    >
      <div className="contentWrapper">
        <div className="headingWrapper">
          <div>
            {!showAll && <p className="sectionHeadingSmall">Article & News</p>}
            <h2 className="sectionHeadingBig">{heading}</h2>
          </div>
          {!showAll && (
            <ButtonLink
              value="Browse Articles"
              to="/news"
              iconName="arrow"
              className="browseLink"
            />
          )}
        </div>
        <RenderNews />
        {!showAll && <RenderDots />}
      </div>
    </section>
  );
};

export default NewsSection;
