import { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import stepOneIcon from "assets/images/hitw_1.png";
import stepTwoIcon from "assets/images/hitw_2.png";
import stepThreeIcon from "assets/images/hitw_3.png";
import "src/styles/howtToStart.css";

const steps = [
  {
    id: "0",
    icon: require("assets/Icons/avatar.png"),
    title: "Create your account",
    description:
      "Getting started with OMEA is easy. Simply connect your wallet and you are good to go. We support almost all wallets, so you can easily start investing with no minimum deposit",
  },
  {
    id: "1",
    icon: require("assets/Icons/structure.png"),
    title: "Invest into the funding pool",
    description:
      "Approve BUSD and start investing with no minimum deposit. Your investment will be used by our AI-powered trading algorithm to execute trades and generate returns.",
  },
  {
    id: "2",
    icon: require("assets/Icons/stock-exchange-app.png"),
    title: "Earn daily returns passively",
    description:
      "With OMEA, you can earn passive income daily. The returns on your investment depend on the amount invested. Invest under 100 BUSD = 1.5%, 100-500 BUSD = 2%, 500 - 1000 BUSD =2.5%, 1000-5000 BUSD = 3% 5000+ BUSD = 3.5%. The more you invest, the higher the returns. Track your earnings and monitor the performance of the algorithm with our easy-to-use interface and detailed performance reports.",
  },
];

export default function HowToStart() {
  const [activeKey, setActiveKey] = useState("0");
  const onSelect = (activeIndex) => {
    const activeKey = activeIndex || "0";
    setActiveKey(activeKey);
  };

  return (
    <Container className="section-padding-2">
      <div className="text-center">
        <h2 className="section-title">How to start</h2>
        <h3 className="section-sub-title">
          Join OMEA now and experience the full potential of your investments
          with daily returns
        </h3>
      </div>

      <Row
        className="sub-section-m-t flex-column-reverse flex-lg-row"
        data-aos="fade-up"
      >
        <Col className="col-md-12 col-lg-6 mt-5 mt-lg-0">
          <div className="card-main is-small-card hts-img-container">
            {activeKey === "0" && (
              <img
                src={stepOneIcon}
                alt="icon"
                className="image"
                data-aos="fade-out"
                data-aos-delay="100"
              />
            )}
            {activeKey === "1" && (
              <img
                src={stepTwoIcon}
                alt="icon"
                className="image"
                data-aos="fade-out"
                data-aos-delay="100"
              />
            )}
            {activeKey === "2" && (
              <img
                src={stepThreeIcon}
                alt="icon"
                className="image"
                data-aos="fade-out"
                data-aos-delay="100"
              />
            )}
          </div>
        </Col>
        <Col className="col-md-12 col-lg-6">
          <Accordion
            activeKey={activeKey}
            flush
            onSelect={onSelect}
            className="accordion-container"
          >
            {steps.map(({ id, icon, title, description }) => (
              <Accordion.Item eventKey={id} key={id}>
                <Accordion.Header>
                  <div className="head-container">
                    <div className="accordion-header-icon">
                      <img src={icon} alt={title} />
                    </div>

                    <h5>{title}</h5>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
