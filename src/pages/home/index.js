import LandingPageHero from "components/landingPageHero";
import FeaturesSection from "components/featuers";
import Team from "components/team";
import RoadMap from "components/roadMap";
import PageLayout from "src/layouts/pageLayout";
import HowToStart from "components/howToStart";
import { StartEarning } from "components/button";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <PageLayout>
      <LandingPageHero />
      <FeaturesSection />

      <HowToStart />

      <RoadMap />
      <Team />

      <Container className="d-flex justify-content-center">
        <StartEarning />
      </Container>
    </PageLayout>
  );
}
