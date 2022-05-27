const pinataSDK = require('@pinata/sdk');
const { task } = require("hardhat/config");
require('dotenv').config();
const { PINATA_API_KEY, PINATA_API_SECRET } = process.env;
const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET);
const { exec } = require("child_process");

task("pinata", "Pinata Test Authentication").setAction(async function (taskArguments) {
    try {
        await getPinList();
        let resp = await pinata.testAuthentication();
        console.log(resp);
    } catch (err) {
        console.error(err)
    }
});

task("pinata-bulk-upload", "Pinata Bulk Uploader").setAction(async function (taskArguments) {
    const sourcePath = 'C:\\Users\\dutta\\OneDrive\\Desktop\\data\\';
    const options = {
        pinataMetadata: {
            name: 'NFT Data',
            keyvalues: {
                landmark: 'sea'
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    await pinata.pinFromFS(sourcePath, options).then((result) => {
        //handle results here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
});

task("pinata-dir-parse", "Extract file hashes to excel").setAction(function (taskArguments) {

    exec("java -jar ../nft-parse/ipfsparse.jar https://gateway.pinata.cloud/ipfs/QmcPXpfE1GwA5X2ty7AcmsVVfw4yB6GRqhd77RRaFYZYUT template_ipfs.xlsx", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    
});


