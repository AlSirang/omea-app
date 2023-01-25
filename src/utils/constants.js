import { ethers } from "ethers";
import { ACCEPTED_CHAIN_ID, chainInfo } from "src/context/constants";

export const getRpcProvider = () => {
  const RPC_URL = chainInfo[ACCEPTED_CHAIN_ID].rpc;
  return new ethers.providers.JsonRpcProvider(RPC_URL);
};

export const firstNPostiveNumbersAfterDecimal = (number, n = 4) => {
  const [num, decimals] = number.toString().split(".");
  let finalNumber = num;

  const newDecimals = [];
  let postiveDecimals = 0;

  if (decimals && decimals.length)
    for (let i = 0; i < decimals.length; i++) {
      if (postiveDecimals === n) break;
      if (decimals[i] > 0) postiveDecimals += 1;
      newDecimals.push(decimals[i]);
    }

  if (newDecimals.length) finalNumber = `${num}.${newDecimals.join("")}`;

  return finalNumber;
};
