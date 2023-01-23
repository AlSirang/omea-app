import React from "react";
import icon from "assets/Icons/busdIcon.png";
import "src/styles/dapp/invest.css";

export default function InvestSection() {
  return (
    <div className="invest-main">
      <h4 className="heading">Invest</h4>
      <div className="card-main invest-card">
        <div className="section-one">
          <div className="busdicon-Section">
            <img className="image-busdicon" src={icon} alt="img" />
            <p>BUSD</p>
          </div>
          <div>
            <div>
              <h5>Balance</h5>
              <p>100.2340,00</p>
            </div>
            <div>
              <h5>Balance</h5>
              <p>100.2340,00</p>
            </div>
          </div>
        </div>
        {/* section button*/}

        <div className="button-section">
          <input className="input-stake"></input>
          <button className="btn btn-primary btn-stake"> Stake</button>
        </div>
        {/* grid */}
        <div className=" invest-grid-section">
          <div>
            <h5>Claimable reward</h5>
            <p>100.2340,00</p>
          </div>
          <div>
            <h5>Total reward</h5>
            <p>100.2340,00</p>
          </div>
          <div>
            <h5>BUSD per Day</h5>
            <p>100.2340,00</p>
          </div>
          <div>
            <h5>BUSD per Hour</h5>
            <p>100.2340,00</p>
          </div>
        </div>
        <div className=" button-sec-Claim-reward">
          <button className="btn btn-primary btn-Claim-reward">
            Claim reward
          </button>
        </div>
      </div>
    </div>
  );
}
