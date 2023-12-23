import { memo, useState } from "react";
import { Link } from "react-router-dom";

const MenuChild = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    console.log({link})
    setActiveLink(link);
  };
  return (
    <div>
      <div className="container d-flex">
            <ul className="nav-child align-items-center">
              <li className="nav-item">
                <Link
                  className={activeLink === "#" ? "nav-link active" : "nav-link"}
                  to="/"
                  onClick={() => {
                    handleLinkClick("/");
                  }}
                >
                  Cà Phê Rang Xay
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    activeLink === "#" ? "nav-link active" : "nav-link"
                  }
                  to="/flash-sale"
                  onClick={() => {
                    handleLinkClick("/flash-sale");
                  }}
                >
                  Cà Phê Hạt
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
                  Cà Phê Hoà Tan
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
                  Cà Phê Uống Liền
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
                  Cà Phê Hộp Giấy
                </Link>
              </li>
            </ul>
        </div>
      </div>
  );
};

export default memo(MenuChild);
