import { Container } from "react-bootstrap";
import PageLayout from "src/layouts/pageLayout";
import Bonusvouchers from "components/bonusVouchers";
import DepositHistory from "components/depositHistory";
import InvestSection from "components/invest";
import LiveTradeTable from "components/liveTradeTable";
import Overview from "components/overview";
import Referral from "components/referral";
import "src/styles/dapp/index.css";

export default function Dapp() {
  return (
    <PageLayout>
      <Overview />
      <Container className="investment-section">
        <InvestSection />
        <DepositHistory />
      </Container>

      <div className="container-section-three">
        <Bonusvouchers />
        <Referral />
      </div>

      <LiveTradeTable />
    </PageLayout>
  );
}
