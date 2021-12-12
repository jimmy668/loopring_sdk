[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OriginTransferRequestV3

# Interface: OriginTransferRequestV3

Submit internal transfer params

**`export`**

**`interface`** OriginTransferRequestV3

## Table of contents

### Properties

- [clientId](OriginTransferRequestV3.md#clientid)
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

[defs/loopring_defs.ts:1291](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1291)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1273](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1273)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1267](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1267)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1213](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1213)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1279](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1279)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1249](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1249)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1285](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1285)

___

### payeeAddr

• **payeeAddr**: `string`

payee account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1237](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1237)

___

### payeeId

• **payeeId**: `number`

payee account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1231](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1231)

___

### payerAddr

• **payerAddr**: `string`

payer account address

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1225](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1225)

___

### payerId

• **payerId**: `number`

payer account ID

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1219](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1219)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1255](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1255)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1243](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1243)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1261](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L1261)
