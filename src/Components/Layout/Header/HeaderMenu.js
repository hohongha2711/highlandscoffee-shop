import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";


const HeaderMenu = () => {
  return (
    <>
      <div className="menu-header flex-column">
        <div className="container">
          <div className="row align-items-center p-0">
            <div className="header-left col-lg-3 col-md-3">
              <div className="menu h-100">
                <a href="#" className=" d-block py-2">
                  <span className="box-icon">
                    <FontAwesomeIcon
                      icon={faBars}
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                  <span className="box-text">MENU</span>
                </a>
              </div>
              <a href="#" className="logo-wrapper">
                <img
                  src="https://bizweb.dktcdn.net/100/465/740/themes/884110/assets/logo.png?1702027870090"
                  alt="logo"
                  className="mx-auto d-block"
                />
              </a>
            </div>
            <div className="col-lg-6 col-md-5 search-form">
              <div className="position-relative">
                <form action="/search" className="m-0 d-flex">
                  <input
                    type="text"
                    className="input-text w-100"
                    placeholder="Input text..."
                  />
                  <button className="btn-search">
                    {" "}
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ height: "20px", width: "20px" }}
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="header-right col-lg-3 col-md-4 d-flex m-auto position-relative justify-content-end">
              <a href="#" className="search-small">
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ height: "20px", width: "20px" }}
                  />
              </a>
              <a href="#" className="header-account d-block py-2 text-center">
                <span className="box-icon">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ height: "25px", width: "25px" }}
                  />
                </span>
                <span className="d-block">Tài khoản</span>
              </a>
              <a href="#" className="header-cart d-block py-2 text-center">
                <span className="box-icon">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ height: "25px", width: "25px" }}
                  />
                  <span className="number-in-cart">2</span>
                </span>
                <span className="d-block">Giỏ hàng</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HeaderMenu);
