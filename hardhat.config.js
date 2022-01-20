require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString().trim();

const projectId = ""; // replace with your infura project id

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [
        privateKey,
      ],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [
        privateKey,
      ],
    },
  },
  solidity: "0.8.4",
};
