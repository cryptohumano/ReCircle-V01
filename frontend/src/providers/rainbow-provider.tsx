'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTheme } from "next-themes";
import '@rainbow-me/rainbowkit/styles.css';
import type { Chain } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '';

const { wallets } = getDefaultWallets({
  appName: 'Sistema de Reciclaje con NFTs',
  projectId,
});

export const localNode: Chain = {
  id: 420420420, // Usa el chainId real de tu nodo local
  name: 'LocalNode',
  nativeCurrency: {
    name: 'Local PAS',
    symbol: 'PAS',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['http://192.168.100.30:8545'] },
    public: { http: ['http://192.168.100.30:8545'] },
  },
  blockExplorers: {
    default: { name: 'None', url: '' },
  },
  testnet: true,
};

export const moonbase: Chain = {
  id: 1287,
  name: 'Moonbase Alpha',
  nativeCurrency: {
    name: 'DEV',
    symbol: 'DEV',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://moonbase-rpc.dwellir.com'] },
    public: { http: ['https://moonbase-rpc.dwellir.com'] },
  },
  blockExplorers: {
    default: { name: 'MoonScan', url: 'https://moonbase.moonscan.io/' },
  },
  testnet: true,
};

export const passetHub: Chain = {
  id: 420420421,
  name: 'Paseo Asset Hub',
  nativeCurrency: {
    name: 'PAS',
    symbol: 'PAS',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://testnet-passet-hub-eth-rpc.polkadot.io'] },
    public: { http: ['https://testnet-passet-hub-eth-rpc.polkadot.io'] },
  },
  blockExplorers: {
    default: { name: 'None', url: '' },
  },
  testnet: true,
};

const config = createConfig({
  chains: [mainnet, sepolia, localNode, moonbase, passetHub],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [localNode.id]: http(),
    [moonbase.id]: http(),
    [passetHub.id]: http(),
  },
  connectors: connectorsForWallets(wallets, {
    projectId,
    appName: 'Sistema de Reciclaje con NFTs',
  }),
});

const queryClient = new QueryClient();

export function RainbowProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={theme === 'dark' ? darkTheme() : lightTheme()}
          modalSize="compact"
          initialChain={sepolia}
          appInfo={{
            appName: 'Sistema de Reciclaje con NFTs',
            learnMoreUrl: 'https://recircle.xyz',
          }}
          showRecentTransactions={true}
          coolMode
        >
          {mounted && children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 