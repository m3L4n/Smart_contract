require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
    testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545", // the url of test blockchain where our smart contract will be deployed
      chainId: 97,
      gasPrice: 20000000000, // the gaz price maximum
      accounts: { mnemonic: process.env.mnemonic }, // our account
    },
    mainnet: {
      url: "https://bsc-dataseed.bnbchain.org/", // the url of blockchain
      chainId: 56,
      gasPrice: 20000000000,
      accounts: { mnemonic:process.env.mnemonic },
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
