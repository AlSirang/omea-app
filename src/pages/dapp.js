import Bonusvouchers from "components/bonusVouchers";
import DepositHistory from "components/deposithistory";
import InvestSection from "components/invest";
import Overview from "components/overview";
import Referral from "components/referral";
import { Container } from "react-bootstrap";
import PageLayout from "src/layouts/pageLayout";

export default function Dapp() {
  return (
    <PageLayout>
      <Container>
        <Overview />
        <div className="container-section-two">
          <InvestSection />

          <DepositHistory />
        </div>
        <div className="container-section-three">
          <Bonusvouchers />
          <Referral />
        </div>
      </Container>
    </PageLayout>
  );
}
