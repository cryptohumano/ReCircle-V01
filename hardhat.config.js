require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  networks: {
    moonbase: {
      url: "https://moonbase-rpc.dwellir.com",
      chainId: 1287,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
/**  etherscan: {
    apiKey: {
      moonbase: process.env.MOONSCAN_API_KEY
    }
  } */
}; 