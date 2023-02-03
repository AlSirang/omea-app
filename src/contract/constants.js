import OMEA_ABI from "assets/abi/omea.abi.json";
import BUSD_ABI from "assets/abi/busd.abi.json";

export const contractsInfo = {
  // mainnet main info
  "0x38": {
    omea: {
      CONTRACT_ADDRESS: "",
      CONTRACT_ABI: OMEA_ABI,
    },

    busd: {
      CONTRACT_ADDRESS: "",
      CONTRACT_ABI: BUSD_ABI,
    },
  },

  // testnet contracts info
  "0x61": {
    omea: {
      CONTRACT_ADDRESS: "0x6193A6fd1Fab85252F89fa9cB0fcBcD69E15872c",
      CONTRACT_ABI: OMEA_ABI,
    },

    busd: {
      CONTRACT_ADDRESS: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
      CONTRACT_ABI: BUSD_ABI,
    },
  },

  "0x5": {
    omea: {
      CONTRACT_ADDRESS: "0x542B1a7d51d55f789E942E64B29bA8FC8a6b5b1d",
      CONTRACT_ABI: OMEA_ABI,
    },

    busd: {
      CONTRACT_ADDRESS: "0xcF19A73Aa9500c98a5F1B34DA5770e0054A34874",
      CONTRACT_ABI: BUSD_ABI,
    },
  },
};
