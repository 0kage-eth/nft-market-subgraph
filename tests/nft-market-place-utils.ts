import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NFTBought,
  NFTDelisted,
  NFTListed,
  NFTUpdated,
  WithdrawBalance
} from "../generated/NFTMarketPlace/NFTMarketPlace"

export function createNFTBoughtEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  salePrice: BigInt
): NFTBought {
  let nftBoughtEvent = changetype<NFTBought>(newMockEvent())

  nftBoughtEvent.parameters = new Array()

  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "salePrice",
      ethereum.Value.fromUnsignedBigInt(salePrice)
    )
  )

  return nftBoughtEvent
}

export function createNFTDelistedEvent(
  owner: Address,
  nftAddress: Address,
  tokenId: BigInt,
  listingPrice: BigInt
): NFTDelisted {
  let nftDelistedEvent = changetype<NFTDelisted>(newMockEvent())

  nftDelistedEvent.parameters = new Array()

  nftDelistedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nftDelistedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftDelistedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftDelistedEvent.parameters.push(
    new ethereum.EventParam(
      "listingPrice",
      ethereum.Value.fromUnsignedBigInt(listingPrice)
    )
  )

  return nftDelistedEvent
}

export function createNFTListedEvent(
  owner: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): NFTListed {
  let nftListedEvent = changetype<NFTListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftListedEvent
}

export function createNFTUpdatedEvent(
  owner: Address,
  nftAddress: Address,
  tokenId: BigInt,
  revisedPrice: BigInt
): NFTUpdated {
  let nftUpdatedEvent = changetype<NFTUpdated>(newMockEvent())

  nftUpdatedEvent.parameters = new Array()

  nftUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nftUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "revisedPrice",
      ethereum.Value.fromUnsignedBigInt(revisedPrice)
    )
  )

  return nftUpdatedEvent
}

export function createWithdrawBalanceEvent(
  withdrawer: Address,
  withdrawAmount: BigInt
): WithdrawBalance {
  let withdrawBalanceEvent = changetype<WithdrawBalance>(newMockEvent())

  withdrawBalanceEvent.parameters = new Array()

  withdrawBalanceEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawer",
      ethereum.Value.fromAddress(withdrawer)
    )
  )
  withdrawBalanceEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAmount",
      ethereum.Value.fromUnsignedBigInt(withdrawAmount)
    )
  )

  return withdrawBalanceEvent
}
