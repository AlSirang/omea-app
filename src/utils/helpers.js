import { ethers } from "ethers";

export const parseOverviewMulticallResponse = (response) => {
  const { callsReturnContext } = response.omea;
  return {
    investors: parseInt(callsReturnContext[0].returnValues[0].hex),
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
