const { exec } = require("child_process");
exec("java -jar ./ipfsparse.jar https://gateway.pinata.cloud/ipfs/Q ./template_ipfs.xlsx", (error, stdout, stderr) => {
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