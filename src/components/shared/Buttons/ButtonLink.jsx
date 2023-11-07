import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import "@styles/main.scss";
import "./Button.scss";

const ButtonLink = ({ value, to, className }) => {
  const combinedClassName = `button ${className}`;

  return (
    <NavLink to={to} className={combinedClassName}>
      {value} <GoArrowUpRight />
    </NavLink>
  );
};

export default ButtonLink;

//lägg in condition på pilen!
