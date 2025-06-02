"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Datos de ejemplo - En producción esto vendría de una API/Blockchain
const userNFTs = [
  {
    id: 1,
    name: "NFT Reciclaje #1",
    description: "Reciclaje de plástico - 2kg",
    date: "2024-03-15",
    image: "https://placehold.co/400x400",
    status: "active",
  },
  {
    id: 2,
    name: "NFT Reciclaje #2",
    description: "Reciclaje de papel - 3kg",
    date: "2024-03-10",
    image: "https://placehold.co/400x400",
    status: "recycled",
  },
]

export default function MyNFTs() {
  const [activeTab, setActiveTab] = useState("active")

  const filteredNFTs = userNFTs.filter((nft) => nft.status === activeTab)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mis NFTs</h1>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Activos</TabsTrigger>
          <TabsTrigger value="recycled">Reciclados</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredNFTs.map((nft) => (
              <Card key={nft.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{nft.name}</CardTitle>
                  <CardDescription>{nft.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground mb-4">
                    Fecha: {nft.date}
                  </p>
                  <Button className="w-full">Ver Detalles</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recycled">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredNFTs.map((nft) => (
              <Card key={nft.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{nft.name}</CardTitle>
                  <CardDescription>{nft.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground mb-4">
                    Fecha: {nft.date}
                  </p>
                  <Button className="w-full" variant="outline">
                    Ver Historial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 