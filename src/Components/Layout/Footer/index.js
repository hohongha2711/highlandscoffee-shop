import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className=" col-sm-6 col-lg-3">
            <h4>HIGHLANDS COFFEE CPG</h4>
            <p className="footer-info">
              Công ty TNHH MTV Thái Kiên tự hào là nhà phân phối hợp lệ và độc
              quyền cho tất cả các sản phẩm cà phê mang thương hiệu Highlands
              Coffee®.
            </p>
            <a href="http://online.gov.vn/Home/WebDetails/100941?AspxAutoDetectCookieSupport=1" target="_blank">
              <img
                src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                alt="logoSaleNoti"
                className=" w-75"
              />
            </a>
          </div>
          <div className=" col-sm-6 col-lg-4">
            <h4>THÔNG TIN CÔNG TY</h4>
            <p>
              Trụ sở văn phòng: 127 Nguyễn Cơ Thạch, An Lợi Đông, Q.2, Tp. Hồ
              Chí Minh
            </p>
            <p>Điện thoại: 0917561212 </p>
            <p>Email: cpg.customerservice@vtijs.com</p>
          </div>
          <div className=" col-sm-6 col-lg-2">
            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
            <ul>
              <li>
                <a href="#">Tìm kiếm</a>
              </li>
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Chính sách đổi trả</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Chính sách giao hàng</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className=" col-sm-6 col-lg-3">
            <h4>CHĂM SÓC KHÁCH HÀNG</h4>
            <div className="hotline d-flex">
              <div className="box-icon">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
              <div className="box-content">
                <b>Cà phê đóng gói: 091.756.1212</b>
                <br></br>
                <b>Cà phê tại quán: 1900.1755</b>
                <p style={{ fontSize: "12px" }}>
                  cpg.customerservice@vtijs.com
                </p>
              </div>
            </div>
            <h4>FOLLOW US</h4>
            <div className="social d-flex">
              <a href="#" className=" mx-2 my-1 d-flex align-items-center">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className=" mx-2 my-1 d-flex align-items-center">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className=" mx-2 my-1 d-flex align-items-center">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className=" mx-2 my-1 d-flex align-items-center">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <span>
          © Bản quyền thuộc về <b>Highlands Coffee® CPG</b>{" "}
          <span className="s480-f">|</span> Cung cấp bởi Sapo
        </span>
      </div>
    </footer>
  );
};

export default Footer;
