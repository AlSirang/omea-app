import { ethers } from "ethers";

export const parseOverviewMulticallResponse = (response) => {
  const { returnValues } = response.omea.callsReturnContext[0];

  return {
    totalInvestors: parseInt(returnValues[0].hex),
    totalValueLocked: ethers.utils.formatEther(returnValues[1]),
    totalRewardsDistributed: ethers.utils.formatEther(returnValues[2]),
  };
};

export const parseReferralMulticallResponse = (response) => {
  const values = response.omea.callsReturnContext[0].returnValues;

  return {
    totalLocked: ethers.utils.formatEther(values[2]),
    claimableAmount: ethers.utils.formatEther(values[4]),
    claimedAmount: ethers.utils.formatEther(values[5]),
    referAmount: ethers.utils.formatEther(values[6]),
    referCount: parseInt(values[7].hex),
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

export const parseDepositHistory = (
  response = [],
  withdrawPeriod = 2592000
) => {
  return response.map(({ depositAmount, depositAt, state }) => {
    const _depositAt = parseInt(depositAt._hex);

    return {
      depositAmount: ethers.utils.formatEther(depositAmount),
      withdrawPeriod: _depositAt + withdrawPeriod,
      depositAt: _depositAt,
      isActive: state,
    };
  });
};

export const getLevelInfo = (progress) => {
  if (progress <= 10)
    return {
      now: progress,
      level: 1,
      max: 11,
      bonus: 8,
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
