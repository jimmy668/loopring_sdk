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

[defs/loopring_defs.ts:1528](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1528)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1529](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1529)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1510](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1510)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1504](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1504)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1450](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1450)

___

### fromAccountId

• **fromAccountId**: `number`

fromAccountId

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1456](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1456)

___

### fromAddress

• **fromAddress**: `string`

payer account address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1462](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1462)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1516](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1516)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1486](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1486)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1522](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1522)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1492](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1492)

___

### toAccountId

• **toAccountId**: `number`

to account ID

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1468](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1468)

___

### toAddress

• **toAddress**: `string`

toAddress address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1474](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1474)

___

### token

• **token**: [`TokenVolumeNFT`](TokenVolumeNFT.md)

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1480](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1480)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1498](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1498)
