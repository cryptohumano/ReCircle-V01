"use client";

// Página para que el admin mintee NFTs a usuarios
// Aquí se debe mostrar un formulario para ingresar la dirección del usuario y el tokenURI (metadatos IPFS)
// Al enviar, debe llamar a la función mintNFT del contrato CircularNFT usando wagmi/ethers

import { MintNFTForm } from "@/components/admin/MintNFTForm";

export default function AdminMintNFTPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Mintear NFT para Usuario</h1>
      <MintNFTForm />
    </main>
  );
} 