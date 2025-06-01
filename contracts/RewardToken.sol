// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardToken is ERC20, Ownable {
    // Dirección del contrato RecyclingCenter
    address public recyclingCenter;

    // Eventos
    event TokensMinted(address indexed to, uint256 amount);

    constructor(address initialOwner) 
        ERC20("Circular Reward Token", "CIRC")
        Ownable(initialOwner)
    {}

    // Función para establecer la dirección del RecyclingCenter
    function setRecyclingCenter(address _recyclingCenter) external onlyOwner {
        recyclingCenter = _recyclingCenter;
    }

    // Función para mintear tokens (solo el RecyclingCenter puede hacerlo)
    function mint(address to, uint256 amount) external {
        require(msg.sender == recyclingCenter, "Only recycling center can mint");
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }

    // Función para quemar tokens
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
} 