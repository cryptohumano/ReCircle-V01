import { useState } from 'react';
import { ethers } from 'ethers';

interface RegisterProps {
  onRegister: (walletAddress: string, username: string, email: string) => void;
}

export const Register = ({ onRegister }: RegisterProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } else {
        alert('Por favor instala MetaMask para continuar');
      }
    } catch (error) {
      console.error('Error al conectar wallet:', error);
      alert('Error al conectar wallet');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!walletAddress) {
      alert('Por favor conecta tu wallet primero');
      return;
    }
    onRegister(walletAddress, username, email);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Wallet</label>
          <div className="mt-1 flex">
            <input
              type="text"
              value={walletAddress}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Conecta tu wallet"
            />
            <button
              type="button"
              onClick={connectWallet}
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Conectar
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}; 