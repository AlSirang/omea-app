import React from "react";
import "src/styles/dapp.css";
export default function Bonusvouchers() {
  return (
    <div className="main-deposit-history">
      <h4> Bonus vouchers</h4>
      <div className=" card-main  inner-data-section">
        <div className="card-data-first-Section">
          <div className="data-deposit-section">
            <p>2022-12-09 </p>
            <p> 10:40:08 </p>
          </div>
          <div className="budget-deposit-section">
            <p>40.7400 </p>
            <p> BUSD </p>
          </div>
        </div>
        {/* d  h m s */}
        <div className="section-section-date-withraw-vouchar">
          <div className=" section-date-hour-var">
            <div className="date-mont-sec-voc">
              <h6> d</h6>
              <p>0</p>
            </div>
            <div className="date-mont-sec-voc">
              <h6> h</h6>
              <p>0</p>
            </div>
            <div className="date-mont-sec-voc">
              <h6> m</h6>
              <p>0</p>
            </div>
            <div className="date-mont-sec-voc">
              <h6> s</h6>
              <p>0</p>
            </div>
          </div>

          <div>
            <button className="btn btn-secondary btn-withdraw">claim</button>
          </div>
        </div>
        <hr className="hr-deposit-section-vochar" />
        <div className="text-Section-vouchar"></div>
      </div>
    </div>
  );
}
