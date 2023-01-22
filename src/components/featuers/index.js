import { Container } from "react-bootstrap";
import FeaturesCard from "./featuresCard";
import { features } from "./constants";

import "src/styles/featuersSection.css";
import { StartEarning } from "components/button";

export default function Features() {
  return (
    <Container className="section-padding-2">
      <div className="text-center">
        <h2 className="section-title">OMEA's advanced features</h2>
        <h3 className="section-sub-title">
          Optimizing performance through AI and diversification to maximize
          returns and minimize risks.
        </h3>
      </div>
      <div className="cards-grid sub-section-m-t">
        {features.map((props, index) => (
          <span data-aos="fade-up" data-aos-delay={index * 100} key={props.id}>
            <FeaturesCard {...props} />
          </span>
        ))}
      </div>

      <div
        className="text-center btn-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <StartEarning />
      </div>
    </Container>
  );
}
