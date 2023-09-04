import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-info" role="alert">
        {props.instance}
      </div>
    </div>
  );
};

export default Alert;
