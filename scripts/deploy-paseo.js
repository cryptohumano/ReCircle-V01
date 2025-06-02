const hre = require("hardhat");
const { JsonRpcProvider } = require("ethers");
require("dotenv").config();

async function main() {
  // Usar variables de entorno para la red y la clave privada
  const provider = new JsonRpcProvider(process.env.RPC_URL || "http://127.0.0.1:8545");
  const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY_LOCAL, provider);

  console.log("\n=== Información del Despliegue en Red Local ===");
  console.log("Cuenta desplegadora:", wallet.address);

  // Obtener balance inicial
  const balance = await provider.getBalance(wallet.address);
  console.log("Balance inicial:", hre.ethers.formatEther(balance), "ETH");

  // Obtener gas price y datos de la red
  const feeData = await provider.getFeeData();
  console.log("Gas Price:", hre.ethers.formatUnits(feeData.gasPrice, "gwei"), "gwei");
  console.log("Max Fee Per Gas:", hre.ethers.formatUnits(feeData.maxFeePerGas, "gwei"), "gwei");
  console.log("Max Priority Fee Per Gas:", hre.ethers.formatUnits(feeData.maxPriorityFeePerGas, "gwei"), "gwei");

  // Obtener información de la red
  const network = await provider.getNetwork();
  console.log("Chain ID:", network.chainId);
  console.log("Network:", network.name);

  console.log("\n=== Desplegando Contratos en Red Local ===");

  // Desplegar CircularNFT
  console.log("\n1. Desplegando CircularNFT...");
  const CircularNFT = await hre.ethers.getContractFactory("CircularNFT");
  const circularNFTFactory = new hre.ethers.ContractFactory(
    CircularNFT.interface.format(),
    CircularNFT.bytecode,
    wallet
  );
  const circularNFT = await circularNFTFactory.deploy(wallet.address);
  console.log("Transacción enviada:", circularNFT.deploymentTransaction().hash);
  await circularNFT.waitForDeployment();
  const circularNFTAddress = await circularNFT.getAddress();
  console.log("CircularNFT desplegado en:", circularNFTAddress);

  // Desplegar RewardToken
  console.log("\n2. Desplegando RewardToken...");
  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  const rewardTokenFactory = new hre.ethers.ContractFactory(
    RewardToken.interface.format(),
    RewardToken.bytecode,
    wallet
  );
  const rewardToken = await rewardTokenFactory.deploy(wallet.address);
  console.log("Transacción enviada:", rewardToken.deploymentTransaction().hash);
  await rewardToken.waitForDeployment();
  const rewardTokenAddress = await rewardToken.getAddress();
  console.log("RewardToken desplegado en:", rewardTokenAddress);

  // Desplegar RecyclingCenter
  console.log("\n3. Desplegando RecyclingCenter...");
  const RecyclingCenter = await hre.ethers.getContractFactory("RecyclingCenter");
  const recyclingCenterFactory = new hre.ethers.ContractFactory(
    RecyclingCenter.interface.format(),
    RecyclingCenter.bytecode,
    wallet
  );
  const recyclingCenter = await recyclingCenterFactory.deploy(
    wallet.address,
    circularNFTAddress,
    rewardTokenAddress
  );
  console.log("Transacción enviada:", recyclingCenter.deploymentTransaction().hash);
  await recyclingCenter.waitForDeployment();
  const recyclingCenterAddress = await recyclingCenter.getAddress();
  console.log("RecyclingCenter desplegado en:", recyclingCenterAddress);

  // Configurar las direcciones en los contratos
  console.log("\n=== Configurando Contratos ===");

  console.log("\n1. Configurando CircularNFT...");
  const setNFTTx = await circularNFT.setRecyclingCenter(recyclingCenterAddress);
  console.log("Transacción enviada:", setNFTTx.hash);
  await setNFTTx.wait();

  console.log("\n2. Configurando RewardToken...");
  const setTokenTx = await rewardToken.setRecyclingCenter(recyclingCenterAddress);
  console.log("Transacción enviada:", setTokenTx.hash);
  await setTokenTx.wait();

  // Obtener balance final
  const finalBalance = await provider.getBalance(wallet.address);
  console.log("\n=== Resumen del Despliegue ===");
  console.log("Balance final:", hre.ethers.formatEther(finalBalance), "ETH");
  console.log("Gas usado:", hre.ethers.formatEther(balance - finalBalance), "ETH");

  console.log("\n=== Direcciones de los Contratos ===");
  console.log("CircularNFT:", circularNFTAddress);
  console.log("RewardToken:", rewardTokenAddress);
  console.log("RecyclingCenter:", recyclingCenterAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\nError durante el despliegue:");
    console.error(error);
    process.exit(1);
  }); 