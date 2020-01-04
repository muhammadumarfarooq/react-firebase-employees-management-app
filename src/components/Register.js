import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const Register = () => {
  return (
    <Form>
      <FormGroup>
        <Label for='exampleEmail'>Email</Label>
        <Input
          type='email'
          name='email'
          id='exampleEmail'
          placeholder='Email'
        />
      </FormGroup>
      <FormGroup>
        <Label for='examplePassword'>Password</Label>
        <Input
          type='password'
          name='password'
          id='examplePassword'
          placeholder='Password'
        />
      </FormGroup>
      <FormGroup>
        <Label for='exampleConfirmPassword'>Password</Label>
        <Input
          type='password'
          name='Confirmpassword'
          id='exampleConfirmPassword'
          placeholder='Confirm Password'
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

export default Register;
