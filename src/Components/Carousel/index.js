import { Carousel } from "react-bootstrap";
import './style.scss'
const CarouselSection = () => {
  return (
    <div className="banner">
      <Carousel controls={false} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../Images/slider_1.webp")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../Images/slider_2.webp")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../Images/slider_3.webp")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
