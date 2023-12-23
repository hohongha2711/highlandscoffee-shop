import { Rating } from "@mui/material";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  return (
    <div className="product">
      <div className="product-new">
        <a href="#">
          <img
            src={require("../../Images/web-t12-1.webp")}
            alt="image-product"
            className=" w-100"
          />
        </a>

        <span className="sale">30%</span>

        <a href="#" className="title">
          COMBO 2 Gói Cà Phê Rang Xay Truyền Thống Highlands Coffee 200g/gói
        </a>

        <div className="box-price">
          <span className="price">
            98.000<u>đ</u>
          </span>
          <span className="old-price">
            128.000<u>đ</u>
          </span>
        </div>
        <div className="box-rating">
          <Rating name="disabled" value= {0} disabled />
          <div className="add-cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
        <div className="time-viewer">
          <b>03</b>
          <span className="time-dot">:</span>
          <b>13</b>
          <span className="time-dot">:</span>
          <b>45</b>
          <span className="time-dot">:</span>
          <b>03</b>
        </div>
        <button className="select-buy">
          <span className="mx-2">
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
          <span>Chọn mua</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
