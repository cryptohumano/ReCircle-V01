// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./CircularNFT.sol";
import "./RewardToken.sol";

contract RecyclingCenter is Ownable {
    // Referencias a los contratos
    CircularNFT public circularNFT;
    RewardToken public rewardToken;

    // Mapping para centros autorizados
    mapping(address => bool) public authorizedCenters;

    // Cantidad de tokens de recompensa por reciclaje
    uint256 public rewardAmount; // Cambiado de constant a variable pública

    // Eventos
    event CenterAuthorized(address indexed center);
    event CenterDeauthorized(address indexed center);
    event ProductRecycled(address indexed user, uint256 indexed tokenId, uint256 rewardAmount);
    event RewardAmountUpdated(uint256 oldAmount, uint256 newAmount);

    constructor(
        address initialOwner,
        address _circularNFT,
        address _rewardToken
    ) Ownable(initialOwner) {
        circularNFT = CircularNFT(_circularNFT);
        rewardToken = RewardToken(_rewardToken);
        rewardAmount = 100 * 10**18; // Inicialización en el constructor
    }

    // Función para autorizar un centro de reciclaje
    function authorizeCenter(address center) external onlyOwner {
        authorizedCenters[center] = true;
        emit CenterAuthorized(center);
    }

    // Función para desautorizar un centro de reciclaje
    function deauthorizeCenter(address center) external onlyOwner {
        authorizedCenters[center] = false;
        emit CenterDeauthorized(center);
    }

    // Función principal para reciclar un producto
    function recycleProduct(address user, uint256 tokenId) external {
        require(authorizedCenters[msg.sender], "Not an authorized recycling center");
        require(circularNFT.ownerOf(tokenId) == user, "User does not own this NFT");

        // Quemar el NFT
        circularNFT.burn(tokenId);

        // Mintear tokens de recompensa
        rewardToken.mint(user, rewardAmount);

        emit ProductRecycled(user, tokenId, rewardAmount);
    }

    // Función para actualizar la cantidad de recompensa
    function updateRewardAmount(uint256 newAmount) external onlyOwner {
        require(newAmount > 0, "Reward amount must be greater than 0");
        uint256 oldAmount = rewardAmount;
        rewardAmount = newAmount;
        emit RewardAmountUpdated(oldAmount, newAmount);
    }
} 