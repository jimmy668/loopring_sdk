[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / NFTMintRequestV3

# Interface: NFTMintRequestV3

**`export`**

**`interface`** NFTMintRequestV3

## Table of contents

### Properties

- [amount](NFTMintRequestV3.md#amount)
- [counterFactualInfo](NFTMintRequestV3.md#counterfactualinfo)
- [counterFactualNftInfo](NFTMintRequestV3.md#counterfactualnftinfo)
- [ecdsaSignature](NFTMintRequestV3.md#ecdsasignature)
- [eddsaSignature](NFTMintRequestV3.md#eddsasignature)
- [exchange](NFTMintRequestV3.md#exchange)
- [forceToMint](NFTMintRequestV3.md#forcetomint)
- [hashApproved](NFTMintRequestV3.md#hashapproved)
- [maxFee](NFTMintRequestV3.md#maxfee)
- [minterAddress](NFTMintRequestV3.md#minteraddress)
- [minterId](NFTMintRequestV3.md#minterid)
- [nftId](NFTMintRequestV3.md#nftid)
- [nftType](NFTMintRequestV3.md#nfttype)
- [royaltyPercentage](NFTMintRequestV3.md#royaltypercentage)
- [storageId](NFTMintRequestV3.md#storageid)
- [toAccountId](NFTMintRequestV3.md#toaccountid)
- [toAddress](NFTMintRequestV3.md#toaddress)
- [tokenAddress](NFTMintRequestV3.md#tokenaddress)
- [validUntil](NFTMintRequestV3.md#validuntil)

## Properties

### amount

• **amount**: `string`

The amount of the token

**`memberof`** TokenVolumeV3

#### Defined in

[defs/loopring_defs.ts:1740](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1740)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1791](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1791)

___

### counterFactualNftInfo

• `Optional` **counterFactualNftInfo**: ``null`` \| [`NFTCounterFactualInfo`](NFTCounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1790](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1790)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1783](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1783)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1777](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1777)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1692](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1692)

___

### forceToMint

• `Optional` **forceToMint**: `boolean`

force to mint, regardless the previous mint record

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1771](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1771)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1789](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1789)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1759](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1759)

___

### minterAddress

• **minterAddress**: `string`

account owner address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1704](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1704)

___

### minterId

• **minterId**: `number`

account ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1698](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1698)

___

### nftId

• **nftId**: `string`

NFT_ID url_id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1734](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1734)

___

### nftType

• **nftType**: ``0`` \| ``1``

nftType: 0 for EIP1155, 1 for EIP712. EIP1155 by default.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1722](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1722)

___

### royaltyPercentage

• **royaltyPercentage**: `number`

0-50

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1765](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1765)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1753](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1753)

___

### toAccountId

• **toAccountId**: `number`

The account receive the minted NFTAction token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1710](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1710)

___

### toAddress

• `Optional` **toAddress**: `string`

The account receive the minted NFTAction token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1716](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1716)

___

### tokenAddress

• **tokenAddress**: `string`

Contract address

**`type{string}`**

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1728](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1728)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1747](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1747)
