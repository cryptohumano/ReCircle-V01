"use client";

import { CentrosForm } from "@/components/admin/CentrosForm";

export default function AdminCentrosPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Administrar Centros de Reciclaje</h1>
      <CentrosForm />
    </main>
  );
} 