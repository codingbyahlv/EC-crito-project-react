import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useNewsContext } from "../../hooks/useNews";
import InputField from "@shared/Inputs/InputField";
import NewsSection from "@sections/NewsSection/NewsSection";
import PageHeading from "@shared/PageHeading/PageHeading";
import { getNews as NewsAPI_getNews } from "../../services/NewsAPI";
import { BsFillCircleFill } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";
import "@styles/main.scss";
import "./NewsDetails.scss";

const NewsDetails = () => {
  const { news } = useNewsContext();
  const navigate = useNavigate();
  const [newsDetails, setNewsDetails] = useState();
  const [formattedDate, setFormattedDate] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //function: get the specific news
  const getNews = async () => {
    try {
      const respData = await NewsAPI_getNews(id);
      setNewsDetails(respData);
      formatDate(respData.published, "details");
    } catch (error) {
      alert("Oh shit! Something wrong!");
    }
  };

  //function: format the date to 00 Mmm 0000
  const formatDate = (date, type) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
    const dateArray = formattedDate.split(" ");

    if (type === "details") {
      setFormattedDate(dateArray);
      setIsLoading(false);
    } else {
      return dateArray;
    }
  };

  //UI-component: render the recent posts
  const RecentPost = ({ news }) => {
    let dateArray = formatDate(news.published);
    return (
      <article className="recCard" onClick={() => navigate(`/news/${news.id}`)}>
        <h4 className="title">{news.title}</h4>
        <p className="date">
          {dateArray[1]} {dateArray[0]}, {dateArray[2]}
        </p>
      </article>
    );
  };

  return (
    <main className="pageWrapper">
      <PageHeading heading="News & Articles" to="news" active="News" />
      {isLoading ? (
        <></>
      ) : (
        <div className="contentWrapper">
          <div className="topWrapper">
            <h2 className="sectionHeadingBig heading">{newsDetails.title}</h2>
            <div className="detailsWrapper">
              <p>
                {formattedDate[1]} {formattedDate[0]}, {formattedDate[2]}
              </p>
              <BsFillCircleFill className="dot" />
              <p>{newsDetails.category}</p>
              <BsFillCircleFill className="dot" />
              <p>{newsDetails.author}</p>
            </div>
          </div>

          <div className="bottomWrapper">
            {!isLoading && (
              <div className="leftWrapper">
                <div className="imgWrapper">
                  <img src={newsDetails.imageUrl} alt="" className="img" />
                </div>
                <p className="txt">{newsDetails.content}</p>
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
                  {news.map((news, id) => (
                    <RecentPost news={news} key={id} />
                  ))}
                </div>
              </div>

              <div className="categoriesWrapper">
                <h3 className="subHeading">Categories</h3>
                <GoHorizontalRule className="ruleIcon" />
                <div className="catWrapper">
                  <h4 className="category">
                    Technology - <span className="span"> 20 Posts</span>
                  </h4>
                  <h4 className="category">
                    Freelancing - <span className="span"> 7 Posts</span>
                  </h4>
                  <h4 className="category">
                    Writing - <span className="span"> 16 Posts</span>
                  </h4>
                  <h4 className="category">
                    Marketing - <span className="span"> 11 Posts</span>
                  </h4>
                  <h4 className="category">
                    Business - <span className="span"> 35 Posts</span>
                  </h4>
                  <h4 className="category">
                    Education - <span className="span"> 14 Posts</span>
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
