import React from "react";
import "../css/top.css";

const Top = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 2000) {
      document.querySelector(".top").classList.add("block");
    } else {
      document.querySelector(".top").classList.remove("block");
    }
  });
  function go_top() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="top" onClick={go_top}>
      <i class="fas fa-chevron-up"></i>
    </div>
  );
};

export default Top;
