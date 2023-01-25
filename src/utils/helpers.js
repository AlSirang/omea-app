import { ethers } from "ethers";

export const parseOverviewMulticallResponse = (response) => {
  return {
    investors: parseInt(
      response.omea.callsReturnContext[0].returnValues[0].hex
    ),
    withdrawn: ethers.utils.formatEther(
      parseInt(response.omea.callsReturnContext[1].returnValues[0].hex)
    ),
    totalValueLocked: ethers.utils.formatEther(
      parseInt(response.omea.callsReturnContext[1].returnValues[0].hex)
    ),
  };
};

export const parseReferralMulticallResponse = (response) => {
  const values = response.omea.callsReturnContext[0].returnValues;
  return {
    totalLocked: ethers.utils.formatEther(parseInt(values[2].hex)),
    startTime: parseInt(values[3].hex),
    lastCalculationDate: parseInt(values[4].hex),
    claimableAmount: ethers.utils.formatEther(parseInt(values[5].hex)),
    claimedAmount: ethers.utils.formatEther(parseInt(values[6].hex)),
    referAmount: ethers.utils.formatEther(parseInt(values[7].hex)),
    referCount: parseInt(values[8].hex),
  };
};
