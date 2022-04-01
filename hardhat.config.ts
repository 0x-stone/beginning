import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_LINK = process.env.INFURA_LINK;

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
// task("accounts", "Prints the list of accounts", async () => {
//   const accounts = await ethers.getSigners();

//   for (const account of accounts) {
//     console.log(await account.getAddress());
//   }
// });

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  networks: {
    ropsten: {
      url: process.env.INFURA_LINK,
      accounts: [process.env.PRIVATE_KEY]
    },
    hardhat: {
      forking: {
        url: INFURA_LINK,
        blockNumber: 13627411,
      },
      allowUnlimitedContractSize: true,
      accounts: [
        {
          privateKey: PRIVATE_KEY,
          balance: "10000000000000000000000",
        },
      ],
    },
  },
  paths: {
    artifacts: "./artifacts",
    tests: "./e2e",
  },
  solidity: {
    version: "0.6.12",
    evmVersion: "london",
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  mocha: {
    timeout: 1000000,
    spec: ["e2e/**/*.spec.ts"],
  },
  typechain: {
    outDir: "./typechain",
    target: "ethers-v5",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ["externalArtifacts/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  etherscan: {
    apiKey: {
      ropsten: process.env.API_KEY,
    }
  }
};
