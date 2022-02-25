[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / NFTOrderRequestV3

# Interface: NFTOrderRequestV3

**`export`**

**`interface`** NFTOrderRequestV3

## Table of contents

### Properties

- [accountId](NFTOrderRequestV3.md#accountid)
- [affiliate](NFTOrderRequestV3.md#affiliate)
- [allOrNone](NFTOrderRequestV3.md#allornone)
- [buyToken](NFTOrderRequestV3.md#buytoken)
- [clientOrderId](NFTOrderRequestV3.md#clientorderid)
- [eddsaSignature](NFTOrderRequestV3.md#eddsasignature)
- [exchange](NFTOrderRequestV3.md#exchange)
- [fillAmountBOrS](NFTOrderRequestV3.md#fillamountbors)
- [maxFeeBips](NFTOrderRequestV3.md#maxfeebips)
- [orderType](NFTOrderRequestV3.md#ordertype)
- [sellToken](NFTOrderRequestV3.md#selltoken)
- [storageId](NFTOrderRequestV3.md#storageid)
- [taker](NFTOrderRequestV3.md#taker)
- [tradeChannel](NFTOrderRequestV3.md#tradechannel)
- [validUntil](NFTOrderRequestV3.md#validuntil)

## Properties

### accountId

• **accountId**: `number`

account ID

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1755](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1755)

___

### affiliate

• `Optional` **affiliate**: `string`

affiliate account id

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1833](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1833)

___

### allOrNone

• **allOrNone**: `boolean`

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1779](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1779)

___

### buyToken

• **buyToken**: [`NFTTokenAmountInfo`](NFTTokenAmountInfo.md)

buy token info

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1773](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1773)

___

### clientOrderId

• `Optional` **clientOrderId**: `string`

client order id.

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1809](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1809)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature.

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1803](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1803)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1749](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1749)

___

### fillAmountBOrS

• **fillAmountBOrS**: `boolean`

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1785](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1785)

___

### maxFeeBips

• `Optional` **maxFeeBips**: `number`

max fee bips.

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1797](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1797)

___

### orderType

• `Optional` **orderType**: `string`

order type

**`type{string}`**

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1815](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1815)

___

### sellToken

• **sellToken**: [`NFTTokenAmountInfo`](NFTTokenAmountInfo.md)

sell token info

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1767](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1767)

___

### storageId

• **storageId**: `number`

storage ID

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1761](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1761)

___

### taker

• `Optional` **taker**: `string`

taker address

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1827](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1827)

___

### tradeChannel

• `Optional` **tradeChannel**: `string`

trade channel

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1821](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1821)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** NFTOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1791](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1791)
