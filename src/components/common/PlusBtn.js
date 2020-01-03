import React from "react";
import { Link } from "react-router-dom";
function PlusBtn() {
  return (
    <Link style={style} to='/new' className='btn btn-danger rounded-circle'>
      <i className='fas fa-plus'></i>
    </Link>
  );
}

const style = {
  position: "fixed",
  bottom: "40px",
  right: "40px"
};
export default PlusBtn;
