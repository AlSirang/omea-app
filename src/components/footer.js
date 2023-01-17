import { Container } from "react-bootstrap";
import etherscanIcon from "assets/Icons/etherscan-logo.png";
import twitterIcon from "assets/Icons/twitter.png";
import telegramIcon from "assets/Icons/telegram.png";
import "src/styles/footer.css";

export default function Footer() {
  return (
    <footer className="py-5 mt-5 ">
      <Container>
        <h5 className="text-center ">
          OMEA © Copyright {new Date().getFullYear()}. All rights reserved
        </h5>
        <div className="footer-icons">
          <a
            href="https://twitter.com/omeaapp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} className="footer-icon" alt="twitter icon" />
          </a>

          <a href="https://bscscan.com" target="_blank" rel="noreferrer">
            <img
              src={etherscanIcon}
              className="footer-icon"
              alt="etherscan icon"
            />
          </a>

          <a href="https://t.me/omeaapp" target="_blank" rel="noreferrer">
            <img
              src={telegramIcon}
              className="footer-icon"
              alt="telegram icon"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
