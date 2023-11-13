//TODO: Gör Recent Posts
//TODO: Gör Categories
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputField from "@shared/Inputs/InputField";
import NewsSection from "@sections/NewsSection/NewsSection";
import PageHeading from "@shared/PageHeading/PageHeading";
import { getNews as NewsAPI_getNews } from "../../services/NewsAPI";
import { BsFillCircleFill } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";
import "@styles/main.scss";
import "./NewsDetails.scss";

const NewsDetails = () => {
  const [news, setNews] = useState();
  const [formattedDate, setFormattedDate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getNews = async () => {
    try {
      const respData = await NewsAPI_getNews(id);
      setNews(respData);
      formatDate(respData.published);
    } catch (error) {
      alert("Oh shit! Something wrong!");
    }
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
    const dateArray = formattedDate.split(" ");

    setFormattedDate(dateArray);
    setIsLoading(false);
  };

  return (
    <main className="pageWrapper">
      <PageHeading heading="News & Articles" to="news" active="News" />
      {isLoading ? (
        <></>
      ) : (
        <div className="contentWrapper">
          <div className="topWrapper">
            <h2 className="sectionHeadingBig heading">{news.title}</h2>
            <div className="detailsWrapper">
              <p>
                {formattedDate[1]} {formattedDate[0]}, {formattedDate[2]}
              </p>
              <BsFillCircleFill className="dot" />
              <p>{news.category}</p>
              <BsFillCircleFill className="dot" />
              <p>{news.author}</p>
            </div>
          </div>

          <div className="bottomWrapper">
            {!isLoading && (
              <div className="leftWrapper">
                <div className="imgWrapper">
                  <img src={news.imageUrl} alt="" className="img" />
                </div>
                <p className="txt">{news.content}</p>
              </div>
            )}
            <div className="rightWrapper">
              <InputField
                className="searchInput"
                placeholder="Type to search.."
              />

              <div className="recentWrapper">
                <h3 className="subHeading">Recent Posts</h3>
                <GoHorizontalRule className="ruleIcon" />
                <div className="recCardWrapper">
                  <article className="recCard">
                    <h4 className="title">Titel</h4>
                    <p className="date">datum</p>
                  </article>
                  <article className="recCard">
                    <h4 className="title">Titel</h4>
                    <p className="date">datum</p>
                  </article>
                </div>
              </div>

              <div className="categoriesWrapper">
                <h3 className="subHeading">Categories</h3>
                <GoHorizontalRule className="ruleIcon" />
                <div className="catWrapper">
                  <h4 className="category">
                    Kategori - <span className="span"> 20 Posts</span>
                  </h4>
                  <h4 className="category">
                    Kategori - <span className="span"> 20 Posts</span>
                  </h4>
                  <h4 className="category">
                    Kategori - <span className="span"> 20 Posts</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <NewsSection
        displayedNb={3}
        heading="Get Every Single Articles & News"
        background={true}
      />
    </main>
  );
};

export default NewsDetails;
