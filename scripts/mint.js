const CONTRACT_ADDRESS = "0x91d9985B137b2a02a1C9D3214a0b4ce7c96b3aa3"
const META_DATA_URL = "https://gateway.pinata.cloud/ipfs/QmVmmG2NdAjFThNXu8ztAj4GbWLAZGWUUvKGPwLziuMQmk"

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