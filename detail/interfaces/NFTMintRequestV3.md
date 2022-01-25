[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / NFTMintRequestV3

# Interface: NFTMintRequestV3

**`export`**

**`interface`** NFTMintRequestV3

## Table of contents

### Properties

- [amount](NFTMintRequestV3.md#amount)
- [counterFactualInfo](NFTMintRequestV3.md#counterfactualinfo)
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

[defs/loopring_defs.ts:1673](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1673)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1723](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1723)

___

### creatorFeeBips

• `Optional` **creatorFeeBips**: `number`

fee to the creator of each NFT transaction.

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1679](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1679)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1716](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1716)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1710](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1710)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1625](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1625)

___

### forceToMint

• `Optional` **forceToMint**: `boolean`

force to mint, regardless the previous mint record

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1704](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1704)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1722](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1722)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1698](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1698)

___

### minterAddress

• **minterAddress**: `string`

account owner address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1637](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1637)

___

### minterId

• **minterId**: `number`

account ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1631](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1631)

___

### nftId

• **nftId**: `string`

NFT_ID url_id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1667](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1667)

___

### nftType

• **nftType**: ``0`` \| ``1``

nftType: 0 for EIP1155, 1 for EIP712. EIP1155 by default.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1655](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1655)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1692](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1692)

___

### toAccountId

• **toAccountId**: `number`

The account receive the minted NFT token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1643](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1643)

___

### toAddress

• `Optional` **toAddress**: `string`

The account receive the minted NFT token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1649](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1649)

___

### tokenAddress

• **tokenAddress**: `string`

Contract address

**`type{string}`**

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1661](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1661)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1686](https://github.com/Loopring/loopring_sdk/blob/077bca2/src/defs/loopring_defs.ts#L1686)
