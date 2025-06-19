// src/components/OfferSections/OfferMain/OfferMain.jsx
import OfferCards from '../OfferCards/OfferCards'; // OK!
import './OfferMain.css';

const OfferMain = () => {
  return (
    <section className="offer" id="offer">
      <div className="content offer-content">
        <h2 className="offer-header">Czym zajmuje się nasza firma?</h2>
        <OfferCards />
      </div>
    </section>
  );
};

export default OfferMain;
