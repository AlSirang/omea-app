import { Multicall } from "ethereum-multicall";
import { ethers } from "ethers";
import { ACCEPTED_CHAIN_ID } from "src/context/constants";
import { contractsInfo } from "src/contract/constants";
import { getBusdContractInstance, getRpcProvider } from "./constants";
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

export const getWalletAPR = async (account, ethersProvider) => {
  try {
    const multicall = new Multicall({
      ethersProvider: ethersProvider || getRpcProvider(),
      tryAggregate: true,
    });
    const { CONTRACT_ADDRESS, CONTRACT_ABI } =
      contractsInfo[ACCEPTED_CHAIN_ID].omea;

    const { totalLocked } = await getInvestorInfo(account);
    const totalLockedWei = ethers.utils.parseEther(totalLocked);

    const contractCallContext = [
      {
        reference: "omea",
        contractAddress: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        calls: [
          {
            reference: "getHPR",
            methodName: "getHPR",
            methodParameters: [totalLockedWei],
          },
        ],
      },
    ];
    const { results: response } = await multicall.call(contractCallContext);
    const { callsReturnContext } = response.omea;
    return parseInt(callsReturnContext[0].returnValues[0]) / 100;
  } catch (err) {
    return 0;
  }
};

export const getBalance = async (account) => {
  const busdContractInstance = getBusdContractInstance(getRpcProvider());

  return ethers.utils.formatEther(
    await busdContractInstance.balanceOf(account)
  );
};
