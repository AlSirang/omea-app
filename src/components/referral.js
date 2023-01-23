import React from "react";
import Progress from "components/progressBar";
import "src/styles/dapp.css";

export default function Referral() {
  return (
    <div className="main-Referral">
      <h4>referral</h4>
      <div className="card-main referral-container">
        <Progress />

        <div className="section-data-referral">
          <div className="data-section-inner">
            <div className="inner-data-section">
              <h6># referred</h6>
              <p>6</p>
            </div>
            <div className="inner-data-section">
              <h6>Bonus</h6>
              <p>8%</p>
            </div>
            <div className="inner-data-section">
              <h6>Referral Earnings</h6>
              <p>100.2340,00</p>
            </div>
          </div>
          <div className="btn-copylink-section">
            <button className="btn btn-primary btn-copylink ">
              {" "}
              copy link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
