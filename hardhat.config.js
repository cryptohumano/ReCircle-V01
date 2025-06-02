require("@nomicfoundation/hardhat-toolbox");
require("@parity/hardhat-polkadot");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      viaIR: true
    }
  },
  resolc: {
    version: '1.5.2',
    compilerSource: 'npm',
    settings: {
      optimizer: {
        enabled: true,
        parameters: 'z',
        fallbackOz: true,
        runs: 200,
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    hardhat: {
      polkavm: true,
      nodeConfig: {
        nodeBinaryPath: 'http://192.168.100.30/opt/hardhat-pvm/polkadot-sdk/target/release/substrate-node',
        rpcPort: 8000,
        dev: true,
      },
      adapterConfig: {
        adapterBinaryPath: 'http://192.168.100.30/opt/hardhat-pvm/polkadot-sdk/target/release/eth-rpc',
        dev: true,
      },
    },
    localNode: {
      polkavm: true,
      url: "http://192.168.100.30:8545",
      chainId: 420420420.,
      accounts: [process.env.PRIVATE_KEY_LOCAL]
    },
    moonbase: {
      url: "https://moonbase-rpc.dwellir.com",
      chainId: 1287,
      accounts: [process.env.PRIVATE_KEY]
    },
    passetHub: {
      polkavm: true,
      url: "https://testnet-passet-hub-eth-rpc.polkadot.io",
      chainId: 420420421,
      accounts: [process.env.PRIVATE_KEY_PASEO]
    }
  }
};
/**  etherscan: {
    apiKey: {
      moonbase: process.env.MOONSCAN_API_KEY
    }
  } */ 