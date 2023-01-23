import React from "react";
import icon from "assets/Icons/busdIcon.png";
import "src/styles/dapp/invest.css";

export default function InvestSection() {
  return (
    <div className="invest-main">
      <h4 className="heading">Invest</h4>
      <div className="card-main invest-card">
        <div className="invest-head">
          <div className="invest-busd-icon">
            <img className="icon" src={icon} alt="busd icon" />
            <p className="invest-para">BUSD</p>
          </div>
          <div className="invest-info">
            <div>
              <h5 className="invest-title">Balance</h5>
              <p className="invest-para">100.2340,00</p>
            </div>
            <div>
              <h5 className="invest-title">Staked</h5>
              <p className="invest-para">100.2340,00</p>
            </div>
          </div>
        </div>
        {/* section button*/}

        <div className="invest-input">
          <input className="input-stake" />

          <div className="invest-button">
            <button className="btn btn-lg btn-primary">
              <strong>Stake</strong>
            </button>
          </div>
        </div>
        {/* grid */}
        <div className="invest-grid-section mt-5">
          <div className="invest-gird-inner">
            <h5 className="invest-title">Claimable reward</h5>
            <p className="invest-para">100.2340,00</p>
          </div>
          <div className="invest-gird-inner">
            <h5 className="invest-title">Total reward</h5>
            <p className="invest-para">100.2340,00</p>
          </div>
          <div className="invest-gird-inner">
            <h5 className="invest-title">BUSD per Day</h5>
            <p className="invest-para">100.2340,00</p>
          </div>
          <div className="invest-gird-inner">
            <h5 className="invest-title">BUSD per Hour</h5>
            <p className="invest-para">100.2340,00</p>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-lg btn-primary">
            <strong>Claim reward</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
