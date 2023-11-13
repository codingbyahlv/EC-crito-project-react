import "@styles/main.scss";
import "./NotFound.scss";
import { TbWorldSearch } from "react-icons/tb";

const NotFound = () => {
  return (
    <main className="notFoundWrapper">
      <div className="contentWrapper">
        <TbWorldSearch className="icon" />
        <h3 className="txt">
          Sorry, it looks like the page you&apos;re trying to navigate to is
          missing
        </h3>
      </div>
    </main>
  );
};

export default NotFound;
