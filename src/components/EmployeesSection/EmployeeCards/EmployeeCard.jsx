import "./EmployeeCards.css";

const EmployeeCard = ({ name, role, image, description }) => {
  return (
    <div className="employee">
      <div className="employee-pic">
        <img src={image} alt={name} />
      </div>
      <div className="employee-info">
        <h3 className="employee-name">{name} - {role}</h3>
        <p className="employee-details">{description}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
