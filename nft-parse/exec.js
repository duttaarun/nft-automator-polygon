const { exec } = require("child_process");
const args = process.argv.slice(2);

if(!args[0])
    throw new Error("You need to specify the folder hash");

exec("java -jar ./ipfsparse.jar "+args[0]+" ./template_ipfs.xlsx", (error, stdout, stderr) => {
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