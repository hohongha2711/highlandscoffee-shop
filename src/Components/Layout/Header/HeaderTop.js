import { memo } from "react";
import { Carousel } from "react-bootstrap";

const HeaderTop = () => {
  return (
    <div className="top-header position-relative overflow-hidden">
      <div className="container position-relative">
        <Carousel controls = {false} fade  className="position-relative my-1 mx-2">
          <Carousel.Item>
            <p className="text-white text-center fw-bold m-0 ">
              GIAO HÀNG TOÀN QUỐC
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="text-white text-center fw-bold m-0 ">
            UỐNG HIGHLANDS COFFEE TẠI NHÀ!
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default memo(HeaderTop);
