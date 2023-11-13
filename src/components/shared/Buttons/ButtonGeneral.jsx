import IconRenderer from "../IconRenderer/IconRenderer";
import "@styles/main.scss";
import "./Button.scss";

const ButtonGeneral = ({ value, className, iconName, disabled }) => {
  const combinedClassName = `button ${className}`;

  return (
    <button className={combinedClassName} disabled={disabled}>
      {value}
      <IconRenderer iconName={iconName} className="" />
    </button>
  );
};

export default ButtonGeneral;
