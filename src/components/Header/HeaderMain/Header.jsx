import "./Header.css";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

const Header = () => {
  return (
    <header className="navbar">
      <div className="content">
        <p className="company-name">nazwa firmy</p>
        <NavbarLinks />
      </div>
    </header>
  );
};
export default Header;
