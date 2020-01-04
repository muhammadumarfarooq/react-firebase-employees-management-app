import React from "react";
import { Link } from "react-router-dom";
function ActionBtn({ path, icon }) {
  return (
    <Link style={style} to={path} className='btn btn-danger rounded-circle'>
      <i className={`fas fa-${icon}`}></i>
    </Link>
  );
}

const style = {
  position: "fixed",
  bottom: "20px",
  right: "20px"
};
export default ActionBtn;
