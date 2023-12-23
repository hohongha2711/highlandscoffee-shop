import CarouselSection from "../../Components/Carousel";
import Policy from "../../Components/Policy";
import Voucher from "../../Components/Voucher";
import FlashSaleSection from "../../Components/FlashSaleSection";
import SanPhamBanChay from "../../Components/ProductSection/SanPhamBanChay";
import CaPheRangXay from "../../Components/ProductSection/CaPheRangXay";

const Home = () => {
  return (
    <>
      <section className="section-carousel mb-4">
        <div className="container">
          <CarouselSection />
        </div>
      </section>

      <section className="section-policy py-3">
        <div className="container">
          <Policy />
        </div>
      </section>

      <section className="section-uu_dai mb-3">
        <div className="container">
          <Voucher />
        </div>
      </section>

      <section className="section-flashsale py-3">
        <div className="container">
          <FlashSaleSection />
        </div>
      </section>

      <section className="section-san_pham_ban_chay py-3">
        <div className="container">
          <SanPhamBanChay />
        </div>
      </section>

      <section className="section-san_pham_ban_chay py-3">
        <div className="container">
          <CaPheRangXay />
        </div>
      </section>
    </>
  );
};

export default Home;
