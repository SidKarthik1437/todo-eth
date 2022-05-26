require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'matic',
  networks: {
    hardhat: {},
    matic: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/LLIibP2EiFnPdVIuHcTOKD0J2S3WhArz',
      accounts: [
        '15ed8743942ff60c3b8d9b90c1bd750a2db34e1678da9ea68499471365ab9587',
      ],
    },
  },
  // etherscan: {
  //   apiKey: process.env.POLYGONSCAN_API_KEY,
  // },
  solidity: {
    version: '0.8.0',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}

// module.exports = {
//   solidity: "0.8.4",
//   networks: {
//     hardhat: {
//       url: "http://localhost:8545",
//       chainId: 1337
//     },
//   }
// };
