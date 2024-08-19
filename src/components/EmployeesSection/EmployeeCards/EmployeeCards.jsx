import "../EmployeeCards/EmployeeCards.css";

import LizTaylor from "./Employees/LizTaylor/LizTaylor";
import NatashaJohnson from "./Employees/NatashaJohnson/NatashaJohnson";
const EmployeeCards = () => {
  return (
    <div className="employee-cards">
      <LizTaylor />
      <NatashaJohnson />
    </div>
  );
};
export default EmployeeCards;
