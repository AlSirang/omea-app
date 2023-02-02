import React, { useEffect, useReducer, useRef } from "react";
import { Container } from "react-bootstrap";
import { Multicall } from "ethereum-multicall";
import {
  firstNPostiveNumbersAfterDecimal,
  getRpcProvider,
} from "src/utils/constants";
import { contractsInfo } from "src/contract/constants";
import { parseOverviewMulticallResponse } from "src/utils/helpers";
import { getWalletAPR } from "src/utils/web3.helpers";
import { ACCEPTED_CHAIN_ID } from "src/context/constants";
import { WalletUserContext } from "src/context";
import { DappContextConsumer } from "pages/dapp/context";
import "src/styles/dapp/overview.css";

const initialState = {
  isDataLoading: false,
  totalInvestors: 0,
  totalValueLocked: 0,
  totalRewardsDistributed: 0,
  HPR: 0,
};

export default function Overview() {
  const isComponentMounted = useRef(false);
  const {
    contextState: { account, ethersProvider },
  } = WalletUserContext();

  const { shouldRefresh } = DappContextConsumer();

  const [
    { HPR, totalInvestors, totalValueLocked, totalRewardsDistributed },
    dispatch,
  ] = useReducer((state, payload) => ({ ...state, ...payload }), initialState);

  const loadWalletData = async () => {
    try {
      const HPR = await getWalletAPR(account, ethersProvider);
      dispatch({
        HPR,
      });
    } catch (err) {}
  };

  const loadOverviewData = async () => {
    try {
      dispatch({ isDataLoading: true });
      const multicall = new Multicall({
        ethersProvider: getRpcProvider(),
        tryAggregate: true,
      });

      const { CONTRACT_ADDRESS, CONTRACT_ABI } =
        contractsInfo[ACCEPTED_CHAIN_ID].omea;
      const contractCallContext = [
        {
          reference: "omea",
          contractAddress: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          calls: [
            {
              reference: "getInvestmentInfo",
              methodName: "getInvestmentInfo",
              methodParameters: [],
            },
          ],
        },
      ];

      const { results: response } = await multicall.call(contractCallContext);

      const results = parseOverviewMulticallResponse(response);

      dispatch({ ...results });
    } catch (err) {
      console.log(err);
    }
    dispatch({ isDataLoading: false });
  };

  useEffect(() => {
    account && loadWalletData();

    if (!isComponentMounted.current) {
      isComponentMounted.current = true;
      loadOverviewData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, shouldRefresh]);

  return (
    <Container className="overview-container">
      <h4 className="heading">Overview</h4>

      <div className="card-main overview-section">
        <div className="overview-item">
          <h5>TVL</h5>
          <p>{firstNPostiveNumbersAfterDecimal(totalValueLocked)}</p>
        </div>
        <div className="overview-item">
          <h5>Withdrawn</h5>
          <p>{firstNPostiveNumbersAfterDecimal(totalRewardsDistributed)}</p>
        </div>
        <div className="overview-item">
          <h5>Investors</h5>
          <p>{totalInvestors}</p>
        </div>
        <div className="overview-item">
          <h5>Daily ROI</h5>
          <p>{firstNPostiveNumbersAfterDecimal(HPR * 24)}%</p>
        </div>
        <div className="overview-item">
          <h5>Your APY</h5>
          <p> {firstNPostiveNumbersAfterDecimal(HPR * 365)}%</p>
        </div>
      </div>
    </Container>
  );
}
