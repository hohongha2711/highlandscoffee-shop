import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CustomNextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

export default CustomNextArrow;