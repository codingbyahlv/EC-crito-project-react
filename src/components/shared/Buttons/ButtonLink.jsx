import { NavLink } from "react-router-dom";
import IconRenderer from "../IconRenderer/IconRenderer";
import "@styles/main.scss";
import "./Button.scss";

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
