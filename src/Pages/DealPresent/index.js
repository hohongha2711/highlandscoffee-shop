import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";

const DealPresent = () => {
  return (
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <a href="/">Trang chủ</a>
        </li>
        <span className=" px-2">/</span>
        <li className=" text-danger text-uppercase">Deal đang diễn ra</li>
      </ul>
      <img
        src={require("../../Images/slider_1.webp")}
        alt="image-1"
        className="w-100"
      />
      <aside className="siderbar">
        <div className="main_container col-md-12 col-lg-12 pt-3">
          <h1>Sản phẩm nổi bật</h1>
        </div>
        <div className="title-count">15 sản phẩm</div>
        <div className="aside-filter d-flex align-items-center">
          <div className="header-filter">
            <FontAwesomeIcon icon={faFilter} />
            <span className=" mx-2 text-black">TÌM NHANH</span>
          </div>
          <div className="drop-menu mx-4">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Lọc giá</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <input type="checkbox" value="option1" /> Option 1
                </Dropdown.Item>
                <Dropdown.Item>
                  <input type="checkbox" value="option2" /> Option 2
                </Dropdown.Item>
                <Dropdown.Item>
                  <input type="checkbox" value="option3" /> Option 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DealPresent;
