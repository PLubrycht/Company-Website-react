import "./OfferSquare.css";

const OfferSquare = ({ name, isNew }) => {
  return (
    <div className="offer-square">
      {isNew && <div className="offer-circle"></div>}
      <p className="offer-name">{name}</p>
      {isNew && <p className="offer-description">(nowość)</p>}
    </div>
  );
};

export default OfferSquare;
