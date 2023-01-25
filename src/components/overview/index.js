import React, { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import { Multicall } from "ethereum-multicall";
import { getRpcProvider } from "assets/utils/constants";
import { WalletUserContext } from "src/context";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "src/contract/constants";
import { parseMulticallResponse } from "./utils";
import "src/styles/dapp/overview.css";

const initialState = {
  isDataLoading: false,
  withdrawn: 0,
  investors: 0,
  roi: 0,
  APY: 0,
};

export default function Overview() {
  const {
    contextState: { account },
  } = WalletUserContext();

  const [{ isDataLoading, withdrawn, investors, roi, APY }, dispatch] =
    useReducer((state, payload) => ({ ...state, ...payload }), initialState);

  const loadOverviewData = async () => {
    try {
      const multicall = new Multicall({
        ethersProvider: getRpcProvider(),
        tryAggregate: true,
      });

      const contractCallContext = [
        {
          reference: "omea",
          contractAddress: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          calls: [
            {
              reference: "totalInvestors",
              methodName: "totalInvestors",
              methodParameters: [],
            },
            {
              reference: "getTotalRewards",
              methodName: "getTotalRewards",
              methodParameters: [],
            },
          ],
        },
      ];

      const { results: response } = await multicall.call(contractCallContext);
      const results = parseMulticallResponse(response);

      dispatch({ isDataLoading: false, ...results });
    } catch (err) {}
  };

  useEffect(() => {
    account && loadOverviewData();
  }, [account]);
  return (
    <Container className="overview-container">
      <h4 className="heading">Overview</h4>

      <div className="card-main overview-section">
        <div className="overview-item">
          <h5>TVL</h5>
          <p>100.2340,00</p>
        </div>
        <div className="overview-item">
          <h5>Withdrawn</h5>
          <p>{withdrawn}</p>
        </div>
        <div className="overview-item">
          <h5>Investors</h5>
          <p>{investors}</p>
        </div>
        <div className="overview-item">
          <h5>Your ROI</h5>
          <p>2.5%</p>
        </div>
        <div className="overview-item">
          <h5>Your APY</h5>
          <p> 912,5%</p>
        </div>
      </div>
    </Container>
  );
}
