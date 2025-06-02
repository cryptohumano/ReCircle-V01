"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContractWrite } from "wagmi";
import circularNFTAbi from "@/artifacts/contracts/CircularNFT.sol/CircularNFT.json";

const contractAddress = process.env.NEXT_PUBLIC_CIRCULAR_NFT_ADDRESS as `0x${string}`;

// Formulario para mintear NFT
// Debe recibir dirección del usuario y tokenURI
// Al enviar, debe llamar a mintNFT del contrato CircularNFT usando wagmi/ethers

export function MintNFTForm() {
  const [to, setTo] = useState("");
  const [tokenURI, setTokenURI] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { write, isLoading, isSuccess, isError, data } = useContractWrite({
    address: contractAddress,
    abi: circularNFTAbi.abi,
    functionName: "mintNFT",
    onSuccess: (data) => {
      setSuccess("NFT minteado correctamente. Hash: " + data.hash);
      setError("");
      setTo("");
      setTokenURI("");
    },
    onError: (err) => {
      setError("Error al mintear NFT: " + (err.message || err));
      setSuccess("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    write({ args: [to, tokenURI] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        type="text"
        placeholder="Dirección del usuario"
        value={to}
        onChange={e => setTo(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Token URI (IPFS)"
        value={tokenURI}
        onChange={e => setTokenURI(e.target.value)}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Minteando..." : "Mintear NFT"}
      </Button>
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {isError && <div className="text-red-600 text-sm">{error}</div>}
    </form>
  );
} 