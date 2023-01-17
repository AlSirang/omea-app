import LandingPageHero from "components/landingPageHero";
import FeaturesSection from "components/featuers";
import Team from "components/team";
import RoadMap from "components/roadMap";
import LandingPageLayout from "src/layouts/landingPage.layout";

export default function Home() {
  return (
    <LandingPageLayout>
      <LandingPageHero />
      <FeaturesSection />

      <RoadMap />
      <Team />
    </LandingPageLayout>
  );
}
