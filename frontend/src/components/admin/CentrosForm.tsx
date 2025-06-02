"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CentrosForm() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      // Aquí deberías llamar a authorizeCenter(address) usando wagmi/ethers
      // Simulación:
      await new Promise(res => setTimeout(res, 1000));
      setSuccess("Centro autorizado correctamente");
      setAddress("");
    } catch (err) {
      setError("Error al autorizar el centro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleAdd} className="space-y-4 max-w-md">
      <Input
        type="text"
        placeholder="Dirección del centro"
        value={address}
        onChange={e => setAddress(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Agregando..." : "Agregar Centro"}
      </Button>
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {error && <div className="text-red-600 text-sm">{error}</div>}
    </form>
  );
} 