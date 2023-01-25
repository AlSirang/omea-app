import { ACCEPTED_CHAIN_ID, chainInfo } from "../constants";

// dynamic import to reduce bundle size
export const loadWeb3Packages = async () => {
  let Web3Modal = import(
    "web3modal"
    /* webpackChunkName: "web3modal" */
  );
  let WalletConnectProvider = import(
    "@walletconnect/web3-provider"
    /* webpackChunkName: "web3-provider" */
  );

  [{ default: Web3Modal }, { default: WalletConnectProvider }] =
    await Promise.all([Web3Modal, WalletConnectProvider]);

  const networkInfo = chainInfo[ACCEPTED_CHAIN_ID].info;
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        ...networkInfo,
        infuraId: "12803c9f5919455ba1ac0be83197d502", // required
        rpc: {
          56: "https://bsc-dataseed.binance.org/", // BSC
          97: "https://data-seed-prebsc-2-s1.binance.org:8545", // BSC Testnet
          137: "https://polygon-mainnet.g.alchemy.com/v2/ma3nP6ZZCpI81yCWIBz2fPOD2BNBrVP5", // Polygon
          250: "https://rpc.ftm.tools", // Fantom
          4002: "https://rpc.testnet.fantom.network", // Fantom Testnet
          42161: "https://arb1.arbitrum.io/rpc", // Arbitrum
          80001: "https://rpc-mumbai.matic.today", // Mumbai
          421611: "https://rinkeby.arbitrum.io/rpc", // Arbitrum Testnet Rinkeby
        },
      },
    },
  };

  const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  });

  return {
    web3Modal,
  };
};

export const switchNetwork = async (provider) => {
  if (!provider) return;
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: ACCEPTED_CHAIN_ID }],
    });
  } catch (err) {
    // if no chain found request to add
    if (err.code === 4902 || /Unrecognized chain ID/.test(err.message || err))
      return await provider.request({
        method: "wallet_addEthereumChain",
        params: [chainInfo[ACCEPTED_CHAIN_ID].configs],
      });
    console.log("switch Network", err);
  }
};
