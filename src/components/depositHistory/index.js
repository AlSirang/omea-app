import React, { useEffect, useReducer } from "react";
import { WalletUserContext } from "src/context";
import "src/styles/dapp/depositHistory.css";
import { getOmeaContractInstance, getRpcProvider } from "src/utils/constants";
import { parseDepositHistory } from "src/utils/helpers";
import { RenderDepositHistory } from "./units";

const initialState = {
  isDataLoading: false,
  depostInfo: [],
};

export default function DepositHistory() {
  const [{ depostInfo }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );

  const {
    contextState: { account, ethersProvider },
  } = WalletUserContext();

  const loadDepositHistory = async () => {
    try {
      console.log("loadDepositHistory");

      const contractInstance = getOmeaContractInstance(
        ethersProvider || getRpcProvider()
      );

      let depositIds = contractInstance.getOwnedDeposits(account);
      let withdrawPeriod = contractInstance.withdrawPeriod();

      [depositIds, withdrawPeriod] = await Promise.all([
        depositIds,
        withdrawPeriod,
      ]);

      const depostInfoPromise = depositIds.map((depostId) =>
        contractInstance.depositState(depostId)
      );

      const depostInfo = parseDepositHistory(
        await Promise.all(depostInfoPromise),
        parseInt(withdrawPeriod._hex)
      );

      console.log({ depostInfo });

      dispatch({
        depostInfo,
      });
    } catch (err) {
      console.log({ err });
    }
  };
  useEffect(() => {
    account && loadDepositHistory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);
  return (
    <div>
      <h4 className="heading">Deposit History</h4>
      <div className="card-main deposit-card">
        {depostInfo.map((props, index) => (
          <RenderDepositHistory {...props} key={index} />
        ))}
      </div>
    </div>
  );
}
