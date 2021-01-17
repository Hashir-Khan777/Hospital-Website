import React from "react";
import ReactDOM from "react-dom";
import Hospital from "./Hospital";
import reportWebVitals from "./reportWebVitals";
import "./css/basic.css";
import "./FontAwesome/css/all.css";

ReactDOM.render(
  <React.StrictMode>
    <Hospital />
  </React.StrictMode>,
  document.querySelector(".Hospital_Website")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
