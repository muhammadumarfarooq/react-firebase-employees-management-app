import React, { useEffect, useState } from "react";
import ActionBtn from "../common/ActionBtn";
import db from "../firebaseInit";
import Loader from "../common/Loader";
import Employees from "./Employees";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    db.collection("employees")
      .orderBy("dept")
      .get()
      .then(querySnapshot => {
        const employees = [];
        querySnapshot.forEach(doc => {
          const employee = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            dept: doc.data().dept,
            position: doc.data().position
          };
          employees.push(employee);
          // console.log(doc.id, doc.data());
        });

        setData(employees);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className='dashboard'>
      <ActionBtn path='/new' icon='plus' />

      {isLoading ? <Loader /> : <Employees data={data} />}
    </div>
  );
};

export default Dashboard;
