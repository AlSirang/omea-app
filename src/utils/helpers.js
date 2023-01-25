import { ethers } from "ethers";

export const parseOverviewMulticallResponse = (response) => {
  const { callsReturnContext } = response.omea;
  return {
    investors: parseInt(callsReturnContext[0].returnValues[0].hex),
    APY: parseInt(callsReturnContext[3].returnValues[0].hex) / 100, // convert from BPs to %age
    withdrawn: ethers.utils.formatEther(callsReturnContext[1].returnValues[0]),
    totalValueLocked: ethers.utils.formatEther(
      callsReturnContext[2].returnValues[0]
    ),
  };
};

export const parseReferralMulticallResponse = (response) => {
  const values = response.omea.callsReturnContext[0].returnValues;
  return {
    startTime: parseInt(values[3].hex),
    lastCalculationDate: parseInt(values[4].hex),
    referCount: parseInt(values[8].hex),
    totalLocked: ethers.utils.formatEther(values[2]),
    claimableAmount: ethers.utils.formatEther(values[5]),
    claimedAmount: ethers.utils.formatEther(values[6]),
    referAmount: ethers.utils.formatEther(values[7]),
  };
};
