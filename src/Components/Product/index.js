import { Rating } from "@mui/material";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Countdown from "./Countdown";

const Product = ({ prod }) => {
  //console.log(prod);
  let sale = 0;
  if (prod.old_price) {
    sale = ((prod.old_price - prod.price) / prod.old_price) * 100;
    sale = Math.floor(sale);
  }

  return (
    <div className="product">
      <div className="product-new">
        <a href="">
          <img src={prod.image} alt="product-im" className=" w-100" />
        </a>

        {prod?.old_price && <span className="sale">{sale}%</span>}

        <a href="" className="title">
          {prod.name}
        </a>

        <div className="box-price">
          <span className="price">
            {prod.price ? prod.price.toLocaleString("vi-VN") : ""}
            <u>đ</u>
          </span>
          {prod?.old_price && (
            <span className="old-price">
              {prod.old_price ? prod.old_price.toLocaleString("vi-VN") : ""}
              <u>đ</u>
            </span>
          )}
        </div>
        <div className="box-rating">
          <Rating name="disabled" value={0} disabled />
          <div className="add-cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
        <div className="time-viewer">
         <Countdown />
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
