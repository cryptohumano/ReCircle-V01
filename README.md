# Sistema de Reciclaje con NFTs

Este proyecto implementa un sistema de reciclaje que utiliza NFTs y tokens como recompensas para incentivar la participación en el reciclaje.
https://youtu.be/QRUXDxJ5gis
## Contratos Desplegados en Moonbase Alpha
- **CircularNFT**: `0xaF2Be8fB31DB2fB59BDce39e7C031C60FC464075` 'https://moonbase.subscan.io/account/
0xaF2Be8fB31DB2fB59BDce39e7C031C60FC464075'
- **RewardToken**: `0x0671Ed6A49c1C93563CB76f8547f45A0CE4C4953` 'https://moonbase.subscan.io/account/
0x0671Ed6A49c1C93563CB76f8547f45A0CE4C4953'
- **RecyclingCenter**: `0x700018a93a7bc421Eb5c0c1aBF10d4aa0c99d164` 'https://moonbase.subscan.io/account/
0x700018a93a7bc421eb5c0c1abf10d4aa0c99d164'



=== Información del Despliegue en Paseo Asset Hub ===
Cuenta desplegadora: 0x59147B16C9e4C8fA768fAf857eE36CBa5c10Ff45
Balance inicial: 49.998981625 PAS
Gas Price: 0.000001 gwei
Max Fee Per Gas: 0.0000022 gwei
Max Priority Fee Per Gas: 0.0000002 gwei
Chain ID: 420420421n
Network: unknown

=== Desplegando Contratos en Paseo Asset Hub ===

1. Desplegando CircularNFT...
Transacción enviada: 0x1be2666fd166f25c9c2e3ce6cc125258366b74d2d592d9b190eb138c6e7cde16
CircularNFT desplegado en: 0xaFBfFeE9bcca449459F39cF6496F4840d33E381C

2. Desplegando RewardToken...
Transacción enviada: 0x187a87ff82f92f8bf4d031d5326e5ce4fac38b1beb3158c6b51205a608577021
RewardToken desplegado en: 0x5fCF4F8b31Ef80D1dCe2AFD48031a1C044f32A80

3. Desplegando RecyclingCenter...
Transacción enviada: 0x92324782e14cca7883e25ab86c7e968a1f15bb960f73396deb8a9d240e4e47bc
RecyclingCenter desplegado en: 0xE972d78B8049520B15561cA10D9a1305D29ab568

=== Configurando Contratos ===

1. Configurando CircularNFT...
Transacción enviada: 0x28035af61f46f44938cf63b18c895ae48ec9f61e0f4d73202964cbe13d781848

2. Configurando RewardToken...
Transacción enviada: 0xe0c3d88a50d69bc119415cad62c6c1ab57dbbef358142b41e27d91eb453808e9

=== Resumen del Despliegue ===
Balance final: 49.919172522868 PAS

=== Direcciones de los Contratos ===
CircularNFT: 0xaFBfFeE9bcca449459F39cF6496F4840d33E381C
RewardToken: 0x5fCF4F8b31Ef80D1dCe2AFD48031a1C044f32A80
RecyclingCenter: 0xE972d78B8049520B15561cA10D9a1305D29ab568

edgar@lamp:/opt/hardhat-pvm/polkadot-sdk$ ./target/release/eth-rpc --dev --rpc-external --rpc-cors=all
2025-06-01 17:56:24 🌐 Connecting to node at: ws://127.0.0.1:9944 ...
2025-06-01 17:57:34 🌟 Connected to node at: ws://127.0.0.1:9944
2025-06-01 17:57:35 💾 Using in-memory database, keeping only 256 blocks in memory
2025-06-01 17:57:35 〽️ Prometheus exporter started at 127.0.0.1:9616
2025-06-01 17:57:35 Running JSON-RPC server: addr=0.0.0.0:8545,[::]:33631
2025-06-01 17:57:35 🔌 Subscribing to new blocks (BestBlocks)
2025-06-01 17:57:35 🔌 Subscribing to new blocks (FinalizedBlocks)
## Características

- NFTs para productos reciclables
- Centros de reciclaje autorizados
- Sistema de recompensas con tokens
- Interfaz moderna y responsiva
- Integración con blockchain

## Tecnologías Utilizadas

### Smart Contracts
- Solidity
- Hardhat
- OpenZeppelin

### Frontend
- Next.js 14
- TypeScript
- Radix UI
- Tailwind CSS
- ethers.js

### Backend
- Node.js
- Express
- TypeScript
- ethers.js
- Zod

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/cryptohumano/ReCircle-V01
cd recycling-nft-system
```

2. Instalar dependencias del backend:
```bash
cd backend
npm install
```

3. Instalar dependencias del frontend:
```bash
cd frontend
npm install
```

4. Configurar variables de entorno:
```bash
# Backend
cp backend/.env.example backend/.env
# Editar backend/.env con tus valores

# Frontend
cp frontend/.env.example frontend/.env
# Editar frontend/.env con tus valores
```

## Desarrollo

1. Iniciar el backend:
```bash
cd backend
npm run dev
```

2. Iniciar el frontend:
```bash
cd frontend
npm run dev
```

## Estructura del Proyecto

```
├── backend/               # Servidor Express
│   ├── src/
│   │   ├── index.ts      # Punto de entrada
│   │   └── routes/       # Rutas de la API
│   └── package.json
│
├── frontend/             # Aplicación Next.js
│   ├── src/
│   │   ├── app/         # Páginas y rutas
│   │   ├── components/  # Componentes React
│   │   └── lib/         # Utilidades
│   └── package.json
│
└── contracts/           # Smart Contracts
    ├── RecyclingCenter.sol
    └── CircularNFT.sol
```

## Uso

1. Conecta tu wallet (MetaMask)
2. Navega a la página de Centros de Reciclaje
3. Selecciona un centro y lleva tus materiales reciclables
4. Recibe NFTs y tokens como recompensa
5. Gestiona tus NFTs y recompensas en tu perfil

## Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 