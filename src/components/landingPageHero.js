import { Col, Container, Row } from "react-bootstrap";
import busdIconOne from "assets/Icons/busdIcon.png";
import busdIconFlip from "assets/Icons/busdIconTilted.png";
import lineIcon from "assets/Icons/line.svg";
import "src/styles/landingPageHero.css";

export default function LandingPageHero() {
  return (
    <Container className="container-hero">
      <Row>
        <Col sm="12" md="6">
          <h1 className="hero-heading">
            Unlock the power of AI and earn up to 3.5% fixed daily with OMEA
          </h1>
          <p className="intro-para">
            Our cutting-edge algorithm analyzes market trends and executes
            trades on your behalf, maximizing returns while minimizing risk.
            Join our community and start earning with OMEA today.
          </p>

          <button className="btn btn-primary">
            <span className="start-earning">Start Earning</span>
          </button>
        </Col>

        <Col sm="12" md="6">
          <div className="card-container">
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
                <strong>TVL</strong>
              </h3>
              <h3>
                <strong>ROI</strong>
              </h3>
              <h3>
                <strong>APY</strong>
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

// const comp2 = () => {
//   import algorithm14 from "./assets/algorithm14.png";
//   import algorithm15 from "./assets/algorithm15.png";
//   import algorithm11 from "./assets/algorithm11.png";
//   import ellipse1 from "./assets/ellipse1.svg";
//   import algorithm12 from "./assets/algorithm12.png";
//   import algorithm1 from "./assets/algorithm1.png";
//   import algorithm13 from "./assets/algorithm13.png";
//   const App = () => {
//     return (
//       <div className="second-block">
//         <span className="title">OMEA&#39;s advanced features</span>
//         <span className="optimizing-performan">
//           Optimizing performance through AI and diversification to maximize
//           returns and minimize risks.
//         </span>
//         <div className="flex-container">
//           <div className="rectangle-1">
//             <div className="flex-container-1">
//               <img className="ellipse-1" src={ellipse1} />
//               <img className="algorithm-1" src={algorithm1} />
//             </div>
//             <span className="ai-powered-trading-a">
//               AI-powered trading algorithm
//             </span>
//             <span className="our-algorithm-analyz">
//               Our algorithm analyzes market trends and executes trades on your
//               behalf, maximizing returns while minimizing risk.
//             </span>
//           </div>
//           <div className="rectangle-1-1">
//             <div className="flex-container-2">
//               <img className="ellipse-14" src={ellipse1} />
//               <img className="algorithm-1-1" src={algorithm14} />
//             </div>
//             <span className="fund-pool-system">Fund pool system</span>
//             <span className="contribute-funds-to">
//               Contribute funds to the pool and earn a static daily reward in
//               proportion to your contribution.
//             </span>
//           </div>
//           <div className="rectangle-1-2">
//             <div className="flex-container-3">
//               <img className="ellipse-15" src={ellipse1} />
//               <img className="algorithm-1-2" src={algorithm15} />
//             </div>
//             <span className="safe-and-secure-plat">
//               Safe and secure platform
//             </span>
//             <span className="our-platform-utilize">
//               {" "}
//               Our platform utilizes blockchain technology to ensure transparency
//               and fairness.
//             </span>
//           </div>
//         </div>
//         <div className="flex-container-4">
//           <div className="rectangle-1-3">
//             <div className="flex-container-5">
//               <img className="ellipse-11" src={ellipse1} />
//               <img className="algorithm-1-3" src={algorithm11} />
//             </div>
//             <span className="detailed-performance">
//               Detailed performance reports
//             </span>
//             <span className="track-your-earnings">
//               Track your earnings and monitor the performance of the algorithm
//               with our easy-to-use interface and detailed performance reports
//             </span>
//           </div>
//           <div className="rectangle-1-4">
//             <div className="flex-container-6">
//               <img className="ellipse-12" src={ellipse1} />
//               <img className="algorithm-1-4" src={algorithm12} />
//             </div>
//             <span className="diversify-your-portf">
//               Diversify your portfolio
//             </span>
//             <span className="omea-gives-you-the-o">
//               OMEA gives you the opportunity to diversify your investments and
//               potentially earn higher returns than traditional investments
//             </span>
//           </div>
//           <div className="rectangle-1-5">
//             <div className="flex-container-7">
//               <img className="ellipse-13" src={ellipse1} />
//               <img className="algorithm-1-5" src={algorithm13} />
//             </div>
//             <span className="daily-returns">Daily returns</span>
//             <span className="omea-guarantees-dail">
//               OMEA guarantees daily returns on your investment with up to 3.5%
//               fixed daily returns, based on your locked principal. (more
//               information below)
//             </span>
//           </div>
//         </div>
//         <button className="frame">
//           <span className="start-earning">Start Earning</span>
//         </button>
//       </div>
//     );
//   };
// };

// import * as React from "react";
// import "./App.css";
// import rectangle1 from "./assets/rectangle1.svg";
// import userAvatar1 from "./assets/userAvatar1.png";
// import structure1 from "./assets/structure1.png";
// import stockExchangeApp1 from "./assets/stockExchangeApp1.png";
// import ellipse2 from "./assets/ellipse2.svg";
// import arrowDownSignToN from "./assets/arrowDownSignToN.png";
// const App = () => {
//   return (
//     <div className="how-to-start">
//       <span className="title">How to start</span>
//       <span className="join-omea-now-and-ex">
//         Join OMEA now and experience the full potential of your investments with
//         daily returns
//       </span>
//       <div className="flex-container">
//         <img className="rectangle-1" src={rectangle1} />
//         <div className="flex-container-1">
//           <div className="flex-container-2">
//             <img className="ellipse-2" src={ellipse2} />
//             <img className="user-avatar-1" src={userAvatar1} />
//           </div>
//           <div className="flex-container-3">
//             <img className="ellipse-3" src={ellipse2} />
//             <img className="structure-1" src={structure1} />
//           </div>
//           <div className="flex-container-4">
//             <img className="ellipse-4" src={ellipse2} />
//             <img className="stock-exchange-app-1" src={stockExchangeApp1} />
//           </div>
//         </div>
//         <div className="flex-container-5">
//           <span className="create-your-account">Create your account</span>
//           <span className="getting-started-with">
//             Getting started with OMEA is easy. Simply connect your wallet and
//             you are good to go. We support almost all wallets, so you can easily
//             start investing with no minimum deposit
//           </span>
//           <span className="invest-into-the-fund">
//             Invest into the funding pool
//           </span>
//           <span className="approve-busd-and-sta">
//             Approve BUSD and start investing with no minimum deposit. Your
//             investment will be used by our AI-powered trading algorithm to
//             execute trades and generate returns.
//           </span>
//           <span className="earn-daily-returns-p">
//             Earn daily returns passively
//           </span>
//         </div>
//         <div className="flex-container-6">
//           <img className="arrow-down-sign-to-n" src={arrowDownSignToN} />
//           <img className="arrow-down-sign-to-n-1" src={arrowDownSignToN} />
//           <img className="arrow-down-sign-to-n-2" src={arrowDownSignToN} />
//         </div>
//       </div>
//       <span className="with-omea-you-can-ea">
//         With OMEA, you can earn passive income daily. The returns on your{" "}
//       </span>
//     </div>
//   );
// };
////////////////////////////////////////////////////////////////////////////////////////

// import * as React from "react";
// import "./App.css";
// const App = () => {
//   return (
//     <div className="third-block">
//       <span className="title">Road to be the GOAT</span>
//       <span className="charting-our-path-to">
//         Charting our path to becoming the leading AI-powered trading platform
//       </span>
//       <div className="flex-container">
//         <div className="rectangle-1">
//           <div className="flex-container-1">
//             <span>Q1 2023</span>
//             <button className="rectangle-2">on track</button>
//           </div>
//           <span className="concept-development">
//             Concept development Whitepaper development Alpha Testing on testnets
//             Beta public launch to mainnet Reach a TVL of 100k BUSD Reach a
//             Community of 2k Founding Team DOXXING
//           </span>
//         </div>
//         <div className="rectangle-1-1">
//           <div className="flex-container-2">
//             <span>Q2 2023</span>
//             <button className="rectangle-2-1">not started</button>
//           </div>
//           <span className="partnerships-and-int">
//             Partnerships and integration improved algorithm Beta-release of the
//             OMEA-bot NFT Token launch (OMEA-Access) Reach a TVL of 2M BUSD Reach
//             a Community of 10k Meet and Greet (Location TBD)
//           </span>
//         </div>
//         <div className="rectangle-2-2">
//           <div className="rectangle-2-3">
//             <div className="flex-container-3">
//               <span className="q-3-2023">Q3 2023</span>
//               <div className="rectangle-2-4">not started</div>
//             </div>
//             <span className="partnerships-launch">
//               Partnerships Launch of mobile app Launch of OMEA-Token NFT Token
//               launch (OMEA-Access) Reach a TVL of 10M BUSD Reach a Community of
//               500k
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;
