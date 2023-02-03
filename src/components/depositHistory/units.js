import { DappContextConsumer } from "pages/dapp/context";
import { useReducer } from "react";
import Countdown from "react-countdown";
import { WalletUserContext } from "src/context";
import {
  firstNPostiveNumbersAfterDecimal,
  getOmeaContractInstance,
} from "src/utils/constants";
import { timeConverter } from "src/utils/dateTimeHelper";
import { parseTransactionError } from "src/utils/helpers";

import {
  onPending,
  onRejected,
  onSuccess,
  onTxHash,
  TransactionModal,
} from "../transactionModal";

const _30_DAYS = 2592000;

export const RenderDepositHistory = ({
  index,
  amount,
  lockPeriod,
  isActive,
}) => {
  const [{ modalText, txStatus }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    {
      modalText: null,
      txStatus: null,
    }
  );

  const {
    contextState: { signer },
  } = WalletUserContext();

  const { setShouldRefresh } = DappContextConsumer();

  const onWithdraw = async (index) => {
    try {
      onPending({
        dispatch,
      });
      const omeaContractInstance = getOmeaContractInstance(signer);
      const tx = await omeaContractInstance.withdrawCapital(index);

      const txHash = tx.hash;

      onTxHash({
        dispatch,
        txHash,
      });
      await tx.wait();

      onSuccess({
        dispatch,
        txHash,
      });

      setShouldRefresh(txHash);
    } catch (err) {
      const reason = parseTransactionError(err);

      onRejected({
        dispatch,
        reason,
      });
    }
  };

  const onModalClose = () => {
    dispatch({
      modalText: null,
      txStatus: null,
    });
  };
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
            // disabled={!(lockPeriodInMiliseconds < Date.now())}
            onClick={onWithdraw.bind(this, index)}
          >
            <strong>Withdraw</strong>
          </button>
        )}
      </div>
      <hr className="deposit-hr" />

      <TransactionModal
        show={Boolean(modalText)}
        txStatus={txStatus}
        modalText={modalText}
        onClose={onModalClose}
      />
    </>
  );
};
