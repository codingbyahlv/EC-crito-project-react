import "@styles/main.scss";
import "./Input.scss";

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
