import React from "react";
import { Navbar } from "reactstrap";

const TopNavbar = () => {
  return (
    <div>
      <Navbar color='danger' light expand='md'>
        <h3 style={style}>Employee Management</h3>
      </Navbar>
    </div>
  );
};

const style = {
  color: "#fff",
  fontWeight: "bold",
  textAlign: "center",
  display: "block"
};

export default TopNavbar;
