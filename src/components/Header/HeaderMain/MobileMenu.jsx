// MobileMenu.jsx
import { useState } from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <nav className="mobile-nav">
          <a href="#employees" onClick={() => setIsOpen(false)}>o nas</a>
          <a href="#offer" onClick={() => setIsOpen(false)}>oferta</a>
          <span className="disabled-link">kontakt</span>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
