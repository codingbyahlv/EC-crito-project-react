import React from "react";
import {
  FaHandshake,
  FaRegLightbulb,
  FaChartLine,
  FaCube,
} from "react-icons/fa";

import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";

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
  };
  const selectedIcon = iconMap[iconName];

  const iconWithClassName = React.cloneElement(selectedIcon, {
    className: className,
  });

  return <>{iconWithClassName}</>;
};

export default IconRenderer;
