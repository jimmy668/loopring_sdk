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

[defs/loopring_defs.ts:1462](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1462)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1464](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1464)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1444](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1444)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1438](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1438)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1384](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1384)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1450](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1450)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1420](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1420)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1456](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1456)

___

### payeeAddr

• **payeeAddr**: `string`

payee account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1408](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1408)

___

### payeeId

• **payeeId**: `number`

payee account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1402](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1402)

___

### payerAddr

• **payerAddr**: `string`

payer account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1396](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1396)

___

### payerId

• **payerId**: `number`

payer account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1390](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1390)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1426](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1426)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1414](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1414)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1432](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L1432)
