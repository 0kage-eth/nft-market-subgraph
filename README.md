# GRAPH NFT

## SETUP

1. Create a new subgraph on [thegraph.com](https://thegraph.com/studio)

## IMPORTANT NOTES

Creates a subgraph for NFT Marketplace. Once subgraph is created, you can link it up with your front end.

- Change the table structure in [nft-market-place.ts](./src/nft-market-place.ts). Current tables support all events defined in NFTMarketplace.sol
- Current contract is deployed on Goerli. Contract address is 0x8eb7cC579eC8435C47f26deaE16A23434Da38968. You can link the subgraph to your own address by changing line 9 in [subgraph.yaml](./subgraph.yaml)
- Start block from where subgraph is listenting to on-chain events is defined as one block before creation of first event (7627130). Change start block as you deem fit.
