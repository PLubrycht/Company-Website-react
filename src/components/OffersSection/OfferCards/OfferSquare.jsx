import "./OfferSquare.css";

const OfferSquare = ({ name, description, icon, isNew }) => {
  return (
    <div className="offer-square" data-aos="zoom-in">
      {isNew && <div className="offer-circle"></div>}
      <div className="offer-icon">{icon}</div>
      <p className="offer-name">{name}</p>
      <p className="offer-description">{description}</p>
      {isNew && <p className="offer-tag">(nowość)</p>}
    </div>
  );
};

export default OfferSquare;