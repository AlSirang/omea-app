import { ethers } from "ethers";
import { ACCEPTED_CHAIN_ID, chainInfo } from "src/context/constants";

export const getRpcProvider = () => {
  const RPC_URL = chainInfo[ACCEPTED_CHAIN_ID].rpc;
  return new ethers.providers.JsonRpcProvider(RPC_URL);
};
