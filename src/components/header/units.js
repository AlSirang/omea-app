import { useNavigate } from "react-router-dom";
import { WalletUserContext } from "src/context";
import { shortenAddress } from "src/utils/constants";
import profileIcon from "assets/Icons/profile.svg";

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
  const navigation = useNavigate();
  const onEnterApp = () => {
    navigation("/dapp");
  };
  return (
    <button onClick={onEnterApp} className="btn btn-primary">
      <strong>Enter App</strong>
    </button>
  );
};
