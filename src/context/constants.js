// export const ACCEPTED_CHAIN_ID = "0x38"; // for mainnet
export const ACCEPTED_CHAIN_ID = "0x61"; // for testnet

export const TX_STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

export const chainInfo = {
  "0x38": {
    blockExplorer: "https://bscscan.com",
    rpc: "https://bsc-dataseed1.binance.org",
    info: {
      chainId: 56,
      network: "binance",
    },
    configs: {
      chainId: "0x38",
      chainName: "Binance Smart Chain",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://bsc-dataseed.binance.org/"],
      blockExplorerUrls: ["https://bscscan.com/"],
    },
  },
  "0x61": {
    blockExplorer: "https://testnet.bscscan.com",
    rpc: "https://endpoints.omniatech.io/v1/bsc/testnet/public",
    info: {
      chainId: 97,
      network: "binancetest",
    },
    configs: {
      chainId: "0x61",
      chainName: "BSC Testnet",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      blockExplorerUrls: ["https://testnet.bscscan.com"],
    },
  },
};
