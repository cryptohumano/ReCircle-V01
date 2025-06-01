# ReCircle - Sistema de Recompensas para Economía Circular

Sistema de recompensas basado en blockchain que incentiva el reciclaje de productos electrónicos y textiles mediante NFTs y tokens de recompensa.

## Contratos Desplegados en Moonbase Alpha

- **CircularNFT**: `0xaF2Be8fB31DB2fB59BDce39e7C031C60FC464075` 'https://moonbase.subscan.io/account/0xaF2Be8fB31DB2fB59BDce39e7C031C60FC464075'
- **RewardToken**: `0x0671Ed6A49c1C93563CB76f8547f45A0CE4C4953` 'https://moonbase.subscan.io/account/0x0671Ed6A49c1C93563CB76f8547f45A0CE4C4953'
- **RecyclingCenter**: `0x700018a93a7bc421Eb5c0c1aBF10d4aa0c99d164` 'https://moonbase.subscan.io/account/0x700018a93a7bc421eb5c0c1abf10d4aa0c99d164'

## Funcionalidades Principales

### CircularNFT
- Representa productos reciclados como NFTs
- Cada NFT contiene metadatos del producto reciclado
- Solo el centro de reciclaje puede crear nuevos NFTs

### RewardToken
- Token de recompensa para incentivar el reciclaje
- Los usuarios reciben tokens al reciclar productos
- Los tokens pueden ser canjeados por beneficios

### RecyclingCenter
- Gestiona el proceso de reciclaje
- Crea NFTs para productos reciclados
- Distribuye tokens de recompensa

## Interacción con los Contratos

### Para Centros de Reciclaje
1. Registrar productos reciclados:
```javascript
await recyclingCenter.registerRecycledProduct(
    productType,    // 0 para electrónico, 1 para textil
    productDetails, // Detalles del producto
    userAddress     // Dirección del usuario que recicló
);
```

2. Verificar productos registrados:
```javascript
const product = await recyclingCenter.getRecycledProduct(productId);
```

### Para Usuarios
1. Ver NFTs de productos reciclados:
```javascript
const nftBalance = await circularNFT.balanceOf(userAddress);
const nftDetails = await circularNFT.getNFTDetails(tokenId);
```

2. Ver balance de tokens de recompensa:
```javascript
const rewardBalance = await rewardToken.balanceOf(userAddress);
```

3. Canjear tokens por beneficios:
```javascript
await rewardToken.redeemTokens(amount);
```

## Próximos Pasos

1. **Desarrollo del Frontend**
   - Crear interfaz para centros de reciclaje
   - Desarrollar dashboard para usuarios
   - Implementar sistema de canje de recompensas

2. **Integración con Oráculos**
   - Conectar con fuentes de datos externas
   - Verificar autenticidad de productos reciclados
   - Implementar sistema de verificación

3. **Expansión de Funcionalidades**
   - Añadir más tipos de productos
   - Implementar sistema de niveles
   - Crear marketplace de recompensas

4. **Pruebas y Auditoría**
   - Realizar pruebas de seguridad
   - Auditar contratos
   - Optimizar gas

## Tecnologías Utilizadas

- Solidity
- Hardhat
- Moonbase Alpha (Polkadot)
- OpenZeppelin
- ethers.js

## Instalación

```bash
# Instalar dependencias
npm install

# Compilar contratos
npx hardhat compile

# Desplegar en Moonbase Alpha
npx hardhat run scripts/deploy.js --network moonbase
```

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request 