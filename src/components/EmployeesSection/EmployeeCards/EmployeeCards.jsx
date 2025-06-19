import EmployeeCard from "./EmployeeCard";
import { employeesData } from "../../../data/employeesData";
import "./EmployeeCards.css";

const EmployeeCards = () => {
  return (
    <div className="employee-cards">
      {employeesData.map((employee, index) => (
        <EmployeeCard key={index} {...employee} />
      ))}
    </div>
  );
};

export default EmployeeCards;