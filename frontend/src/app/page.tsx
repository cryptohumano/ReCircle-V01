"use client"
import { Button } from "src/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-bold text-center mb-6">
        Bienvenido a ReCircle
      </h1>
      <p className="text-xl text-center mb-8 max-w-2xl">
        Recicla y gana recompensas en NFTs. Contribuye al medio ambiente mientras
        construyes tu colección digital. 
        Un mundo justo comienza con responabilidad sobre la cadena de suministro.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/recycling-centers">
            Encontrar Centro de Reciclaje
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/my-nfts">
            Ver Mis NFTs
          </Link>
        </Button>
      </div>
    </div>
  )
}
