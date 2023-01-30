import { ethers } from "ethers";
import { ACCEPTED_CHAIN_ID, chainInfo } from "src/context/constants";
import { contractsInfo } from "src/contract/constants";

export const shortenAddress = (address) =>
  `${address.slice(0, 5)}...${address.slice(-5)}`;

export const getRpcProvider = () => {
  const RPC_URL = chainInfo[ACCEPTED_CHAIN_ID].rpc;
  return new ethers.providers.JsonRpcProvider(RPC_URL);
};
export const getOmeaContractInstance = (provider) => {
  const { CONTRACT_ADDRESS, CONTRACT_ABI } =
    contractsInfo[ACCEPTED_CHAIN_ID].omea;
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
};

export const getBusdContractInstance = (provider) => {
  const { CONTRACT_ADDRESS, CONTRACT_ABI } =
    contractsInfo[ACCEPTED_CHAIN_ID].busd;
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
};

export const firstNPostiveNumbersAfterDecimal = (number, n = 2) => {
  const [num, decimals] = number.toString().split(".");
  let finalNumber = num;

  const newDecimals = [];
  let postiveDecimals = 0;

  if (decimals && decimals.length)
    for (let i = 0; i < decimals.length; i++) {
      if (postiveDecimals >= n) break;
      if (decimals[i] > 0) postiveDecimals += 1;
      newDecimals.push(decimals[i]);
    }

  if (newDecimals.length) finalNumber = `${num}.${newDecimals.join("")}`;

  return finalNumber;
};
