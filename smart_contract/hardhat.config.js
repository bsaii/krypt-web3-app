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
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/f92b286408d8464ead222d64b728dcaf",
      accounts: [
        "679c91d9b0449975673bfe9e419d349ac051311459cae24476175db1ca8b8d5f",
      ],
    },
  },
};

// https://ropsten.infura.io/v3/f92b286408d8464ead222d64b728dcaf
