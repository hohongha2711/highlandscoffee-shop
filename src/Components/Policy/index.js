import "./style.scss";

const Policy = () => {
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      <div className="policy">
        <a href="#">
          <img
            src={require("../../Images/policy_1.webp")}
            alt="policy-1"
            className="img-policy"
          />
          <span>Vận chuyển</span>
        </a>
      </div>
      <div className="policy">
        <a href="#">
          <img
            src={require("../../Images/policy_2.webp")}
            alt="policy-2"
            className="img-policy"
          />
          <span>Độc quyền</span>
        </a>
      </div>
      <div className="policy">
        <a href="/khuyen-mai">
          <img
            src={require("../../Images/policy_3.webp")}
            alt="policy-3"
            className="img-policy"
          />
          <span>Bán chạy</span>
        </a>
      </div>
      <div className="policy">
        <a href="#">
          <img
            src={require("../../Images/policy_4.webp")}
            alt="policy-4"
            className="img-policy"
          />
          <span>Cửa hàng</span>
        </a>
      </div>
      <div className="policy">
        <a href="#">
          <img
            src={require("../../Images/policy_5.webp")}
            alt="policy-5"
            className="img-policy"
          />
          <span>Cách pha</span>
        </a>
      </div>
      <div className="policy">
        <a href="#">
          <img
            src={require("../../Images/policy_6.webp")}
            alt="policy-6"
            className="img-policy"
          />
          <span>Liên hệ</span>
        </a>
      </div>
    </div>
  );
};

export default Policy;
