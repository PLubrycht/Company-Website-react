import "./Header.css";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import MobileMenu from "./MobileMenu"; // dodaj

const Header = () => {
  return (
    <header className="navbar">
      <div className="content">
        <p className="company-name">Nasza Firma</p>
        <NavbarLinks />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
