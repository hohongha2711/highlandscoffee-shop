import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev">
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

export default CustomPrevArrow;