require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    mumbai:{
      url: 'https://rpc.ankr.com/polygon_mumbai' ,
      accounts:['a6e97036bdc8f0b1c2c3c4d22d62081db05a1a8ebf4fdc9df3d507a725986565'],
    }

  },
  etherscan:{
    apiKey: '375583P7WJPKKJ2PJY1H97RGZR394GFQBE' ,

  }
};
