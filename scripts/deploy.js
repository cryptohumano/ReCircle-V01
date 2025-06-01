const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const provider = hre.ethers.provider;

  console.log("\n=== Información del Despliegue ===");
  console.log("Cuenta desplegadora:", deployer.address);
  
  // Obtener balance inicial
  const balance = await provider.getBalance(deployer.address);
  console.log("Balance inicial:", hre.ethers.formatEther(balance), "DEV");
  
  // Obtener gas price y datos de la red
  const feeData = await provider.getFeeData();
  console.log("Gas Price:", hre.ethers.formatUnits(feeData.gasPrice, "gwei"), "gwei");
  console.log("Max Fee Per Gas:", hre.ethers.formatUnits(feeData.maxFeePerGas, "gwei"), "gwei");
  console.log("Max Priority Fee Per Gas:", hre.ethers.formatUnits(feeData.maxPriorityFeePerGas, "gwei"), "gwei");

  // Obtener información de la red
  const network = await provider.getNetwork();
  console.log("Chain ID:", network.chainId);
  console.log("Network:", network.name);

  console.log("\n=== Desplegando Contratos ===");

  // Desplegar CircularNFT
  console.log("\n1. Desplegando CircularNFT...");
  const CircularNFT = await hre.ethers.getContractFactory("CircularNFT");
  
  // Estimar gas antes del despliegue
  const deployNFTGas = await CircularNFT.getDeployTransaction(deployer.address).then(tx => 
    provider.estimateGas(tx)
  );
  const nftGasCost = deployNFTGas * feeData.gasPrice;
  console.log("Gas estimado para CircularNFT:", deployNFTGas.toString());
  console.log("Costo estimado:", hre.ethers.formatEther(nftGasCost), "DEV");

  const circularNFT = await CircularNFT.deploy(deployer.address);
  console.log("Transacción enviada:", circularNFT.deploymentTransaction().hash);
  await circularNFT.waitForDeployment();
  const circularNFTAddress = await circularNFT.getAddress();
  console.log("CircularNFT desplegado en:", circularNFTAddress);

  // Desplegar RewardToken
  console.log("\n2. Desplegando RewardToken...");
  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  
  // Estimar gas antes del despliegue
  const deployTokenGas = await RewardToken.getDeployTransaction(deployer.address).then(tx => 
    provider.estimateGas(tx)
  );
  const tokenGasCost = deployTokenGas * feeData.gasPrice;
  console.log("Gas estimado para RewardToken:", deployTokenGas.toString());
  console.log("Costo estimado:", hre.ethers.formatEther(tokenGasCost), "DEV");

  const rewardToken = await RewardToken.deploy(deployer.address);
  console.log("Transacción enviada:", rewardToken.deploymentTransaction().hash);
  await rewardToken.waitForDeployment();
  const rewardTokenAddress = await rewardToken.getAddress();
  console.log("RewardToken desplegado en:", rewardTokenAddress);

  // Desplegar RecyclingCenter
  console.log("\n3. Desplegando RecyclingCenter...");
  const RecyclingCenter = await hre.ethers.getContractFactory("RecyclingCenter");
  
  // Estimar gas antes del despliegue
  const deployCenterGas = await RecyclingCenter.getDeployTransaction(
    deployer.address,
    circularNFTAddress,
    rewardTokenAddress
  ).then(tx => provider.estimateGas(tx));
  const centerGasCost = deployCenterGas * feeData.gasPrice;
  console.log("Gas estimado para RecyclingCenter:", deployCenterGas.toString());
  console.log("Costo estimado:", hre.ethers.formatEther(centerGasCost), "DEV");

  const recyclingCenter = await RecyclingCenter.deploy(
    deployer.address,
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
  const finalBalance = await provider.getBalance(deployer.address);
  console.log("\n=== Resumen del Despliegue ===");
  console.log("Balance final:", hre.ethers.formatEther(finalBalance), "DEV");
  console.log("Gas usado:", hre.ethers.formatEther(balance - finalBalance), "DEV");

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