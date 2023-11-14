import { useState, useEffect } from "react";
import "./ScrollToTopButton.css"; // Add your CSS for styling
import "@styles/main.css";
import "./ScrollToTopButton.scss";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      // Show the button when scrolling down, hide when at the top
      setIsVisible(scrolled > 100);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div>
      {isVisible && (
        <FaCircleArrowUp className="scrollBtn" onClick={scrollToTop} />
      )}
    </div>
  );
};

export default ScrollToTopButton;
