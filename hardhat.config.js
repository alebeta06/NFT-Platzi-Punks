require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;
const projectID = process.env.INFURA_PROJECT_ID;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${projectID}`,
      accounts: [privateKey],
    },
  },
};
