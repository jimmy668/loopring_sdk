[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / NFTWithdrawRequestV3

# Interface: NFTWithdrawRequestV3

**`export`**

**`interface`** NFTWithdrawRequestV3

## Table of contents

### Properties

- [accountId](NFTWithdrawRequestV3.md#accountid)
- [counterFactualInfo](NFTWithdrawRequestV3.md#counterfactualinfo)
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

[defs/loopring_defs.ts:1626](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1626)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1699](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1699)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1692](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1692)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1686](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1686)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1620](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1620)

___

### extraData

• `Optional` **extraData**: `string`

extra data for complex withdraw mode, normally none

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1674](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1674)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1698](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1698)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1644](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1644)

___

### minGas

• **minGas**: `number`

min gas for on-chain withdraw, Loopring exchange allocates gas for each distribution, but people can also assign this min gas, so Loopring have to allocate higher gas value for this specific distribution. Normally no need to take care of this value, 0 means let loopring choose the reasonable gas

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1662](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1662)

___

### owner

• **owner**: `string`

account owner address

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1632](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1632)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1650](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1650)

___

### to

• **to**: `string`

withdraw to address

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1668](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1668)

___

### token

• **token**: [`TokenVolumeNFT`](TokenVolumeNFT.md)

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1638](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1638)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTWithdrawRequestV3

#### Defined in

[defs/loopring_defs.ts:1656](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1656)
