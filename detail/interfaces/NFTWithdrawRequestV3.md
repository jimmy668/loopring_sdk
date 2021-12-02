[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / NFTWithdrawRequestV3

# Interface: NFTWithdrawRequestV3

**`export`**

**`interface`** NFTWithdrawRequestV3

## Table of contents

### Properties

- [accountId](NFTWithdrawRequestV3.md#accountid)
- [ecdsaSignature](NFTWithdrawRequestV3.md#ecdsasignature)
- [eddsaSignature](NFTWithdrawRequestV3.md#eddsasignature)
- [exchange](NFTWithdrawRequestV3.md#exchange)
- [extraData](NFTWithdrawRequestV3.md#extradata)
- [hashApproved](NFTWithdrawRequestV3.md#hashapproved)
- [maxFee](NFTWithdrawRequestV3.md#maxfee)
- [minGas](NFTWithdrawRequestV3.md#mingas)
- [owner](NFTWithdrawRequestV3.md#owner)
- [storageId](NFTWithdrawRequestV3.md#storageid)
- [to](NFTWithdrawRequestV3.md#to)
- [token](NFTWithdrawRequestV3.md#token)
- [validUntil](NFTWithdrawRequestV3.md#validuntil)

## Properties

### accountId

• **accountId**: `number`

account ID

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1405](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1405)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1476](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1476)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1470](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1470)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1399](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1399)

___

### extraData

• `Optional` **extraData**: `string`

extra data for complex withdraw mode, normally none

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1458](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1458)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1482](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1482)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1428](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1428)

___

### minGas

• **minGas**: `number`

min gas for on-chain withdraw, Loopring exchange allocates gas for each distribution, but people can also assign this min gas, so Loopring have to allocate higher gas value for this specific distribution. Normally no need to take care of this value, 0 means let loopring choose the reasonable gas

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1446](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1446)

___

### owner

• **owner**: `string`

account owner address

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1411](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1411)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1434](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1434)

___

### to

• **to**: `string`

withdraw to address

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1452](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1452)

___

### token

• **token**: [`TokenVolumeNFT`](TokenVolumeNFT.md)

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1422](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1422)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1440](https://github.com/Loopring/loopring_sdk/blob/ee2acc4/src/defs/loopring_defs.ts#L1440)
