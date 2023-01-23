import React from "react";
import "src/styles/dapp/bonusvouchers.css";

export default function Bonusvouchers() {
  return (
    <div>
      <h4 className="heading"> Bonus vouchers</h4>
      <div className="card-main deposit-card">
        <div className="deposit-card-head">
          <div className="deposit-date">
            <p>2022-12-09 </p>
            <p> 10:40:08 </p>
          </div>
          <div className="deposit-amount">
            <p>12.00 </p>
            <p> BUSD </p>
          </div>
        </div>
        {/* d  h m s */}
        <div className="withraw-section">
          <div className="withdraw-duration">
            <div className="duration-item">
              <h6>d</h6>
              <p>0</p>
            </div>
            <div className="duration-item">
              <h6>h</h6>
              <p>0</p>
            </div>
            <div className="duration-item">
              <h6>m</h6>
              <p>0</p>
            </div>
            <div className="duration-item">
              <h6>s</h6>
              <p>0</p>
            </div>
          </div>

          <button className="btn btn-secondary btn-withdraw claim-button">
            <strong>Claim</strong>
          </button>
        </div>
        <hr className="deposit-hr" />
      </div>
    </div>
  );
}
