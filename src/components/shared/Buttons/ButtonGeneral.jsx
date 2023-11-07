import { GoArrowUpRight } from "react-icons/go";
import "@styles/main.scss";
import "./Button.scss";

const ButtonGeneral = ({ value, className, arrow }) => {
  const combinedClassName = `button ${className}`;
  return (
    <button className={combinedClassName}>
      {value}
      {arrow && <GoArrowUpRight />}
    </button>
  );
};

export default ButtonGeneral;
