import { useEffect, useState } from "react";
import "@styles/main.scss";
import "./LogoSection.scss";

const LogoSection = () => {
  const logos = [
    { url: "logo_paperz.svg", alt: "Paperz logotype" },
    { url: "logo_dorfus.svg", alt: "Dorfus logotype" },
    { url: "logo_martino.svg", alt: "Martino logotype" },
    { url: "logo_square.svg", alt: "Square logotype" },
    { url: "logo_gobona.svg", alt: "Gobona logotype" },
  ];

  //UI-component: renders back the logo images
  const LogoLoader = ({ data }) => {
    const [logoSrc, setLogoSrc] = useState(null);

    useEffect(() => {
      import(/* @vite-ignore */ `../../../assets/images/${data.url}`)
        .then((module) => {
          setLogoSrc(module.default);
        })
        .catch((error) => {
          console.error("Error loading image:", error);
        });
    }, [data.url]);

    return logoSrc ? (
      <img src={logoSrc} className="img" alt={data.alt} />
    ) : null;
  };

  return (
    <section className="logoSection">
      {logos.map((logo, index) => (
        <LogoLoader key={index} data={logo} />
      ))}
    </section>
  );
};

export default LogoSection;
