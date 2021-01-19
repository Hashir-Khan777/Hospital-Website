import React from "react";
import "../css/loading.css";

const Loadingbox = () => {
  return (
    <div className="Loading">
      <i className="fas fa-spinner fa-spin spinner"></i>
      Loading...
    </div>
  );
};

export default Loadingbox;
