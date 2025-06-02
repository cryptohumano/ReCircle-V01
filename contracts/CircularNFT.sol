// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CircularNFT is ERC721, Ownable {
    // Contador simple para los IDs de tokens
    uint256 private _nextTokenId;

    // Mapping para almacenar los metadatos IPFS de cada token
    mapping(uint256 => string) private _tokenURIs;

    // Dirección del contrato RecyclingCenter
    address public recyclingCenter;

    // Eventos
    event NFTMinted(address indexed to, uint256 indexed tokenId);
    event NFTBurned(uint256 indexed tokenId);

    constructor(address initialOwner) 
        ERC721("CircularNFT", "CRNFT")
        Ownable(initialOwner)
    {}

    // Función para establecer la dirección del RecyclingCenter
    function setRecyclingCenter(address _recyclingCenter) external onlyOwner {
        recyclingCenter = _recyclingCenter;
    }

    // Función para mintear NFTs (solo el owner puede hacerlo)
    function mintNFT(address to, string memory _tokenURI) 
        external 
        onlyOwner 
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _tokenURIs[tokenId] = _tokenURI;
        emit NFTMinted(to, tokenId);
        return tokenId;
    }

    // Función para quemar NFTs (solo el RecyclingCenter puede hacerlo)
    function burn(uint256 tokenId) external {
        require(msg.sender == recyclingCenter, "Only recycling center can burn");
        _burn(tokenId);
        delete _tokenURIs[tokenId];
        emit NFTBurned(tokenId);
    }

    // Función para obtener el URI del token
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return _tokenURIs[tokenId];
    }
} 