"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Datos de ejemplo - En producción esto vendría de una API
const recyclingCenters = [
  {
    id: 1,
    name: "Centro de Reciclaje Norte",
    address: "Av. Principal 123",
    hours: "Lunes a Viernes: 8:00 - 18:00",
    rewards: "5 tokens por kg de plástico",
  },
  {
    id: 2,
    name: "Centro de Reciclaje Sur",
    address: "Calle Secundaria 456",
    hours: "Lunes a Sábado: 9:00 - 17:00",
    rewards: "4 tokens por kg de papel",
  },
]

export default function RecyclingCenters() {
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Centros de Reciclaje</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recyclingCenters.map((center) => (
          <Card key={center.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{center.name}</CardTitle>
              <CardDescription>{center.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Horario: {center.hours}</p>
              <p className="mb-4">Recompensas: {center.rewards}</p>
              <Button
                onClick={() => setSelectedCenter(center.id)}
                className="w-full"
              >
                Seleccionar Centro
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCenter && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
          <div className="container mx-auto flex justify-between items-center">
            <p className="font-medium">
              Centro seleccionado: {recyclingCenters.find(c => c.id === selectedCenter)?.name}
            </p>
            <Button>Proceder con el Reciclaje</Button>
          </div>
        </div>
      )}
    </div>
  )
} 