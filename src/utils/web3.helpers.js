import { Multicall } from "ethereum-multicall";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "src/contract/constants";
import { getRpcProvider } from "./constants";
import { parseReferralMulticallResponse } from "./helpers";

export const loadInvestorInfo = async (account) => {
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
