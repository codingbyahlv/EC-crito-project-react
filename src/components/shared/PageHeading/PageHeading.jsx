import "@styles/main.scss";
import "./PageHeading.scss";
import { NavLink } from "react-router-dom";

const PageHeading = ({ heading }) => {
  return (
    <section className="pageHeadingSection">
      <div className="contentWrapper">
        <div>
          <NavLink to="/">Home</NavLink>
          <span> / </span>
          <NavLink to="/news">News</NavLink>
        </div>
        <h2 className="sectionHeadingBig">{heading}</h2>
      </div>
    </section>
  );
};

export default PageHeading;
