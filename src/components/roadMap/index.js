import { Container } from "react-bootstrap";
import Card from "./card";
import { sections } from "./constants";
import "src/styles/roadmap.css";

export default function RoadMap() {
  return (
    <Container className="section-padding-2">
      <div className="text-center">
        <h2 className="section-title">Road to be the GOAT</h2>
        <h3 className="section-sub-title">
          Charting our path to becoming the leading AI-powered trading platform
        </h3>
      </div>

      <div className="roadmap-cards-grid custom-scrollbar-cards">
        {sections.map((section, index) => (
          <div
            className="r-card-container"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={section.id}
          >
            <Card {...section} />
          </div>
        ))}
      </div>
    </Container>
  );
}
