import React from "react";
import AddForm from "./AddForm";
import db from "../firebaseInit";
import { useHistory } from "react-router-dom";

const NewEmployee = () => {
  const history = useHistory();
  const handleSaveToDb = data => {
    db.collection("employees")
      .add(data)
      .then(savedData => {
        history.push("/");
        // console.log(savedData);
      })
      .catch(error => console.log(error));
  };
  return (
    <div className='new-employee'>
      <AddForm handleSaveToDb={handleSaveToDb} />
    </div>
  );
};

export default NewEmployee;
