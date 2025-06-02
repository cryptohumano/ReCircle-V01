import { ethers } from 'ethers';
import RewardTokenABI from '../../artifacts/contracts/RewardToken.sol/RewardToken.json';

export class RewardService {
  private provider: ethers.Provider;
  private wallet: ethers.Wallet;
  private rewardToken: ethers.Contract;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, this.provider);
    this.rewardToken = new ethers.Contract(
      process.env.REWARD_TOKEN_ADDRESS!,
      RewardTokenABI.abi,
      this.wallet
    );
  }

  async getBalance(address: string): Promise<string> {
    const balance = await this.rewardToken.balanceOf(address);
    return ethers.formatEther(balance);
  }

  async mintTokens(to: string, amount: string): Promise<void> {
    const amountWei = ethers.parseEther(amount);
    const tx = await this.rewardToken.mint(to, amountWei);
    await tx.wait();
  }

  async burnTokens(from: string, amount: string): Promise<void> {
    const amountWei = ethers.parseEther(amount);
    const tx = await this.rewardToken.burn(amountWei);
    await tx.wait();
  }

  async getRewardHistory(address: string): Promise<any[]> {
    // Aquí implementarías la lógica para obtener el historial de recompensas
    // Por ahora retornamos datos de ejemplo
    return [
      {
        type: 'mint',
        amount: '10',
        date: new Date().toISOString(),
        description: 'Reciclaje de plástico'
      },
      {
        type: 'burn',
        amount: '5',
        date: new Date().toISOString(),
        description: 'Canje de recompensa'
      }
    ];
  }
} 