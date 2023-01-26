import { Container, Modal } from "react-bootstrap";
import LineOfDots from "./LineOfDots";
import { ACCEPTED_CHAIN_ID, chainInfo, TX_STATUS } from "src/context/constants";
import { shortenAddress } from "src/utils/constants";
import "src/styles/transactionModal.css";

export const TransactionModal = ({
  show,
  txStatus,
  modalText,
  onClose = () => null,
}) => {
  const isTxFulfilled = TX_STATUS.FULFILLED === txStatus;
  return (
    <>
      <Modal backdrop={false} show={show} dialogClassName="tx-modal">
        <Modal.Body>
          <div className="overlay-effect-container">
            <Container className="modal-container">
              <div className="modal-height content-wrapper">
                {isTxFulfilled && <div className="w-100 mb-2"></div>}

                <div dangerouslySetInnerHTML={{ __html: modalText }} />
                {TX_STATUS.PENDING === txStatus && (
                  <div className="mt-4 w-100">
                    <LineOfDots />
                  </div>
                )}

                {isTxFulfilled && <span></span>}
                <div className="mt-1">
                  {(true ||
                    TX_STATUS.REJECTED === txStatus ||
                    isTxFulfilled) && (
                    <button
                      className="button-overrides"
                      style={{ maxWidth: 150 }}
                      onClick={onClose}
                    >
                      close
                    </button>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const onTxHash = ({ dispatch = () => null, txHash = null }) => {
  const blockExplorerUrl = chainInfo[ACCEPTED_CHAIN_ID].blockExplorer;

  dispatch({
    modalText: `
    <h3 class="tx-modal-text">Waiting for transaction confirmation</h3>
    <p class="tx-modal-text tx-para">Transaction hash: <a target="_blank" rel="noreferrer" href="${blockExplorerUrl}/tx/${txHash}"> ${shortenAddress(
      txHash
    )} </a>
    </p>
    `,
  });
};

export const onPending = ({ dispatch = () => null }) => {
  dispatch({
    modalText: `
    <h3 class="tx-modal-text">Waiting for transaction Sign</h3>
    <p class="tx-modal-text tx-para">Please confrim signature in your wallet</p>
  `,
    txStatus: TX_STATUS.PENDING,
  });
};

export const onSuccess = ({ dispatch = () => null, txHash = null }) => {
  const blockExplorerUrl = chainInfo[ACCEPTED_CHAIN_ID].blockExplorer;

  dispatch({
    modalText: `
    <h3 class="tx-modal-text tx-para">Mint Successful, <a target="_blank" rel="noreferrer" href="${blockExplorerUrl}/tx/${txHash}"> ${shortenAddress(
      txHash
    )} </a>
    </h3>
  `,
    txStatus: TX_STATUS.FULFILLED,
  });
};

export const onRejected = ({ dispatch = () => null, reason = null }) => {
  dispatch({
    modalText: `
    <h3 class="tx-modal-text">Failed</h3>
    <p class="tx-modal-text tx-para">${reason}</p> 
  `,
    txStatus: TX_STATUS.REJECTED,
  });
};
