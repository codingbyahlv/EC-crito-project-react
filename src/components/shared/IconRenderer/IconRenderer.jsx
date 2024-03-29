import React from "react";
import { BsBullseye } from "react-icons/bs";
import {
  FaHandshake,
  FaRegLightbulb,
  FaChartLine,
  FaCube,
  FaRegThumbsUp,
  FaHeadSideVirus,
} from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import { PiPenNib } from "react-icons/pi";

const IconRenderer = ({ iconName, className }) => {
  const iconMap = {
    phone: <FiPhoneCall />,
    envelope: <FiMail />,
    location: <FiMapPin />,
    handshake: <FaHandshake />,
    lightbulb: <FaRegLightbulb />,
    finance: <FaChartLine />,
    cube: <FaCube />,
    arrow: <GoArrowUpRight />,
    arrowRight: <GoArrowRight />,
    thumb: <FaRegThumbsUp />,
    stategi: <BsBullseye />,
    design: <PiPenNib />,
    ai: <FaHeadSideVirus />,
    chevronLeft: (
      <FaChevronLeft
        style={{ marginRight: "2px", marginTop: "2px", height: "24px" }}
      />
    ),
    chevronRight: (
      <FaChevronRight
        style={{ marginLeft: "2px", marginTop: "2px", height: "24px" }}
      />
    ),
  };
  const selectedIcon = iconMap[iconName] || null;

  if (selectedIcon !== null) {
    const iconWithClassName = React.cloneElement(selectedIcon, {
      className: className,
    });
    return <>{iconWithClassName}</>;
  } else {
    return <></>;
  }
};

export default IconRenderer;
