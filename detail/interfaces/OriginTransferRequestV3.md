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

[defs/loopring_defs.ts:1406](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1406)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1408](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1408)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1388](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1388)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1382](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1382)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1328](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1328)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1394](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1394)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1364](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1364)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1400](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1400)

___

### payeeAddr

• **payeeAddr**: `string`

payee account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1352](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1352)

___

### payeeId

• **payeeId**: `number`

payee account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1346](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1346)

___

### payerAddr

• **payerAddr**: `string`

payer account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1340](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1340)

___

### payerId

• **payerId**: `number`

payer account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1334](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1334)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1370](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1370)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1358](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1358)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1376](https://github.com/Loopring/loopring_sdk/blob/a4b843d/src/defs/loopring_defs.ts#L1376)
