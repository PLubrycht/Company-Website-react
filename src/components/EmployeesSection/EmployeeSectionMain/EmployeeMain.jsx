import "./EmployessMain.css";
import EmployeeCards from "../EmployeeCards/EmployeeCards";

const Employees = () => {
  return (
    <section className="employees" id="employees">
      <div className="content employees-content">
        <h2 className="employees-header">Nasi specjaliści</h2>
        <EmployeeCards />
      </div>
    </section>
  );
};
export default Employees;
