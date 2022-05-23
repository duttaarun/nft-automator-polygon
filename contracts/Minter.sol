// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Minter is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter private currentTokenId;

    // Map token Ids to token URI
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721("NFTAutomatedMinterAppv3", "Minter") {}

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
