import React from "react";
import "src/styles/dapp.css";

export default function Overview() {
  return (
    <div>
      <div>
        <h4>Overview</h4>
      </div>
      <div className=" card-main overview-grid-section">
        <div>
          <h5>TVL</h5>
          <p>100.2340,00</p>
        </div>
        <div>
          <h5>Withdrawn</h5>
          <p>100.2340,00</p>
        </div>
        <div>
          <h5>Investors</h5>
          <p>650</p>
        </div>
        <div>
          <h5>Your ROI</h5>
          <p>2.5%</p>
        </div>
        <div>
          <h5>Your APY</h5>
          <p> 912,5%</p>
        </div>
      </div>
    </div>
  );
}
