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

[defs/loopring_defs.ts:1395](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1395)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1397](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1397)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1377](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1377)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1371](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1371)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1317](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1317)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1383](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1383)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1353](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1353)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1389](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1389)

___

### payeeAddr

• **payeeAddr**: `string`

payee account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1341](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1341)

___

### payeeId

• **payeeId**: `number`

payee account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1335](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1335)

___

### payerAddr

• **payerAddr**: `string`

payer account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1329](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1329)

___

### payerId

• **payerId**: `number`

payer account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1323](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1323)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1359](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1359)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1347](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1347)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1365](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1365)
