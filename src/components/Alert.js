import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext"

function Alert() {

  const alertContext = useContext(AlertContext);
  const {alert} = alertContext;

  return (
    alert && (
      <div className={`alert alert-${alert.color}`} role="alert">
        <strong>{alert.msg}</strong>
      </div>
    )
  );
}

export default Alert;
