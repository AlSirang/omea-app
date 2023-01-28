import React, { useEffect, useReducer } from "react";
import { WalletUserContext } from "src/context";
import {
  getBalance,
  getInvestorInfo,
  getWalletAPY,
} from "src/utils/web3.helpers";
import {
  firstNPostiveNumbersAfterDecimal,
  getBusdContractInstance,
  getOmeaContractInstance,
} from "src/utils/constants";
import { getReferralFromURL, parseTransactionError } from "src/utils/helpers";
import { ethers } from "ethers";
import { contractsInfo } from "src/contract/constants";
import { ACCEPTED_CHAIN_ID } from "src/context/constants";
import { DappContextConsumer } from "pages/dapp/context";
import {
  onPending,
  onRejected,
  onSuccess,
  onTxHash,
  TransactionModal,
} from "./transactionModal";
import icon from "assets/Icons/busdIcon.png";
import "src/styles/dapp/invest.css";

const initialState = {
  isDataLoading: false,
  totalLocked: 0,
  startTime: 0,
  lastCalculationDate: 0,
  claimableAmount: 0,
  claimedAmount: 0,
  walletBalance: 0,
  modalText: null,
  txStatus: null,
  APY: 0,
};

export default function InvestSection() {
  const [
    {
      totalLocked,
      claimableAmount,
      claimedAmount,
      walletBalance,
      modalText,
      txStatus,
      APY,
    },
    dispatch,
  ] = useReducer((state, payload) => ({ ...state, ...payload }), initialState);

  const {
    contextState: { account, signer },
  } = WalletUserContext();

  const { shouldRefresh, setShouldRefresh } = DappContextConsumer();

  const loadReferralData = async () => {
    try {
      dispatch({ isDataLoading: true });

      const [walletBalance, results] = await Promise.all([
        getBalance(account),
        getInvestorInfo(account),
      ]);

      dispatch({ ...results, walletBalance });

      const APY = await getWalletAPY(account);
      dispatch({ APY });
    } catch (err) {}

    dispatch({ isDataLoading: false });
  };
  useEffect(() => {
    account && loadReferralData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, shouldRefresh]);

  /**
   * @dev it will call claimAllReward function from contract
   */
  const OnclaimRewards = async () => {
    try {
      onPending({
        dispatch,
      });
      const contract = getOmeaContractInstance(signer);
      const tx = await contract.claimAllReward();
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

      await loadReferralData();
    } catch (err) {
      const reason = parseTransactionError(err);
      onRejected({
        dispatch,
        reason,
      });
    }
  };

  /**
   * @dev checks allowance. if allowance is not sufficient, then request to increase allowance then deposits in omea
   * @param {Event} event
   */
  const onDeposit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const amount = data.get("amount");

    try {
      onPending({
        dispatch,
      });
      const { CONTRACT_ADDRESS: omeaContract } =
        contractsInfo[ACCEPTED_CHAIN_ID].omea;

      const busdContractInstance = getBusdContractInstance(signer);
      const allowance = ethers.utils.formatEther(
        await busdContractInstance.allowance(account, omeaContract)
      );

      // check allowance
      if (allowance < Number(amount)) {
        // new allowance
        const allowanceToApprove = ethers.utils.parseEther(
          (1e10).toLocaleString("fullwide", {
            useGrouping: false,
          })
        );

        const busdContractInstance = getBusdContractInstance(signer);

        const tx = await busdContractInstance.approve(
          omeaContract,
          allowanceToApprove
        );

        const txHash = tx.hash;
        onTxHash({
          dispatch,
          txHash,
        });
        await tx.wait();
      }

      onPending({
        dispatch,
      });
      const referral = getReferralFromURL() || account;

      const amountInWei = ethers.utils.parseEther(amount);

      const omeaContractInstance = getOmeaContractInstance(signer);
      const tx = await omeaContractInstance.deposit(amountInWei, referral);
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

  return (
    <div>
      <h4 className="heading">Invest</h4>
      <div className="card-main invest-card">
        <div className="invest-head">
          <div className="invest-busd-icon">
            <img className="icon" src={icon} alt="busd icon" />
            <p className="invest-para">BUSD</p>
          </div>
          <div className="invest-info">
            <div>
              <h5 className="invest-title">Balance</h5>
              <p className="invest-para">{walletBalance}</p>
            </div>
            <div>
              <h5 className="invest-title">Staked</h5>
              <p className="invest-para">
                {firstNPostiveNumbersAfterDecimal(totalLocked, 2)}
              </p>
            </div>
          </div>
        </div>
        {/* section button*/}

        <form onSubmit={onDeposit}>
          <div className="invest-input">
            <input
              className="input-stake"
              name="amount"
              type="number"
              step="any"
              autoComplete="off"
              min="0"
              required
            />

            <div type="submit" className="invest-button">
              <button className="btn btn-lg btn-primary">
                <strong>Stake</strong>
              </button>
            </div>
          </div>
        </form>

        {/* grid */}
        <div className="invest-grid-section mt-5">
          <div className="invest-gird-inner">
            <h5 className="invest-title">Claimable reward</h5>
            <p className="invest-para">
              {firstNPostiveNumbersAfterDecimal(claimableAmount, 2)}
            </p>
          </div>
          <div className="invest-gird-inner">
            <h5 className="invest-title">Total reward</h5>
            <p className="invest-para">
              {firstNPostiveNumbersAfterDecimal(claimedAmount, 2)}
            </p>
          </div>
          <div className="invest-gird-inner">
            <h5 className="invest-title">BUSD per Day</h5>
            <p className="invest-para">
              {firstNPostiveNumbersAfterDecimal((APY / 365) * totalLocked)}
            </p>
          </div>
          <div className="invest-gird-inner">
            <h5 className="invest-title">BUSD per Hour</h5>
            <p className="invest-para">
              {firstNPostiveNumbersAfterDecimal((APY / 8760) * totalLocked)}
            </p>
          </div>
        </div>

        <div className="text-center mt-5">
          <button onClick={OnclaimRewards} className="btn btn-lg btn-primary">
            <strong>Claim reward</strong>
          </button>
        </div>
      </div>

      <TransactionModal
        show={Boolean(modalText)}
        txStatus={txStatus}
        modalText={modalText}
        onClose={onModalClose}
      />
    </div>
  );
}
