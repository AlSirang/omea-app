import React from "react";
import Progress from "components/progressBar";
import "src/styles/dapp/referral.css";

export default function Referral() {
  return (
    <div>
      <h4 className="heading">Referral</h4>
      <div className="card-main referral-card">
        <Progress progress={50} />

        <div className="referral-info">
          <div className="referral-info-inner">
            <div>
              <h6># Referred</h6>
              <p>6</p>
            </div>
            <div>
              <h6>Bonus</h6>
              <p>8%</p>
            </div>
            <div>
              <h6>Referral Earnings</h6>
              <p>100.2340,00</p>
            </div>
          </div>

          <div className="refferal-button">
            <button className="btn btn-primary">
              <strong>Copy link</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
