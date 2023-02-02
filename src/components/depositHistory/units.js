import { firstNPostiveNumbersAfterDecimal } from "src/utils/constants";
import { timeConverter } from "src/utils/dateTimeHelper";
import Countdown from "react-countdown";

const _30_DAYS = 2592000;

export const RenderDepositHistory = ({
  index,
  amount,
  lockPeriod,
  isActive,
}) => {
  const lockPeriodInMiliseconds = lockPeriod * 1000;
  return (
    <>
      <div className="deposit-card-head">
        <div className="deposit-date">
          <p>{timeConverter(lockPeriod - _30_DAYS)}</p>
        </div>
        <div className="deposit-amount">
          <p>{firstNPostiveNumbersAfterDecimal(amount)} </p>
          <p> BUSD </p>
        </div>
      </div>
      <div className="withraw-section">
        <div className="withdraw-duration">
          <div className="duration-item">
            <p>Withdraw Period</p>
            <Countdown date={lockPeriodInMiliseconds} />
          </div>
        </div>

        {isActive && (
          <button
            className="btn btn-secondary btn-withdraw"
            disabled={!(lockPeriodInMiliseconds < Date.now())}
          >
            <strong>Withdraw</strong>
          </button>
        )}
      </div>
      <hr className="deposit-hr" />
    </>
  );
};
