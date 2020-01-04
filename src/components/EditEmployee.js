import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import db from "./firebaseInit";

const EditEmployee = ({ match }) => {
  const history = useHistory();
  const [value, setValue] = useState({
    name: "",
    employee_id: "",
    dept: "",
    position: ""
  });

  const { employee_id } = match.params;
  useEffect(() => {
    db.collection("employees")
      .where("employee_id", "==", employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setValue(doc.data());
        });
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    db.collection("employees")
      .where("employee_id", "==", employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update(value).then(() => {
            history.push(`/${employee_id}`);
          });
        });
      });
  };

  return (
    <div className='edit-employee mt-4'>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='employeeID'>Employee ID</Label>

          <Input
            disabled
            type='number'
            name='id'
            id='employeeID'
            placeholder='ID'
            onChange={e => setValue({ ...value, employee_id: e.target.value })}
            value={value.employee_id}
          />
        </FormGroup>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input
            type='name'
            name='name'
            id='name'
            placeholder='Name'
            value={value.name}
            onChange={e => setValue({ ...value, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='dept'>Department</Label>
          <Input
            type='name'
            name='dept'
            id='dept'
            placeholder='Department'
            value={value.dept}
            onChange={e => setValue({ ...value, dept: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='pos'>Position</Label>
          <Input
            type='name'
            name='position'
            id='pos'
            placeholder='Position'
            onChange={e => setValue({ ...value, position: e.target.value })}
            value={value.position}
          />
        </FormGroup>
        <Link className='btn btn-danger mr-2' to='/'>
          Cancel
        </Link>
        <Button>Update</Button>
      </Form>
    </div>
  );
};

export default EditEmployee;
