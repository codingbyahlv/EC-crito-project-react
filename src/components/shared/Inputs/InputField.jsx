import { BiSearch } from "react-icons/bi";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import "@styles/main.scss";
import "./Input.scss";

const InputField = ({
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
      {className === "searchInput" && <BiSearch className="searchIcon" />}
      <input
        className={className}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
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

export default InputField;
