import { Multicall } from "ethereum-multicall";
import { ACCEPTED_CHAIN_ID } from "src/context/constants";
import { contractsInfo } from "src/contract/constants";
import { getRpcProvider } from "./constants";
import { parseReferralMulticallResponse } from "./helpers";

export const getInvestorInfo = async (account) => {
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
          reference: "investors",
          methodName: "investors",
          methodParameters: [account],
        },
      ],
    },
  ];

  const { results: response } = await multicall.call(contractCallContext);
  return parseReferralMulticallResponse(response);
};
