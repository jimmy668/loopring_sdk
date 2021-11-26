[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / SubmitOrderRequestV3

# Interface: SubmitOrderRequestV3

## Table of contents

### Properties

- [accountId](SubmitOrderRequestV3.md#accountid)
- [allOrNone](SubmitOrderRequestV3.md#allornone)
- [buyToken](SubmitOrderRequestV3.md#buytoken)
- [channelId](SubmitOrderRequestV3.md#channelid)
- [clientOrderId](SubmitOrderRequestV3.md#clientorderid)
- [eddsaSignature](SubmitOrderRequestV3.md#eddsasignature)
- [exchange](SubmitOrderRequestV3.md#exchange)
- [fillAmountBOrS](SubmitOrderRequestV3.md#fillamountbors)
- [maxFeeBips](SubmitOrderRequestV3.md#maxfeebips)
- [orderType](SubmitOrderRequestV3.md#ordertype)
- [poolAddress](SubmitOrderRequestV3.md#pooladdress)
- [sellToken](SubmitOrderRequestV3.md#selltoken)
- [storageId](SubmitOrderRequestV3.md#storageid)
- [taker](SubmitOrderRequestV3.md#taker)
- [tradeChannel](SubmitOrderRequestV3.md#tradechannel)
- [validUntil](SubmitOrderRequestV3.md#validuntil)

## Properties

### accountId

• **accountId**: `number`

Loopring\'s account ID

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1121](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1121)

___

### allOrNone

• **allOrNone**: `boolean`

Whether the order supports partial fills or not.Currently only supports false as a valid value

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1145](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1145)

___

### buyToken

• **buyToken**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1139](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1139)

___

### channelId

• `Optional` **channelId**: `string`

Aux data to mark the order source

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1202](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1202)

___

### clientOrderId

• `Optional` **clientOrderId**: `string`

An arbitrary, client-set unique order identifier, max length is 120 bytes

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1175](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1175)

___

### eddsaSignature

• **eddsaSignature**: `string`

The orders EdDSA signature. The signature is a hexadecimal string obtained by signing the order itself and concatenating the resulting signature parts (Rx, Ry, and S). Used to authenticate and authorize the operation.

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1169](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1169)

___

### exchange

• **exchange**: `string`

The adderss of the exchange which has to process this order

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1115](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1115)

___

### fillAmountBOrS

• **fillAmountBOrS**: `boolean`

Fill size by buy token or by sell token

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1151](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1151)

___

### maxFeeBips

• **maxFeeBips**: `number`

Maximum order fee that the user can accept, value range (in ten thousandths) 1 ~ 63

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1163](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1163)

___

### orderType

• `Optional` **orderType**: [`OrderType`](../enums/OrderType.md)

Order types, can be AMM, LIMIT_ORDER, MAKER_ONLY, TAKER_ONLY

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1181](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1181)

___

### poolAddress

• `Optional` **poolAddress**: `string`

The AMM pool address if order type is AMM

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1196](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1196)

___

### sellToken

• **sellToken**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1133](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1133)

___

### storageId

• **storageId**: `number`

The unique identifier of the L2 Merkle tree storage slot where the burn made in order to exit the pool will or has been stored.

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1127](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1127)

___

### taker

• `Optional` **taker**: `string`

#### Defined in

[defs/loopring_defs.ts:1190](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1190)

___

### tradeChannel

• `Optional` **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

Used by the P2P order which user specify the taker, so far its 0x0000000000000000000000000000000000000000

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1188](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1188)

___

### validUntil

• **validUntil**: `number`

Order expiration time, accuracy is in seconds

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1157](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1157)
