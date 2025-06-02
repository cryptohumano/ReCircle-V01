const { ethers } = require("hardhat");

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_LOCAL);
    console.log("Dirección derivada de PRIVATE_KEY_LOCAL:", wallet.address);
}

main();
