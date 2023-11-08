import React from "react";
import {
  FaHandshake,
  FaRegLightbulb,
  FaChartLine,
  FaCube,
  FaRegThumbsUp,
  FaHeadSideVirus,
} from "react-icons/fa";

import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import { BsBullseye } from "react-icons/bs";
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
