import { ethers } from "ethers";

export const parseOverviewMulticallResponse = (response) => {
  const { returnValues } = response.omea.callsReturnContext[0];
  const totalValueLocked = ethers.utils.formatEther(
    response.omea.callsReturnContext[1].returnValues[0]
  );

  return {
    totalInvestors: formateBigNumber(returnValues[0].hex),
    totalRewardsDistributed: ethers.utils.formatEther(returnValues[2]),
    totalValueLocked,
  };
};

export const parseReferralMulticallResponse = (response) => {
  const values = response.omea.callsReturnContext[0].returnValues;
  const claimableAmount = response.omea.callsReturnContext[1].returnValues;

  console.log(formateBigNumber(values[2].hex));
  return {
    totalLocked: formateBigNumber(values[2].hex),
    claimableAmount: ethers.utils.formatEther(claimableAmount[0]),
    claimedAmount: ethers.utils.formatEther(values[5]),
    referAmount: ethers.utils.formatEther(values[6]),
    referCount: formateBigNumber(values[7].hex),
    bonus: formateBigNumber(values[8].hex),
  };
};

export const parseTransactionError = (error) => {
  const {
    error: { reason },
  } = { error };
  return reason || "Transaction failed";
};

export const getReferralFromURL = () => {
  const params = new URL(document.location).searchParams;

  return params.get("referral");
};

export const parseDepositHistory = (response = []) => {
  return response.map(({ amount, index, lockPeriod, status }) => {
    return {
      index: index.toString(),
      amount: ethers.utils.formatEther(amount),
      lockPeriod: lockPeriod.toString(),
      isActive: status,
    };
  });
};

export const formateBigNumber = (bigNumber) => {
  return parseInt(bigNumber).toLocaleString("fullwide", { useGrouping: false });
};

export const getLevelInfo = (progress) => {
  if (progress <= 10)
    return {
      now: progress,
      level: 1,
      max: 11,
      bonus: progress > 0 ? 8 : 0,
    };
  if (progress <= 30)
    return {
      level: 2,
      max: 31,
      bonus: 9,
      now: progress,
    };
  return {
    level: 3,
    max: 30,
    bonus: 10,
    now: 30,
  };
};
