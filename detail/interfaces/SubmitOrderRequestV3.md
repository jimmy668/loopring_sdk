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

[defs/loopring_defs.ts:1310](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1310)

___

### allOrNone

• **allOrNone**: `boolean`

Whether the order supports partial fills or not.Currently only supports false as a valid value

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1334](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1334)

___

### buyToken

• **buyToken**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1328](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1328)

___

### channelId

• `Optional` **channelId**: `string`

Aux data to mark the order source

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1391](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1391)

___

### clientOrderId

• `Optional` **clientOrderId**: `string`

An arbitrary, client-set unique order identifier, max length is 120 bytes

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1364](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1364)

___

### eddsaSignature

• **eddsaSignature**: `string`

The orders EdDSA signature. The signature is a hexadecimal string obtained by signing the order itself and concatenating the resulting signature parts (Rx, Ry, and S). Used to authenticate and authorize the operation.

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1358](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1358)

___

### exchange

• **exchange**: `string`

The adderss of the exchange which has to process this order

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1304](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1304)

___

### fillAmountBOrS

• **fillAmountBOrS**: `boolean`

Fill size by buy token or by sell token

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1340](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1340)

___

### maxFeeBips

• **maxFeeBips**: `number`

Maximum order fee that the user can accept, value range (in ten thousandths) 1 ~ 63

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1352](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1352)

___

### orderType

• `Optional` **orderType**: [`OrderType`](../enums/OrderType.md)

Order types, can be AMM, LIMIT_ORDER, MAKER_ONLY, TAKER_ONLY

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1370](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1370)

___

### poolAddress

• `Optional` **poolAddress**: `string`

The AMM pool address if order type is AMM

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1385](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1385)

___

### sellToken

• **sellToken**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1322](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1322)

___

### storageId

• **storageId**: `number`

The unique identifier of the L2 Merkle tree storage slot where the burn made in order to exit the pool will or has been stored.

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1316](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1316)

___

### taker

• `Optional` **taker**: `string`

#### Defined in

[defs/loopring_defs.ts:1379](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1379)

___

### tradeChannel

• `Optional` **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

Used by the P2P order which user specify the taker, so far its 0x0000000000000000000000000000000000000000

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1377](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1377)

___

### validUntil

• **validUntil**: `number`

Order expiration time, accuracy is in seconds

**`memberof`** SubmitOrderRequestV3

#### Defined in

[defs/loopring_defs.ts:1346](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1346)
