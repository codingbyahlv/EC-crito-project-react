import IconRenderer from "../IconRenderer/IconRenderer";
import "@styles/main.scss";
import "./Button.scss";

const ButtonGeneral = ({ value, className, iconName }) => {
  const combinedClassName = `button ${className}`;

  return (
    <button className={combinedClassName}>
      {value}
      <IconRenderer iconName={iconName} className="" />
    </button>
  );
};

export default ButtonGeneral;
