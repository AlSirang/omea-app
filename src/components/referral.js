import React, { useEffect, useReducer } from "react";
import Progress from "components/progressBar";
import { WalletUserContext } from "src/context";
import { getInvestorInfo } from "src/utils/web3.helpers";
import "src/styles/dapp/referral.css";

const initialState = {
  isDataLoading: false,
  totalLocked: 0,
  startTime: 0,
  lastCalculationDate: 0,
  claimableAmount: 0,
  claimedAmount: 0,
  referAmount: 0,
  referCount: 0,
};

export default function Referral() {
  const {
    contextState: { account },
  } = WalletUserContext();

  const [{ referAmount, referCount }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );

  const loadReferralData = async () => {
    try {
      dispatch({ isDataLoading: true });

      const results = await getInvestorInfo(account);
      dispatch({ ...results });
    } catch (err) {}

    dispatch({ isDataLoading: false });
  };

  useEffect(() => {
    account && loadReferralData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const onCopyLink = () => {
    const link = window.location.href + `?referral=${account}`;
    navigator.clipboard.writeText(link).then(
      function () {
        console.log("success");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  return (
    <div>
      <h4 className="heading">Referral</h4>
      <div className="card-main referral-card">
        <Progress progress={50} />

        <div className="referral-info">
          <div className="referral-info-inner">
            <div>
              <h6># Referred</h6>
              <p>{referCount}</p>
            </div>
            <div>
              <h6>Bonus</h6>
              <p>8%</p>
            </div>
            <div>
              <h6>Referral Earnings</h6>
              <p>{referAmount}</p>
            </div>
          </div>

          <div className="refferal-button">
            <button onClick={onCopyLink} className="btn btn-primary">
              <strong>Copy link</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
