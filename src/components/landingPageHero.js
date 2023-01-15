import * as React from "react";
import "./App.css";
import binanceUsdBusdBla from "./assets/binanceUsdBusdBla.png";
import vector1 from "./assets/vector1.svg";
import binanceUsdBusdBla1 from "./assets/binanceUsdBusdBla1.png";
const App = () => {
  return (
    <div className="hero">
      <button className="frame">
        <span className="start-earning">Start Earning</span>
      </button>
      <span className="unlock-the-power-of">
        Unlock the power of AI and earn up to 3.5% fixed daily with OMEA
      </span>
      <span className="our-cutting-edge-alg">
        Our cutting-edge algorithm analyzes market trends and executes trades on
        your behalf, maximizing returns while minimizing risk. Join our
        community and start earning with OMEA today.
      </span>
      <img className="binance-usd-busd-bla" src={binanceUsdBusdBla1} />
      <div className="rectangle-1">
        <span className="tvl">TVL</span>
        <img className="vector-1" src={vector1} />
      </div>
      <img className="binance-usd-busd-bla-1" src={binanceUsdBusdBla1} />
      <img className="binance-usd-busd-bla-2" src={binanceUsdBusdBla} />
    </div>
  );
};
export default App;
