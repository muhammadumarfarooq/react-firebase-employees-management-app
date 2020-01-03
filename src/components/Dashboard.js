import React, { useEffect } from "react";
import PlusBtn from "./common/PlusBtn";
import db from "./firebaseInit";

const Dashboard = () => {
  useEffect(() => {
    db.collection("employees")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, doc.data());
        });
      });
  }, []);
  return (
    <div className='dashboard'>
      <PlusBtn />
      <h3>Dashboard...</h3>
    </div>
  );
};

export default Dashboard;
