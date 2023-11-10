//TODO: Lägg in förstoringsglaset vid klassnamn serachinput
import "@styles/main.scss";
import "./Input.scss";
import { BiSearch } from "react-icons/bi";

const InputField = ({ placeholder, id, name, value, onChange, className }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;

<BiSearch />;
