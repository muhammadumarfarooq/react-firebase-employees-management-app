import React, { useEffect, useState } from "react";
import db from "./firebaseInit";
import { Link, useHistory } from "react-router-dom";

const ViewEmployee = ({ match }) => {
  const history = useHistory();
  const { employee_id } = match.params;
  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    db.collection("employees")
      .where("employee_id", "==", employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setEmployee(doc.data());
        });
      });

    // eslint-disable-next-line
  }, []);

  const handleDeleteEmployee = id => {
    db.collection("employees")
      .where("employee_id", "==", employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete();
          history.push("/");
        });
      });
  };

  return employee !== null ? (
    <div className='view-employee mt-4'>
      <div className='card'>
        <div className='card-header'>
          <h1>{employee.name}</h1>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Employee ID#: {employee.employee_id}
          </li>
          <li className='list-group-item'>Department: {employee.dept}</li>
          <li className='list-group-item'>Position: {employee.position}</li>
        </ul>
      </div>
      <Link to='/' className='btn btn-secondary mt-2'>
        Back
      </Link>

      <button
        onClick={() => handleDeleteEmployee(employee.employee_id)}
        className='btn btn-danger ml-2 mt-2'
      >
        Delete
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ViewEmployee;
