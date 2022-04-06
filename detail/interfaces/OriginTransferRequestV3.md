[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OriginTransferRequestV3

# Interface: OriginTransferRequestV3

Submit internal transfer params

**`export`**

**`interface`** OriginTransferRequestV3

## Table of contents

### Properties

- [clientId](OriginTransferRequestV3.md#clientid)
- [counterFactualInfo](OriginTransferRequestV3.md#counterfactualinfo)
- [ecdsaSignature](OriginTransferRequestV3.md#ecdsasignature)
- [eddsaSignature](OriginTransferRequestV3.md#eddsasignature)
- [exchange](OriginTransferRequestV3.md#exchange)
- [hashApproved](OriginTransferRequestV3.md#hashapproved)
- [maxFee](OriginTransferRequestV3.md#maxfee)
- [memo](OriginTransferRequestV3.md#memo)
- [payeeAddr](OriginTransferRequestV3.md#payeeaddr)
- [payeeId](OriginTransferRequestV3.md#payeeid)
- [payerAddr](OriginTransferRequestV3.md#payeraddr)
- [payerId](OriginTransferRequestV3.md#payerid)
- [storageId](OriginTransferRequestV3.md#storageid)
- [token](OriginTransferRequestV3.md#token)
- [validUntil](OriginTransferRequestV3.md#validuntil)

## Properties

### clientId

• `Optional` **clientId**: `string`

A user-defined id

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1483](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1483)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1485](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1485)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1465](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1465)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1459](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1459)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1405](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1405)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1471](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1471)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1441](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1441)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1477](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1477)

___

### payeeAddr

• **payeeAddr**: `string`

payee account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1429](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1429)

___

### payeeId

• **payeeId**: `number`

payee account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1423](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1423)

___

### payerAddr

• **payerAddr**: `string`

payer account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1417](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1417)

___

### payerId

• **payerId**: `number`

payer account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1411](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1411)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1447](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1447)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1435](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1435)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1453](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1453)
