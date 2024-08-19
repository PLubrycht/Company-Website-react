import "./FooterIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const FooterIcons = () => {
  return (
    <div class="footer-icons">
      <i class="fa-brands fa-instagram"></i>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
};
export default FooterIcons;
