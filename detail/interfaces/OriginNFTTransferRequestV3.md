[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OriginNFTTransferRequestV3

# Interface: OriginNFTTransferRequestV3

Submit internal transfer params

**`export`**

**`interface`** OriginNFTTransferRequestV3

## Table of contents

### Properties

- [clientId](OriginNFTTransferRequestV3.md#clientid)
- [counterFactualInfo](OriginNFTTransferRequestV3.md#counterfactualinfo)
- [ecdsaSignature](OriginNFTTransferRequestV3.md#ecdsasignature)
- [eddsaSignature](OriginNFTTransferRequestV3.md#eddsasignature)
- [exchange](OriginNFTTransferRequestV3.md#exchange)
- [fromAccountId](OriginNFTTransferRequestV3.md#fromaccountid)
- [fromAddress](OriginNFTTransferRequestV3.md#fromaddress)
- [hashApproved](OriginNFTTransferRequestV3.md#hashapproved)
- [maxFee](OriginNFTTransferRequestV3.md#maxfee)
- [memo](OriginNFTTransferRequestV3.md#memo)
- [storageId](OriginNFTTransferRequestV3.md#storageid)
- [toAccountId](OriginNFTTransferRequestV3.md#toaccountid)
- [toAddress](OriginNFTTransferRequestV3.md#toaddress)
- [token](OriginNFTTransferRequestV3.md#token)
- [validUntil](OriginNFTTransferRequestV3.md#validuntil)

## Properties

### clientId

• `Optional` **clientId**: `string`

A user-defined id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1605](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1605)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1606](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1606)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1587](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1587)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1581](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1581)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1527](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1527)

___

### fromAccountId

• **fromAccountId**: `number`

fromAccountId

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1533](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1533)

___

### fromAddress

• **fromAddress**: `string`

payer account address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1539](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1539)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1593](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1593)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1563](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1563)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1599](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1599)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1569](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1569)

___

### toAccountId

• **toAccountId**: `number`

to account ID

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1545](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1545)

___

### toAddress

• **toAddress**: `string`

toAddress address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1551](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1551)

___

### token

• **token**: [`TokenVolumeNFT`](TokenVolumeNFT.md)

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1557](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1557)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1575](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1575)
