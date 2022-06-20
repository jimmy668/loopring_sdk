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
- [payPayeeUpdateAccount](OriginNFTTransferRequestV3.md#paypayeeupdateaccount)
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

[defs/loopring_defs.ts:1622](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1622)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

CounterFactualInfo

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1629](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1629)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1604](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1604)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1598](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1598)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1544](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1544)

___

### fromAccountId

• **fromAccountId**: `number`

fromAccountId

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1550](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1550)

___

### fromAddress

• **fromAddress**: `string`

payer account address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1556](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1556)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1610](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1610)

___

### maxFee

• **maxFee**: `Pick`<[`TokenVolumeV3`](TokenVolumeV3.md), ``"tokenId"``\> & { `amount`: `string`  }

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1580](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1580)

___

### memo

• `Optional` **memo**: `string`

transfer memo

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1616](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1616)

___

### payPayeeUpdateAccount

• `Optional` **payPayeeUpdateAccount**: `boolean`

If true, let the sender transferring to the receiver pay the receiver's account activation fee

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1636](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1636)

___

### storageId

• **storageId**: `number`

offchain Id

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1586](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1586)

___

### toAccountId

• **toAccountId**: `number`

to account ID

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1562](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1562)

___

### toAddress

• **toAddress**: `string`

toAddress address

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1568](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1568)

___

### token

• **token**: [`TokenVolumeNFT`](TokenVolumeNFT.md)

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1574](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1574)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OriginNFTTransferRequestV3

#### Defined in

[defs/loopring_defs.ts:1592](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L1592)
