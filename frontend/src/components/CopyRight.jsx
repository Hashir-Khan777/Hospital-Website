import React from "react";
import "../css/copyright.css";

const CopyRight = () => {
  return (
    <div className="copy_right">
      <div className="all_rights_reserved">
        <p>
          Copyright <i className="fas fa-copyright"></i>
          {new Date().getFullYear()} all rights reserved
        </p>
      </div>
      <div className="designed by">
        <p>
          Designed By:
          <a
            className="fiverr_link"
            href="https://www.fiverr.com/hashirkhan33?up_rollout=true"
            target="_fiverr"
          >
            Muhammad Hashir Khan
          </a>
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
