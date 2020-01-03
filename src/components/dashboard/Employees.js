import React from "react";
import { Badge } from "reactstrap";

const Employees = ({ data }) => {
  return (
    <div className='mt-4'>
      <div className='card'>
        <div className='card-header'>
          <h4>Employees</h4>
        </div>
        <ul className='list-group list-group-flush'>
          {data.map(employee => (
            <li className='list-group-item' key={employee.id}>
              <Badge color='secondary'>{employee.dept}</Badge>{" "}
              {employee.employee_id}: {employee.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Employees;
