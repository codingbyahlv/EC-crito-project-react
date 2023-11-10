import "@styles/main.scss";
import "./Input.scss";

const TextArea = ({ placeholder, id, name, value, onChange, className }) => {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
