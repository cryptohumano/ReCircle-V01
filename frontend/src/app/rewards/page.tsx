"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Datos de ejemplo - En producción esto vendría de una API/Blockchain
const rewards = [
  {
    id: 1,
    name: "NFT Especial",
    description: "Desbloquea un NFT exclusivo al reciclar 10kg de plástico",
    progress: 70,
    required: 10,
    current: 7,
    unit: "kg",
  },
  {
    id: 2,
    name: "Token Bonus",
    description: "Gana 50 tokens extra al reciclar 5kg de papel",
    progress: 40,
    required: 5,
    current: 2,
    unit: "kg",
  },
]

export default function Rewards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recompensas Disponibles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rewards.map((reward) => (
          <Card key={reward.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{reward.name}</CardTitle>
              <CardDescription>{reward.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Progreso</span>
                  <span>
                    {reward.current}/{reward.required} {reward.unit}
                  </span>
                </div>
                <Progress value={reward.progress} className="h-2" />
                <Button className="w-full" disabled={reward.progress < 100}>
                  {reward.progress === 100 ? "Reclamar Recompensa" : "En Progreso"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Historial de Recompensas</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">NFT Reciclaje #1</p>
                  <p className="text-sm text-muted-foreground">
                    Reciclaje de plástico - 2kg
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">15/03/2024</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Token Bonus</p>
                  <p className="text-sm text-muted-foreground">
                    Reciclaje de papel - 3kg
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">10/03/2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 