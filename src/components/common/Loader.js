import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div style={style}>
      <Spinner
        style={{ width: "3rem", height: "3rem" }}
        type='grow'
        color='danger'
      />
    </div>
  );
};

const style = {
  padding: "2rem 0",
  display: "flex",
  justifyContent: "center"
};

export default Loader;
