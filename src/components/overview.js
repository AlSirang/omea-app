import React, { useEffect, useReducer, useRef } from "react";
import { Container } from "react-bootstrap";
import { Multicall } from "ethereum-multicall";
import {
  firstNPostiveNumbersAfterDecimal,
  getRpcProvider,
} from "src/utils/constants";
import { WalletUserContext } from "src/context";
import { contractsInfo } from "src/contract/constants";
import { parseOverviewMulticallResponse } from "src/utils/helpers";
import "src/styles/dapp/overview.css";
import { getInvestorInfo } from "src/utils/web3.helpers";
import { ethers } from "ethers";
import { ACCEPTED_CHAIN_ID } from "src/context/constants";

const initialState = {
  isDataLoading: false,
  totalValueLocked: 0,
  withdrawn: 0,
  investors: 0,
  APY: 0,
};

export default function Overview() {
  const isComponentMounted = useRef(false);
  const {
    contextState: { account, ethersProvider },
  } = WalletUserContext();

  const [{ APY, totalValueLocked, withdrawn, investors }, dispatch] =
    useReducer((state, payload) => ({ ...state, ...payload }), initialState);

  const loadWalletData = async () => {
    try {
      const { totalLocked: _totalLocked } = await getInvestorInfo(account);
      const totalLocked = ethers.utils.parseEther(_totalLocked.toString());
      const multicall = new Multicall({
        ethersProvider: ethersProvider || getRpcProvider(),
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
              reference: "getApr",
              methodName: "getApr",
              methodParameters: [totalLocked],
            },
          ],
        },
      ];
      const { results: response } = await multicall.call(contractCallContext);
      const { callsReturnContext } = response.omea;

      dispatch({
        APY: parseInt(callsReturnContext[0].returnValues[0].hex) / 100, // convert from BPs to %age
      });
    } catch (err) {}
  };

  const loadOverviewData = async () => {
    try {
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
              reference: "totalInvestors",
              methodName: "totalInvestors",
              methodParameters: [],
            },
            {
              reference: "getTotalRewards",
              methodName: "getTotalRewards",
              methodParameters: [],
            },
            {
              reference: "getBalance",
              methodName: "getBalance",
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
  }, [account]);

  return (
    <Container className="overview-container">
      <h4 className="heading">Overview</h4>

      <div className="card-main overview-section">
        <div className="overview-item">
          <h5>TVL</h5>
          <p>{firstNPostiveNumbersAfterDecimal(totalValueLocked, 2)}</p>
        </div>
        <div className="overview-item">
          <h5>Withdrawn</h5>
          <p>{firstNPostiveNumbersAfterDecimal(withdrawn, 2)}</p>
        </div>
        <div className="overview-item">
          <h5>Investors</h5>
          <p>{investors}</p>
        </div>
        <div className="overview-item">
          <h5>Your ROI</h5>
          <p>{firstNPostiveNumbersAfterDecimal(APY / 365, 2)}%</p>
        </div>
        <div className="overview-item">
          <h5>Your APY</h5>
          <p> {firstNPostiveNumbersAfterDecimal(APY, 2)}%</p>
        </div>
      </div>
    </Container>
  );
}
