[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / NFTMintRequestV3

# Interface: NFTMintRequestV3

**`export`**

**`interface`** NFTMintRequestV3

## Table of contents

### Properties

- [amount](NFTMintRequestV3.md#amount)
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

[defs/loopring_defs.ts:1544](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1544)

___

### creatorFeeBips

• `Optional` **creatorFeeBips**: `number`

fee to the creator of each NFT transaction.

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1550](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1550)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1587](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1587)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1581](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1581)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1496](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1496)

___

### forceToMint

• `Optional` **forceToMint**: `boolean`

force to mint, regardless the previous mint record

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1575](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1575)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1593](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1593)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1569](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1569)

___

### minterAddress

• **minterAddress**: `string`

account owner address

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1508](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1508)

___

### minterId

• **minterId**: `number`

account ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1502](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1502)

___

### nftId

• **nftId**: `string`

NFT_ID url_id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1538](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1538)

___

### nftType

• **nftType**: ``0`` \| ``1``

nftType: 0 for EIP1155, 1 for EIP712. EIP1155 by default.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1526](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1526)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1563](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1563)

___

### toAccountId

• **toAccountId**: `number`

The account receive the minted NFT token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1514](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1514)

___

### toAddress

• `Optional` **toAddress**: `string`

The account receive the minted NFT token, now should be minter himself.

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1520](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1520)

___

### tokenAddress

• **tokenAddress**: `string`

Contract address

**`type{string}`**

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1532](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1532)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTMintRequestV3

#### Defined in

[defs/loopring_defs.ts:1557](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1557)
