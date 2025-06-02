import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import RewardTokenABI from '../../../artifacts/contracts/RewardToken.sol/RewardToken.json';

export function useRewardToken() {
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBalance = async (address: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_REWARD_TOKEN_ADDRESS!,
        RewardTokenABI.abi,
        provider
      );

      const balance = await contract.balanceOf(address);
      setBalance(ethers.formatEther(balance));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al obtener el balance');
    } finally {
      setIsLoading(false);
    }
  };

  const burnTokens = async (amount: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_REWARD_TOKEN_ADDRESS!,
        RewardTokenABI.abi,
        signer
      );

      const amountWei = ethers.parseEther(amount);
      const tx = await contract.burn(amountWei);
      await tx.wait();

      // Actualizar balance después de quemar tokens
      const address = await signer.getAddress();
      await getBalance(address);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al quemar tokens');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    balance,
    isLoading,
    error,
    getBalance,
    burnTokens
  };
} 