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

[defs/loopring_defs.ts:1791](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1791)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1842](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1842)

___

### counterFactualNftInfo

• `Optional` **counterFactualNftInfo**: ``null`` \| [`NFTCounterFactualInfo`](NFTCounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1841](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1841)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1834](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1834)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1828](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1828)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1743](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1743)

___

### forceToMint

• `Optional` **forceToMint**: `boolean`

force to mint, regardless the previous mint record

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1822](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1822)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1840](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1840)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1810](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1810)

___

### minterAddress

• **minterAddress**: `string`

account owner address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1755](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1755)

___

### minterId

• **minterId**: `number`

account ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1749](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1749)

___

### nftId

• **nftId**: `string`

NFT_ID url_id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1785](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1785)

___

### nftType

• **nftType**: ``0`` \| ``1``

nftType: 0 for EIP1155, 1 for EIP712. EIP1155 by default.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1773](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1773)

___

### royaltyPercentage

• **royaltyPercentage**: `number`

0-50

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1816](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1816)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1804](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1804)

___

### toAccountId

• **toAccountId**: `number`

The account receive the minted NFTAction token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1761](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1761)

___

### toAddress

• `Optional` **toAddress**: `string`

The account receive the minted NFTAction token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1767](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1767)

___

### tokenAddress

• **tokenAddress**: `string`

Contract address

**`type{string}`**

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1779](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1779)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1798](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1798)
