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

[defs/loopring_defs.ts:1477](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1477)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1478](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1478)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1459](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1459)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1453](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1453)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1399](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1399)

___

### fromAccountId

• **fromAccountId**: `number`

fromAccountId

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1405](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1405)

___

### fromAddress

• **fromAddress**: `string`

payer account address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1411](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1411)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1465](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1465)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1435](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1435)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1471](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1471)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1441](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1441)

___

### toAccountId

• **toAccountId**: `number`

to account ID

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1417](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1417)

___

### toAddress

• **toAddress**: `string`

toAddress address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1423](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1423)

___

### token

• **token**: [`TokenVolumeNFT`](TokenVolumeNFT.md)

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1429](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1429)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1447](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1447)
