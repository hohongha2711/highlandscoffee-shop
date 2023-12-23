import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveLink } from "../../../Store/navigationSlide";

const HeaderMain = () => {
  const activeLink = useSelector((state) => state.navigation);
  const dispatch = useDispatch();
  const location = useLocation();
  const handleLinkClick = (link) => {
    dispatch(setActiveLink(link));
  };

  useEffect(() => {
    dispatch(setActiveLink(location.pathname));
  }, [dispatch, location.pathname]);

  return (
    <div className="main-header">
      <div className="container d-flex">
        <a href="/" className="cate-home">
          <FontAwesomeIcon
            icon={faHome}
            style={{ height: "24px", width: "24px", color: "#b5313a" }}
          />
        </a>

        <ul className="nav">
          <li className="nav-item">
            <Link
              className={activeLink === "/" ? "nav-link active" : "nav-link"}
              to="/"
              onClick={() => {
                handleLinkClick("/");
              }}
            >
              TRANG CHỦ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                activeLink === "/flash-sale" ? "nav-link active" : "nav-link"
              }
              to="/flash-sale"
              onClick={() => {
                handleLinkClick("/flash-sale");
              }}
            >
              FLASH SALE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                activeLink === "/khuyen-mai" ? "nav-link active" : "nav-link"
              }
              to="/khuyen-mai"
              onClick={() => {
                handleLinkClick("/khuyen-mai");
              }}
            >
              KHUYẾN MÃI
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                activeLink === "/san-pham-moi" ? "nav-link active" : "nav-link"
              }
              to="/san-pham-moi"
              onClick={() => {
                handleLinkClick("/san-pham-moi");
              }}
            >
              MUA SỈ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                activeLink === "/gioi-thieu" ? "nav-link active" : "nav-link"
              }
              to="/gioi-thieu"
              onClick={() => {
                handleLinkClick("/gioi-thieu");
              }}
            >
              GIỚI THIỆU
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(HeaderMain);
