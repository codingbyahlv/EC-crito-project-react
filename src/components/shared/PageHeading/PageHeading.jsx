import { NavLink } from "react-router-dom";
import "@styles/main.scss";
import "./PageHeading.scss";

const PageHeading = ({ heading, to, active }) => {
  return (
    <section className="pageHeadingSection">
      <div className="contentWrapper">
        <div>
          <NavLink to="/">Home</NavLink>
          <span> / </span>
          <NavLink to={`/${to}`}>{active}</NavLink>
        </div>
        <h2 className="sectionHeadingBig">{heading}</h2>
      </div>
    </section>
  );
};

export default PageHeading;
