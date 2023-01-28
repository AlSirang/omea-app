// import { useNavigate } from "react-router-dom";
import { WalletUserContext } from "src/context";
import { shortenAddress } from "src/utils/constants";
import profileIcon from "assets/Icons/profile.svg";
import rocketIcon from "assets/Icons/rocket.svg";

export const DappButton = () => {
  const { walletConnect, contextState } = WalletUserContext();
  const { account, isWalletConnected } = contextState;

  return (
    <>
      {isWalletConnected && (
        <span className="d-flex align-items-center gap-2">
          <p className="m-0 font-bold">{shortenAddress(account)}</p>
          <img className="profile-icon" src={profileIcon} alt="profile icon" />
        </span>
      )}
      {!isWalletConnected && (
        <button onClick={walletConnect} className="btn btn-primary">
          <strong>Connect</strong>
        </button>
      )}
    </>
  );
};

export const LandingPageButton = () => {
  // const navigation = useNavigate();
  // const onEnterApp = () => {
  //   navigation("/dapp");
  // };
  return (
    // <button onClick={onEnterApp} className="btn btn-primary">
    //   <strong>Enter App</strong>
    // </button>

    <a
      href="https://t.me/omeaapp"
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      <strong>Join Community</strong>
    </a>
  );
};

export const Banner = () => {
  return (
    <div
      className="py-2 pt-3 d-flex align-items-center justify-content-center"
      style={{
        background: "#fff",
        color: "#000",
        gap: 10,
      }}
    >
      <img src={rocketIcon} alt="rocket" className="d-none d-md-block" />

      <div className="d-flex flex-column align-items-center justify-content-center ">
        <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
          OMEA IS LAUNCHING ON - Friday, Feb 3, 9:00 AM (CET){" "}
        </h3>

        <p className="m-0">Join our community to stay updated</p>
      </div>
      <img src={rocketIcon} alt="rocket" className="d-none d-md-block" />
    </div>
  );
};
