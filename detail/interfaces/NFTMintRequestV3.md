[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / NFTMintRequestV3

# Interface: NFTMintRequestV3

**`export`**

**`interface`** NFTMintRequestV3

## Table of contents

### Properties

- [amount](NFTMintRequestV3.md#amount)
- [counterFactualInfo](NFTMintRequestV3.md#counterfactualinfo)
- [counterFactualNftInfo](NFTMintRequestV3.md#counterfactualnftinfo)
- [creatorFeeBips](NFTMintRequestV3.md#creatorfeebips)
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

[defs/loopring_defs.ts:1684](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1684)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1735](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1735)

___

### counterFactualNftInfo

• `Optional` **counterFactualNftInfo**: ``null`` \| [`NFTCounterFactualInfo`](NFTCounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1734](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1734)

___

### creatorFeeBips

• `Optional` **creatorFeeBips**: `number`

fee to the creator of each NFT transaction.

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1690](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1690)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1727](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1727)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1721](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1721)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1636](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1636)

___

### forceToMint

• `Optional` **forceToMint**: `boolean`

force to mint, regardless the previous mint record

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1715](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1715)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1733](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1733)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1709](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1709)

___

### minterAddress

• **minterAddress**: `string`

account owner address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1648](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1648)

___

### minterId

• **minterId**: `number`

account ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1642](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1642)

___

### nftId

• **nftId**: `string`

NFT_ID url_id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1678](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1678)

___

### nftType

• **nftType**: ``0`` \| ``1``

nftType: 0 for EIP1155, 1 for EIP712. EIP1155 by default.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1666](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1666)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1703](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1703)

___

### toAccountId

• **toAccountId**: `number`

The account receive the minted NFT token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1654](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1654)

___

### toAddress

• `Optional` **toAddress**: `string`

The account receive the minted NFT token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1660](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1660)

___

### tokenAddress

• **tokenAddress**: `string`

Contract address

**`type{string}`**

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1672](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1672)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1697](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1697)
