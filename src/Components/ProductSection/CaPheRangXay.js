import Product from "../Product";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CaPheRangXay = () => {
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
    <div className="slider-product">
      <a className="sport-title text-center">Cà phê rang xay</a>
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
      <div className="view-more-content">
        <button className="view-more-product">
          Xem sản phẩm <b>cà phê rang xay</b>
        </button>
      </div>
    </div>
  );
};

export default CaPheRangXay;
