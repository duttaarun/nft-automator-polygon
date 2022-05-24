# nft-automator-polygon
Automated NFT uploads and listing on Polygon chain (Main and Testnet) and Rinkeby Eth testnet
- `npx hardhat`- This will initialiaze the project with Harhat boiler plate.
- `npx hardhat compile` - This will compile the sol files.
- `npx hardhat deploy --network <network-name-in-config>` - This will deploy the NFT on dedicated network
- `npx hardhat verify-contract <contract-addr> <param1> <param2> --network <network-name>` - Verifies the generated contract on chain
- `npx hardhat mint-nft <contract-addr> --network PolygonMumbai` - Mints the NFT defined in config using the contract

# Environment variables
Following environment varibles must be defined in a .env file.
 
- `ALCHEMY_KEY` = This is the Alchemy development key 
- `ALCHEMY_MAINNET_KEY` = Polygon Mainnet key (In case you are using Alchmey or Infura RPC urls)
- `ACCOUNT_PRIVATE_KEY` = This is the private key for the Eth Wallet
- `POLYGON_MUMBAI_KEY` = This polygon mumbai key for ethercan contract verification
- `ALCHEMY_RINKEBY_KEY` = Alchemy Key to deploy contract on Eth network using Rinkeby network
- `RINKEBY_KEY` = This is used to test contact/NFT deplyment on Rinkeby Eth testnet
