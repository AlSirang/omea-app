import { useEffect } from "react";
import { WalletUserContext } from "src/context";
import { TYPES } from "src/context/wallet/reducer";

export const useOnAppLoad = () => {
  const { initializePackages } = WalletUserContext();

  useEffect(() => {
    initializePackages();
    // eslint-disable-next-line
  }, []);
};

/**
 * @dev it will listen to provder events and update the states.
 * @returns void
 */
export const useOnProviderChange = () => {
  const {
    getNetworkInfo,
    updateSinger,
    dispatch,
    contextState: { provider },
  } = WalletUserContext();

  useEffect(() => {
    provider &&
      (() => {
        // Subscribe to accounts change

        provider.on("accountsChanged", (accounts) => {
          if (accounts && accounts.length)
            return dispatch({
              type: TYPES.UPDATE_STATE,
              payload: { account: accounts[0], isWalletConnected: true },
            });
          dispatch({
            type: TYPES.UPDATE_STATE,
            payload: {
              account: null,
              isWalletConnected: false,
            },
          });
        });

        // Subscribe to chainId change
        provider.on("chainChanged", () => {
          getNetworkInfo(provider);
          updateSinger();
        });
      })();

    // eslint-disable-next-line
  }, [provider]);
};

// checks the wallet connection status and update state if wallet is connected on page refresh
// export const useCheckWalletConnection = (shouldCheck = false) => {
//   const hasBeenChecked = useRef(false);

//   const {
//     walletConnect,
//     contextState: { web3PackagesLoaded },
//   } = Web3UserContext();

//   useEffect(() => {
//     const isConnected = localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER");
//     if (
//       shouldCheck &&
//       web3PackagesLoaded &&
//       isConnected &&
//       !hasBeenChecked.current
//     ) {
//       walletConnect();
//       hasBeenChecked.current = true;
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [web3PackagesLoaded, shouldCheck]);
// };
