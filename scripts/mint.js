const CONTRACT_ADDRESS = "0x045C4E263F0c9BbC8A8E0ecBB8b4de832b2707c3"
const META_DATA_URL = "ipfs://QmRkt52v7Kc2zWDmgcZMNpwnaoFES8gMDhngkDWY31y3m6/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("Minter")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintTo(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });