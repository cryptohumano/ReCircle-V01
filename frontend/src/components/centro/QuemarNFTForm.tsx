"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function QuemarNFTForm() {
  const [user, setUser] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleBurn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      // Aquí deberías llamar a recycleProduct(user, tokenId) usando wagmi/ethers
      // Simulación:
      await new Promise(res => setTimeout(res, 1000));
      setSuccess("NFT quemado y recompensa minteada correctamente");
      setUser("");
      setTokenId("");
    } catch (err) {
      setError("Error al quemar el NFT");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleBurn} className="space-y-4 max-w-md">
      <Input
        type="text"
        placeholder="Dirección del usuario"
        value={user}
        onChange={e => setUser(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={e => setTokenId(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Procesando..." : "Quemar NFT y Mintear Recompensa"}
      </Button>
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {error && <div className="text-red-600 text-sm">{error}</div>}
    </form>
  );
} 