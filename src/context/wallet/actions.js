import { ethers } from "ethers";
import { loadWeb3Packages, switchNetwork } from "./utils";
import { TYPES } from "./reducer";
import { ACCEPTED_CHAIN_ID } from "../constants";

export default function actions(state, dispatch = () => {}) {
  const { provider, web3Modal, isWalletConnected } = state;

  // loads web packages
  const initializePackages = async () => {
    const { web3Modal } = await loadWeb3Packages();
    dispatch({
      type: TYPES.UPDATE_STATE,
      payload: {
        web3Modal,
        web3PackagesLoaded: true,
      },
    });
  };

  const getNetworkInfo = async (provider) => {
    if (!provider) return;

    const chainId = await provider.request({ method: "eth_chainId" });

    let isCorrectNetworkInfo = false;

    if (parseInt(chainId) === parseInt(ACCEPTED_CHAIN_ID))
      isCorrectNetworkInfo = true;

    dispatch({
      type: TYPES.UPDATE_STATE,
      payload: {
        connectedChainId: chainId,
        isCorrectChain: isCorrectNetworkInfo,
      },
    });

    if (!isCorrectNetworkInfo) return await switchNetwork(provider);
  };

  /**
   * @dev it will popup web3 modal and gets user wallet address once they select provider.
   * @returns void
   */
  const walletConnect = async () => {
    if (!web3Modal || isWalletConnected) return;
    const provider = await web3Modal.connect();

    const ethersProvider = new ethers.providers.Web3Provider(provider, "any");

    const signer = ethersProvider.getSigner();
    const account = await signer.getAddress();

    dispatch({
      type: TYPES.UPDATE_STATE,
      payload: {
        isWalletConnected: true,
        account,
        signer,
        provider,
        ethersProvider,
      },
    });

    // on wallet connect success get network info
    getNetworkInfo(provider);
  };

  const updateSinger = async () => {
    try {
      if (!provider) return;
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const account = await signer.getAddress();
      dispatch({
        type: TYPES.UPDATE_STATE,
        payload: {
          isWalletConnected: true,
          account,
          signer,
        },
      });
    } catch (err) {}
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
    dispatch({
      type: TYPES.UPDATE_STATE,
      payload: {
        account: null,
        isWalletConnected: false,
      },
    });
  };

  return {
    // custom actions
    initializePackages,
    walletConnect,
    disconnectWallet,
    getNetworkInfo,
    updateSinger,

    // navtie state and dispatch
    contextState: state,
    dispatch,
  };
}
