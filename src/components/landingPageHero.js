import { Container } from "react-bootstrap";
import busdIconOne from "assets/Icons/busdIcon.png";
import busdIconFlip from "assets/Icons/busdIconTilted.png";
import lineIcon from "assets/Icons/line.svg";
import "src/styles/landingPageHero.css";

export default function LandingPageHero() {
  return (
    <Container className="container-hero section-padding banner-height">
      <div className="grid">
        <div className="grid-col">
          <div data-aos="fade-up" data-aos-delay="500">
            <h1 className="hero-heading">
              Unlock the power of AI and earn up to 3.5% fixed daily with OMEA
            </h1>
            <p className="intro-para">
              Our cutting-edge algorithm analyzes market trends and executes
              trades on your behalf, maximizing returns while minimizing risk.
              Join our community and start earning with OMEA today.
            </p>

            <div className="button-container">
              <a
                href="https://t.me/omeaapp"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg btn-primary"
              >
                <strong>Join Community</strong>
              </a>
            </div>
          </div>
        </div>

        <div className="grid-col">
          <div
            className="card-container card-main"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              className="busd-icon-top card-icon busd-icon"
              src={busdIconOne}
              alt="busd icon"
            />
            <img
              className="busd-icon-bottom-left card-icon busd-icon"
              src={busdIconFlip}
              alt="busd icon"
            />
            <img
              className="busd-icon-bottom-right card-icon busd-icon"
              src={busdIconFlip}
              alt="busd icon"
            />
            <div className="line-container">
              <img
                className="vector-1 card-icon  line"
                src={lineIcon}
                alt="line card-icon "
              />
            </div>
            <div className="card-text">
              <h3>
                <strong>Daily ROI: 1.5%- 3.5%</strong>
              </h3>
              <h3>
                <strong>APY: 547% - 1277%</strong>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
