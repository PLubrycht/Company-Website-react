import OfferSquare from "./OfferSquare";
import { offerData } from "../../../data/offerData";
import "./OfferSquare.css";

const OfferCards = () => {
  return (
    <div className="offer-cards">
      {offerData.map((offer, index) => (
        <OfferSquare key={index} {...offer} />
      ))}
    </div>
  );
};

export default OfferCards;