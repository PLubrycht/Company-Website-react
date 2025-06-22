import "./FooterMain.css";
import FooterIcons from "../FooterIcons/FooterIcons";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-down">
      <div className="content footer-content">
        <p className="footer-text">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </p>
        <FooterIcons />
      </div>
    </footer>
  );
};
export default Footer;
