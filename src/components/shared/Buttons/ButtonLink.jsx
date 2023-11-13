import { NavLink } from "react-router-dom";
import IconRenderer from "../IconRenderer/IconRenderer";
import "@styles/main.scss";
import "./Button.scss";

const ButtonLink = ({ value, to, iconName, className, onClick }) => {
  const combinedClassName = `button ${className}`;

  return (
    <NavLink to={to} className={combinedClassName} onClick={onClick}>
      {value}
      <IconRenderer iconName={iconName} className="" />
    </NavLink>
  );
};

export default ButtonLink;
