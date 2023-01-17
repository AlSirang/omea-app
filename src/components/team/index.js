import { Container } from "react-bootstrap";

import "src/styles/team.css";
import { members } from "./constants";
import TeamCard from "./teamCard";

export default function Team() {
  return (
    <Container className="section-padding-2">
      <div className="text-center">
        <h2 className="section-title">The Team behind OMEA</h2>
        <h3 className="section-sub-title">
          Meet the talented individuals behind OMEA's success. Don’t worry, we
          will reveal our identities soon.
        </h3>
      </div>

      <div className="t-cards-grid">
        {members.map((member, index) => (
          <div
            className="t-container"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={member.id}
          >
            <TeamCard {...member} />
          </div>
        ))}
      </div>
    </Container>
  );
}
