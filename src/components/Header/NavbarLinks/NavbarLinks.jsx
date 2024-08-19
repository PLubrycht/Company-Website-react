import "./NavbarLinks.css";

const NavbarLinks = () => {
  return (
    <nav className="nav-links desktop-only">
      <a href="#employees">o nas</a>
      <a href="#offer">oferta</a>
      <span className="disabled-link" aria-disabled="true">
        kontakt
      </span>
    </nav>
  );
};

export default NavbarLinks;
