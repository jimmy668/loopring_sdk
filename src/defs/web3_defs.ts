export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
}

export const NetworkContextName = "NETWORK";

export enum ConnectorNames {
  Unknown = "Unknown",
  MetaMask = "MetaMask",
  Network = "Network",
  WalletConnect = "WalletConnect",
  Coinbase = "Coinbase",
  Ledger = "Ledger",
  Trezor = "Trezor",
  Authereum = "Authereum",
}

export enum SigSuffix {
  Suffix02 = "02",
  Suffix03 = "03",
}

export const NFTFactory = {
  [ChainId.MAINNET]: "0xc852aC7aAe4b0f0a0Deb9e8A391ebA2047d80026",
  [ChainId.GOERLI]: "0xAE9826cc753a1B3eb81Ec64Ac1Ff007Ef8f3841C",
};
