import React, { useEffect, useReducer } from "react";
import { WalletUserContext } from "src/context";
import "src/styles/dapp/bonusvouchers.css";
import { getOmeaContractInstance, getRpcProvider } from "src/utils/constants";
import { timeConverter } from "src/utils/dateTimeHelper";
import { parseBonusesInfo } from "src/utils/web3.helpers";
import LineOfDots from "./lineOfDots";

const initialState = {
  isDataLoading: false,
  bonusInfo: [],
};

export default function Bonusvouchers() {
  const [{ bonusInfo, isDataLoading }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );

  const {
    contextState: { account, ethersProvider },
  } = WalletUserContext();

  const loadBonusVochers = async () => {
    try {
      dispatch({ isDataLoading: true });
      const contractInstance = getOmeaContractInstance(
        ethersProvider || getRpcProvider()
      );

      const bonusOf = await contractInstance.bonusOf(account);

      const results = parseBonusesInfo(bonusOf);

      dispatch({ bonusInfo: results });
    } catch (err) {
      console.log({ err });
    }
    dispatch({ isDataLoading: false });
  };
  useEffect(() => {
    account && loadBonusVochers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);
  return (
    <div>
      <h4 className="heading"> Bonus vouchers</h4>
      <div className="card-main deposit-card">
        {!isDataLoading && !bonusInfo.length && <h5>No Bonus history</h5>}

        {bonusInfo.map((props, index) => (
          <BonusInfo {...props} key={index} />
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

const BonusInfo = ({ amount, createdDate }) => {
  return (
    <React.Fragment>
      <div className="withraw-section mt-2">
        <div className="withdraw-duration">
          <p>{timeConverter(createdDate)}</p>
        </div>

        <div className="deposit-amount">
          <p className="mb-0">{amount} BUSD</p>
        </div>
      </div>
      <hr className="deposit-hr" />
    </React.Fragment>
  );
};
