import { firstNPostiveNumbersAfterDecimal } from "src/utils/constants";
import { timeConverter } from "src/utils/dateTimeHelper";
import Countdown from "react-countdown";

export const RenderDepositHistory = ({
  depositAmount,
  depositAt,
  isActive,
  withdrawPeriod,
}) => {
  withdrawPeriod *= 1000; // convert to milliseconds
  return (
    <>
      <div className="deposit-card-head">
        <div className="deposit-date">
          <p>{timeConverter(depositAt)}</p>
        </div>
        <div className="deposit-amount">
          <p>{firstNPostiveNumbersAfterDecimal(depositAmount, 2)} </p>
          <p> BUSD </p>
        </div>
      </div>
      {/* d  h m s */}
      <div className="withraw-section">
        <div className="withdraw-duration">
          <div className="duration-item">
            <p>Withdraw Period</p>
            <Countdown date={withdrawPeriod} />
            {/* <h6>d</h6>
            <p>0</p> */}
          </div>
          {/* <div className="duration-item">
            <h6>h</h6>
            <p>0</p>
          </div>
          <div className="duration-item">
            <h6>m</h6>
            <p>0</p>
          </div>
          <div className="duration-item">
            <h6>s</h6>
            <p>0</p>
          </div> */}
        </div>

        {isActive && withdrawPeriod < Date.now() && (
          <button className="btn btn-secondary btn-withdraw">
            <strong>Withdraw</strong>
          </button>
        )}
      </div>
      <hr className="deposit-hr" />
    </>
  );
};
