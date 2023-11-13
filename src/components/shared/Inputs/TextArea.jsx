import { BsFillExclamationTriangleFill } from "react-icons/bs";
import "@styles/main.scss";
import "./Input.scss";

const TextArea = ({
  placeholder,
  id,
  name,
  value,
  onChange,
  className,
  error,
}) => {
  return (
    <>
      <textarea
        className={className}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
      <div className="error">
        {error ? (
          <span className="errMsg">
            <BsFillExclamationTriangleFill /> {error}
          </span>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default TextArea;
