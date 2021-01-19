import React from "react";
import "../css/message.css";

const Messagebox = (props) => {
  return (
    <div className="message">
      <div className="error">{props.children}</div>
    </div>
  );
};

export default Messagebox;
