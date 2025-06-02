# Sistema de Reciclaje con NFTs

Este proyecto implementa un sistema de reciclaje que utiliza NFTs y tokens como recompensas para incentivar la participación en el reciclaje.

## Contratos Desplegados en Moonbase Alpha
- **CircularNFT**: `0xaF2Be8fB31DB2fB59BDce39e7C031C60FC464075` 'https://moonbase.subscan.io/account/
0xaF2Be8fB31DB2fB59BDce39e7C031C60FC464075'
- **RewardToken**: `0x0671Ed6A49c1C93563CB76f8547f45A0CE4C4953` 'https://moonbase.subscan.io/account/
0x0671Ed6A49c1C93563CB76f8547f45A0CE4C4953'
- **RecyclingCenter**: `0x700018a93a7bc421Eb5c0c1aBF10d4aa0c99d164` 'https://moonbase.subscan.io/account/
0x700018a93a7bc421eb5c0c1abf10d4aa0c99d164'
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