import "./OfferCards.css";
import OfferSquare from "../Offers/OfferSquare";
import { offerData } from '../../../data/offerData';


const OfferCards = () => {
  return (
    <div className="offer-cards">
      {offerData.map((offer, index) => (
        <OfferSquare key={index} name={offer.name} isNew={offer.isNew} />
      ))}
    </div>
  );
};

export default OfferCards;
