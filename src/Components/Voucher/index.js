import "./style.scss";

const Voucher = () => {
  return (
    <div>
      <div className="title_uu_dai">
        <b>Ưu đãi của bạn</b>
      </div>

      <div className="list-voucher">
        <div className="voucher-item">
          <div className="voucher-item_inner">
            <a href>
              <span className="title">Voucher30K</span>
              <span className="content">Giảm 30K cho đơn từ 1,199,000đ</span>
            </a>
            <div class="copy_discount">
              <p class="code_zip">12VC30K</p>
              <button class="btn dis_copy_2" data-copy="12VC30K">
                <span>Lưu</span>
              </button>
            </div>
          </div>
        </div>
        <div className="voucher-item">
          <div className="voucher-item_inner">
            <a href>
              <span className="title">Voucher50K</span>
              <span className="content">Giảm 50K cho đơn từ 1,799,000đ</span>
            </a>
            <div class="copy_discount">
              <p class="code_zip">12VC50K</p>
              <button class="btn dis_copy_2" data-copy="12VC30K">
                <span>Lưu</span>
              </button>
            </div>
          </div>
        </div>
        <div className="voucher-item">
          <div className="voucher-item_inner">
            <a href>
              <span className="title">Voucher100K</span>
              <span className="content">Giảm 100K cho đơn từ 2,299,000đ</span>
            </a>
            <div class="copy_discount">
              <p class="code_zip">12VC100K</p>
              <button class="btn dis_copy_2" data-copy="12VC30K">
                <span>Lưu</span>
              </button>
            </div>
          </div>
        </div>
        <div className="voucher-item">
          <div className="voucher-item_inner">
            <a href>
              <span className="title">Ưu đãi tại cửa hàng</span>
              <span className="content">
                Nhận ưu đãi tại quán khi mua hàng tại website chính hãng
                Highlands Coffee.
              </span>
            </a>
            <div class="copy_discount">
              <p class="code_zip"> </p>
              <button class="btn dis_copy_2" data-copy="12VC30K">
                <span>Lưu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
