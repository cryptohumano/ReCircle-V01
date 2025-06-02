const { ethers } = require("hardhat");

async function main() {
    // Direcciones de los contratos desplegados
    const circularNFTAddress = "0xaFBfFeE9bcca449459F39cF6496F4840d33E381C";
    const rewardTokenAddress = "0x5fCF4F8b31Ef80D1dCe2AFD48031a1C044f32A80";
    const recyclingCenterAddress = "0xE972d78B8049520B15561cA10D9a1305D29ab568";

    // Obtener las instancias de los contratos
    const CircularNFT = await ethers.getContractFactory("CircularNFT");
    const RewardToken = await ethers.getContractFactory("RewardToken");
    const RecyclingCenter = await ethers.getContractFactory("RecyclingCenter");

    const circularNFT = CircularNFT.attach(circularNFTAddress);
    const rewardToken = RewardToken.attach(rewardTokenAddress);
    const recyclingCenter = RecyclingCenter.attach(recyclingCenterAddress);

    // Obtener la cuenta que desplegó los contratos
    const [deployer] = await ethers.getSigners();
    console.log("Cuenta interactuando:", deployer.address);

    // 1. Verificar el nombre del NFT
    const nftName = await circularNFT.name();
    console.log("Nombre del NFT:", nftName);

    // 2. Verificar el balance de tokens de recompensa
    const rewardBalance = await rewardToken.balanceOf(deployer.address);
    console.log("Balance de tokens de recompensa:", ethers.formatEther(rewardBalance));

    // 3. Verificar el centro de reciclaje
    const centerOwner = await recyclingCenter.owner();
    console.log("Propietario del centro de reciclaje:", centerOwner);

    // 4. Intentar acuñar un NFT
    console.log("\nIntentando acuñar un NFT...");
    const mintTx = await circularNFT.mint(deployer.address, "https://example.com/metadata/1");
    await mintTx.wait();
    console.log("NFT acuñado exitosamente!");

    // 5. Verificar el balance de NFTs
    const nftBalance = await circularNFT.balanceOf(deployer.address);
    console.log("Balance de NFTs:", nftBalance.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });