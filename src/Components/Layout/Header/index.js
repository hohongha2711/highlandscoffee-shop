import HeaderMenu from "./HeaderMenu";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HederMain";
import MenuChild from "./MenuChild";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMenu />
      <HeaderMain />
      <MenuChild />
    </div>
  );
};

export default Header;
