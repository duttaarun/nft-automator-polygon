const { task } = require("hardhat/config");

task("check-balance", "Prints out the balance of your account").setAction(async function (taskArguments, hre) {
    // Get our account (as deployer) to verify that a minimum wallet balance is available
    const [deployer] = await hre.ethers.getSigners();

    console.log(`Showing balance for account: ${deployer.address}`);
    console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);
});


task("deploy", "Deploys the  Minter.sol contract").setAction(async function (taskArguments, hre) {
    // Get our account (as deployer) to verify that a minimum wallet balance is available
    const [deployer] = await hre.ethers.getSigners();

    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Fetch the compiled contract using ethers.js
    const NFT = await ethers.getContractFactory("Minter");
    // calling deploy() will return an async Promise that we can await on 
    const nft = await NFT.deploy('Magestic Mountains', 'Minter');

    await nft.deployed()
    // This solves the bug in Mumbai network where the contract address is not the real one
    const txHash = nft.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash);
    console.log("txHash: ", txHash);
    const contractAddress = txReceipt.contractAddress
    console.log("Contract deployed to address:", contractAddress);
});

task("verify-contract", "Verifies the contract on chain")
        .addPositionalParam('contract').addPositionalParam('consParam1').addPositionalParam('consParam2')
        .setAction(async function (taskArguments, hre) {
    // Get our account (as deployer) to verify that a minimum wallet balance is available
    await hre.run("verify:verify", {
        address: taskArguments['contract'],
        constructorArguments: [
          "Magestic Mountains",
          "Minter"
        ]
      })
});