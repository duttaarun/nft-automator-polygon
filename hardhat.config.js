/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("./scripts/deploy");
require("./scripts/mint")

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY, ALCHEMY_RINKEBY_KEY, POLYGON_MUMBAI_KEY, RINKEBY_KEY } = process.env;
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    PolygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_RINKEBY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      rinkeby: `${RINKEBY_KEY}`,
      polygon: "POLYGONSCAN_API_KEY",
      polygonMumbai: `${POLYGON_MUMBAI_KEY}`
    }
  }
};
