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
        {
          reference: "getClaimableAmount",
          methodName: "getClaimableAmount",
          methodParameters: [account],
        },
      ],
    },
  ];

  const { results: response } = await multicall.call(contractCallContext);
  return parseReferralMulticallResponse(response);
};

export const getWalletHPR = async (account, ethersProvider) => {
  try {
    const multicall = new Multicall({
      ethersProvider: ethersProvider || getRpcProvider(),
      tryAggregate: true,
    });
    const { CONTRACT_ADDRESS, CONTRACT_ABI } =
      contractsInfo[ACCEPTED_CHAIN_ID].omea;

    const { totalLocked } = await getInvestorInfo(account);

    const contractCallContext = [
      {
        reference: "omea",
        contractAddress: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        calls: [
          {
            reference: "getHPR",
            methodName: "getHPR",
            methodParameters: [totalLocked.toString()],
          },
        ],
      },
    ];
    const { results: response } = await multicall.call(contractCallContext);
    const { callsReturnContext } = response.omea;

    return parseInt(callsReturnContext[0].returnValues[0]) / 100;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export const getBalance = async (account) => {
  const busdContractInstance = getBusdContractInstance(getRpcProvider());

  return ethers.utils.formatEther(
    await busdContractInstance.balanceOf(account)
  );
};

export const parseBonusesInfo = (info = []) => {
  return info.map(({ amount, createdDate }) => ({
    amount: ethers.utils.formatEther(amount),
    createdDate: createdDate.toString(),
  }));
};
