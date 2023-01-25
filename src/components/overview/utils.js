import { ethers } from "ethers";

export const parseMulticallResponse = (response) => {
  return {
    investors: parseInt(
      response.omea.callsReturnContext[0].returnValues[0].hex
    ),
    withdrawn: ethers.utils.formatEther(
      parseInt(response.omea.callsReturnContext[1].returnValues[0].hex)
    ),
  };
};
