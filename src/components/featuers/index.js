import { Container } from "react-bootstrap";
import FeaturesCard from "./featuresCard";
import { features } from "./constants";

import "src/styles/featuersSection.css";

export default function Features() {
  return (
    <Container>
      <div className="text-center">
        <h2 className="f-title">OMEA's advanced features</h2>
        <h3 className="f-sub-title">
          Optimizing performance through AI and diversification to maximize
          returns and minimize risks.
        </h3>
      </div>
      <div className="cards-grid">
        {features.map((props, index) => (
          <span data-aos="fade-up" data-aos-delay={index * 100} key={props.id}>
            <FeaturesCard {...props} />
          </span>
        ))}
      </div>

      <div className="text-center btn-container">
        <button className="btn btn-lg btn-primary">
          <span className="start-earning">Start Earning</span>
        </button>
      </div>
    </Container>
  );
}
