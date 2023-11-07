import "@styles/main.scss";
import "./Input.scss";

const InputField = ({ placeholder, id, name, value, onChange }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
