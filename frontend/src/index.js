import React from "react";
import ReactDOM from "react-dom";
import Hospital from "./Hospital";
import reportWebVitals from "./reportWebVitals";
import "./css/basic.css";
// import "./FontAwesome/css/all.css";
import { Provider } from "react-redux";
import Store from "./store/Store";
import "./css/mediaquery.css";

ReactDOM.render(
  <Provider store={Store}>
    <Hospital />
  </Provider>,
  document.querySelector(".Hospital_Website")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
