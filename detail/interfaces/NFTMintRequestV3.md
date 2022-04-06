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

[defs/loopring_defs.ts:1761](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1761)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1812](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1812)

___

### counterFactualNftInfo

• `Optional` **counterFactualNftInfo**: ``null`` \| [`NFTCounterFactualInfo`](NFTCounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1811](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1811)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1804](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1804)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1798](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1798)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1713](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1713)

___

### forceToMint

• `Optional` **forceToMint**: `boolean`

force to mint, regardless the previous mint record

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1792](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1792)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1810](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1810)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1780](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1780)

___

### minterAddress

• **minterAddress**: `string`

account owner address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1725](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1725)

___

### minterId

• **minterId**: `number`

account ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1719](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1719)

___

### nftId

• **nftId**: `string`

NFT_ID url_id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1755](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1755)

___

### nftType

• **nftType**: ``0`` \| ``1``

nftType: 0 for EIP1155, 1 for EIP712. EIP1155 by default.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1743](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1743)

___

### royaltyPercentage

• **royaltyPercentage**: `number`

0-50

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1786](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1786)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1774](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1774)

___

### toAccountId

• **toAccountId**: `number`

The account receive the minted NFTAction token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1731](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1731)

___

### toAddress

• `Optional` **toAddress**: `string`

The account receive the minted NFTAction token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1737](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1737)

___

### tokenAddress

• **tokenAddress**: `string`

Contract address

**`type{string}`**

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1749](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1749)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1768](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1768)
