import LandingPageHero from "components/landingPageHero";
import FeaturesSection from "components/featuers";

import LandingPageLayout from "src/layouts/landingPage.layout";

export default function Home() {
  return (
    <LandingPageLayout>
      <LandingPageHero />
      <FeaturesSection />
    </LandingPageLayout>
  );
}
