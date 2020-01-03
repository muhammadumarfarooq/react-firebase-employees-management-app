import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='danger' light expand='md'>
        <h3 style={style}>Admin Panel</h3>
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
