export const TYPES = {
  UPDATE_STATE: "UPDATE_STATE",
};
// state of the application
export const initialState = {
  account: null,
  isWalletConnected: false,

  connectedChainId: null,
  isCorrectChain: false,

  web3Modal: null,
  web3PackagesLoaded: false,

  singer: null,
  provider: null,
  ethersProvider: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case TYPES.UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
