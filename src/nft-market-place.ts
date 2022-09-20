import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  NFTBought as NFTBoughtEvent,
  NFTDelisted as NFTDelistedEvent,
  NFTListed as NFTListedEvent,
  NFTUpdated as NFTUpdatedEvent,
  WithdrawBalance as WithdrawBalanceEvent,
} from "../generated/NFTMarketPlace/NFTMarketPlace"

import {
  NFTBought,
  NFTDelisted,
  NFTUpdated,
  ActiveNFT,
  NFTListed,
  WithdrawBalance,
} from "../generated/schema"
// import { ExampleEntity } from "../generated/schema"

export function handleNFTBought(event: NFTBoughtEvent): void {
  let nftBought = NFTBought.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  let activeNft = ActiveNFT.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  // doesnt exist - create a row in active NFT
  if (!nftBought) {
    nftBought = new NFTBought(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }

  nftBought.buyer = event.params.buyer
  nftBought.nftAddress = event.params.nftAddress
  nftBought.tokenId = event.params.tokenId
  nftBought.salePrice = event.params.salePrice

  // update the buyer with new buyer address
  activeNft!.buyer = event.params.buyer

  nftBought.save()
  activeNft!.save()
}

export function handleNFTListed(event: NFTListedEvent): void {
  let nftListed = NFTListed.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  let activeNft = ActiveNFT.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  if (!nftListed) {
    nftListed = new NFTListed(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  nftListed.tokenId = event.params.tokenId
  nftListed.nftAddress = event.params.nftAddress
  nftListed.price = event.params.price
  nftListed.owner = event.params.owner

  if (!activeNft) {
    activeNft = new ActiveNFT(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  activeNft.owner = event.params.owner
  activeNft.tokenId = event.params.tokenId
  activeNft.price = event.params.price
  activeNft.nftAddress = event.params.nftAddress

  nftListed.save()
  activeNft.save()
}

export function handleNFTDelisted(event: NFTDelistedEvent): void {
  let nftDelisted = NFTDelisted.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  let activeNft = ActiveNFT.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  if (!nftDelisted) {
    nftDelisted = new NFTDelisted(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
    nftDelisted.owner = event.params.owner
    nftDelisted.nftAddress = event.params.nftAddress
    nftDelisted.tokenId = event.params.tokenId
  }

  activeNft!.tokenId = event.params.tokenId
  activeNft!.nftAddress = event.params.nftAddress
  activeNft!.price = event.params.listingPrice
  activeNft!.owner = Address.fromString(
    "0x000000000000000000000000000000000000dEaD"
  )

  nftDelisted.save()
  activeNft!.save()
}

export function handleNFTUpdated(event: NFTUpdatedEvent): void {
  let nftUpdated = NFTUpdated.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  let activeNft = ActiveNFT.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )

  if (!nftUpdated) {
    nftUpdated = new NFTUpdated(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }

  nftUpdated.tokenId = event.params.tokenId
  nftUpdated.nftAddress = event.params.nftAddress
  nftUpdated.revisedPrice = event.params.revisedPrice
  nftUpdated.owner = event.params.owner

  activeNft!.tokenId = event.params.tokenId
  activeNft!.nftAddress = event.params.nftAddress
  activeNft!.price = event.params.revisedPrice
  activeNft!.owner = event.params.owner

  nftUpdated.save()
  activeNft!.save()
}

const getIdFromEventParams = (tokenId: BigInt, tokenAddress: Bytes): string => {
  return tokenId.toHexString() + tokenAddress.toHexString()
}
