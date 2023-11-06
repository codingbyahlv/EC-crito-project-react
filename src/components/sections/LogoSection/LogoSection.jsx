import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/main.scss";
import "./LogoSection.scss";

const LogoLoader = ({ data }) => {
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    import(`../../../../assets/images/${data.url}`)
      .then((module) => {
        setLogoSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [data.url]);

  return logoSrc ? <img src={logoSrc} className="img" alt={data.alt} /> : null;
};

LogoLoader.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

const LogoSection = () => {
  const logos = [
    { url: "logo_paperz.svg", alt: "Paperz logotype" },
    { url: "logo_dorfus.svg", alt: "Dorfus logotype" },
    { url: "logo_martino.svg", alt: "Martino logotype" },
    { url: "logo_square.svg", alt: "Square logotype" },
    { url: "logo_gobona.svg", alt: "Gobona logotype" },
  ];

  return (
    <section className="logoSection">
      {logos.map((logo, index) => (
        <LogoLoader key={index} data={logo} />
      ))}
    </section>
  );
};

export default LogoSection;
