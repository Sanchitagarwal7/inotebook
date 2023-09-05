import React, {useState} from "react";
import AlertContext from "./AlertContext.js";

const AlertState = (props) => {
  const [alert, setAlert] = useState(null);

  const showText = (message, clr) => {
    setAlert({
      msg: message,
      color: clr,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  return (
    <div>
      <AlertContext.Provider value={{alert, showText}}>{props.children}</AlertContext.Provider>
    </div>
  );
};

export default AlertState;
