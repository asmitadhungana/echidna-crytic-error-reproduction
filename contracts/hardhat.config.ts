import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-chai-matchers";
// import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "hardhat-dependency-compiler";

// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    cache: "./cache",
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    local: {
      url: "http://localhost:8545",
      timeout: 1000000,
      gasPrice: 8000000000,
    },
  },
  dependencyCompiler: {
    paths: ["@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol"],
    keep: true,
  },
};

export default config;
