import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import Product from "../Product";

const FlashSaleSection = () => {
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev">
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next">
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="row">
      <div className="flashsale__header col-12 col-lg-12">
        <div className="tt_flashsale align-items-center">
          <h2 className="title">
            <img
              src={require("../../Images/icon_flash.webp")}
              alt="flash-icon"
              className=" d-block"
            />
            <a href="/san-pham-noi-bat">DEAL ĐANG DIỄN RA</a>
          </h2>
          <span className="lable_countdown">|</span>
          <a href="/san-pham-noi-bat" className="view-all">Xem tất cả</a>
        </div>
      </div>
      <div className="slider">
          <Slider {...settings}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            {/* Thêm các hình ảnh khác vào đây */}
          </Slider>
      </div>
    </div>
  );
};

export default FlashSaleSection;
