import { NavLink } from "react-router-dom";
// import { GoArrowUpRight } from "react-icons/go";
import "@styles/main.scss";
import "./Button.scss";
import IconRenderer from "../IconRenderer/IconRenderer";

const ButtonLink = ({ value, to, iconName, className }) => {
  const combinedClassName = `button ${className}`;

  return (
    <NavLink to={to} className={combinedClassName}>
      {value}
      <IconRenderer iconName={iconName} className="" />
    </NavLink>
  );
};

export default ButtonLink;

//lägg in condition på pilen!
