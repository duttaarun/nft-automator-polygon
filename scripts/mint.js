const META_DATA_URL = "https://gateway.pinata.cloud/ipfs/<CID-HASH-ON-IPFS>"

const { task } = require("hardhat/config");

task("mint-nft", "Mints the desired item on chain")
    .addPositionalParam('contract')
    .setAction(async function (taskArguments, hre) {
        const ExampleNFT = await ethers.getContractFactory("Minter")
        const [owner] = await ethers.getSigners()
        await ExampleNFT.attach(taskArguments['contract']).mintTo(owner.address, META_DATA_URL)
        console.log("NFT minted to: ", owner.address)
    });