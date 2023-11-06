import React from "react";
import PropTypes from "prop-types";
import { FiPhoneCall, FiMapPin, FiMail } from "react-icons/fi";
import {
  FaHandshake,
  FaRegLightbulb,
  FaChartLine,
  FaCube,
} from "react-icons/fa";

const IconRenderer = ({ iconName, className }) => {
  const iconMap = {
    phone: <FiPhoneCall />,
    envelope: <FiMail />,
    location: <FiMapPin />,
    handshake: <FaHandshake />,
    lightbulb: <FaRegLightbulb />,
    finance: <FaChartLine />,
    cube: <FaCube />,
  };
  const selectedIcon = iconMap[iconName];

  const iconWithClassName = React.cloneElement(selectedIcon, {
    className: className,
  });

  return <>{iconWithClassName}</>;
};

IconRenderer.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default IconRenderer;
