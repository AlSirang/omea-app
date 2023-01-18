import LandingPageHero from "components/landingPageHero";
import FeaturesSection from "components/featuers";
import Team from "components/team";
import RoadMap from "components/roadMap";
import PageLayout from "src/layouts/pageLayout";

export default function Home() {
  return (
    <PageLayout>
      <LandingPageHero />
      <FeaturesSection />

      <RoadMap />
      <Team />
    </PageLayout>
  );
}
