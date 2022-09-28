// https://eth-goerli.g.alchemy.com/v2/lMzSGEM-fASMbN8xmwCcj3WWpHAQ32IY

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/lMzSGEM-fASMbN8xmwCcj3WWpHAQ32IY",
      accounts: [
        "b0c75f3cf40a8081a12c7049b3fbfe8aabb835bfca6d053069db86c0ece1f990",
      ],
    },
  },
};
