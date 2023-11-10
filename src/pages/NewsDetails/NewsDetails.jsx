import PageHeading from "@shared/PageHeading/PageHeading";
import { BsFillCircleFill } from "react-icons/bs";
import InputField from "@shared/Inputs/InputField";
import "@styles/main.scss";
import "./NewsDetails.scss";
import { GoHorizontalRule } from "react-icons/go";

const NewsDetails = () => {
  return (
    <main className="pageWrapper">
      <PageHeading heading="News & Articles" to="news" active="News" />

      <div className="contentWrapper">
        <div className="topWrapper">
          <h2 className="sectionHeadingBig heading">
            We Provide The Best Service For Consulting
          </h2>
          <div className="detailsWrapper">
            <p>Datumet</p>
            <BsFillCircleFill className="dot" />
            <p>Området</p>
            <BsFillCircleFill className="dot" />
            <p>Författare</p>
          </div>
        </div>

        <div className="bottomWrapper">
          <div className="leftWrapper">
            <img src="" alt="" className="img" />
            <p className="txt">Texten</p>
          </div>

          <div className="rightWrapper">
            <InputField
              className="searchInput"
              placeholder="Type to search.."
            />

            <div className="recentWrapper">
              <h3 className="subHeading">RecentPosts</h3>
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
                <h4>
                  Kategori - <span className="span"> 20 Posts</span>
                </h4>
                <h4>
                  Kategori - <span className="span"> 20 Posts</span>
                </h4>
                <h4>
                  Kategori - <span className="span"> 20 Posts</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsDetails;
