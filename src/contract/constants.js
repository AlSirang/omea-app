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
      CONTRACT_ADDRESS: "0x3cd665A541Ae0415E408E3d737c8d8c008a49D81",
      CONTRACT_ABI: OMEA_ABI,
    },

    busd: {
      CONTRACT_ADDRESS: "0xf21Acc3e567FD143cCfc95505d279A50AA7e1d9E",
      CONTRACT_ABI: BUSD_ABI,
    },
  },
};
