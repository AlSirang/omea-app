import React, { useEffect, useReducer } from "react";
import LineOfDots from "components/lineOfDots";
import { RenderDepositHistory } from "./units";
import { WalletUserContext } from "src/context";
import { getOmeaContractInstance, getRpcProvider } from "src/utils/constants";
import { parseDepositHistory } from "src/utils/helpers";
import "src/styles/dapp/depositHistory.css";
import { DappContextConsumer } from "pages/dapp/context";

const initialState = {
  isDataLoading: false,
  depostInfo: [],
};

export default function DepositHistory() {
  const [{ depostInfo, isDataLoading }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );

  const {
    contextState: { account, ethersProvider },
  } = WalletUserContext();

  const { shouldRefresh } = DappContextConsumer();

  const loadDepositHistory = async () => {
    try {
      dispatch({ isDataLoading: true });
      const contractInstance = getOmeaContractInstance(
        ethersProvider || getRpcProvider()
      );

      const depositsOf = await contractInstance.depositsOf(account);
      const depostInfo = parseDepositHistory(depositsOf);

      dispatch({
        depostInfo,
      });
    } catch (err) {
      console.log({ err });
    }

    dispatch({ isDataLoading: false });
  };
  useEffect(() => {
    account && loadDepositHistory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, shouldRefresh]);
  return (
    <div>
      <h4 className="heading">Deposit History</h4>
      <div className="card-main deposit-card">
        {!isDataLoading && !depostInfo.length && <h5>No deposit history</h5>}
        {depostInfo.map((props, index) => (
          <RenderDepositHistory {...props} key={index} />
        ))}

        {isDataLoading && (
          <div className="h-100 d-flex align-items-center">
            <LineOfDots />
          </div>
        )}
      </div>
    </div>
  );
}
