// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Minter is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;

    // This will act at a very high level like an array
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}

    function mintTo(address recipient, string memory uri)
        public
        returns (uint256)
    {
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, uri);
        return newItemId;
    }

    // Set the URI (metadata) for tokenId
    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
    {
        _tokenURIs[tokenId] = _tokenURI;
    }

    // Return the Token URI - Required for viewing properly on OpenSea
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Token does not exist");
        string memory _tokenURI = _tokenURIs[tokenId];

        return _tokenURI;
    }
}
