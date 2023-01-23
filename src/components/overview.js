import React from "react";
import { Container } from "react-bootstrap";
import "src/styles/dapp/overview.css";

export default function Overview() {
  return (
    <Container className="overview-container">
      <h4 className="heading">Overview</h4>

      <div className="card-main overview-section">
        <div className="overview-item">
          <h5>TVL</h5>
          <p>100.2340,00</p>
        </div>
        <div className="overview-item">
          <h5>Withdrawn</h5>
          <p>100.2340,00</p>
        </div>
        <div className="overview-item">
          <h5>Investors</h5>
          <p>650</p>
        </div>
        <div className="overview-item">
          <h5>Your ROI</h5>
          <p>2.5%</p>
        </div>
        <div className="overview-item">
          <h5>Your APY</h5>
          <p> 912,5%</p>
        </div>
      </div>
    </Container>
  );
}
