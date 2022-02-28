[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OrderDetail

# Interface: OrderDetail

## Table of contents

### Properties

- [clientOrderId](OrderDetail.md#clientorderid)
- [hash](OrderDetail.md#hash)
- [market](OrderDetail.md#market)
- [orderType](OrderDetail.md#ordertype)
- [price](OrderDetail.md#price)
- [side](OrderDetail.md#side)
- [status](OrderDetail.md#status)
- [tradeChannel](OrderDetail.md#tradechannel)
- [validity](OrderDetail.md#validity)
- [volumes](OrderDetail.md#volumes)

## Properties

### clientOrderId

• **clientOrderId**: `string`

#### Defined in

[defs/loopring_defs.ts:769](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L769)

___

### hash

• **hash**: `string`

#### Defined in

[defs/loopring_defs.ts:768](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L768)

___

### market

• **market**: `string`

#### Defined in

[defs/loopring_defs.ts:771](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L771)

___

### orderType

• **orderType**: [`OrderTypeResp`](../enums/OrderTypeResp.md)

#### Defined in

[defs/loopring_defs.ts:781](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L781)

___

### price

• **price**: `string`

#### Defined in

[defs/loopring_defs.ts:772](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L772)

___

### side

• **side**: [`Side`](../enums/Side.md)

#### Defined in

[defs/loopring_defs.ts:770](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L770)

___

### status

• **status**: [`OrderStatus`](../enums/OrderStatus.md)

#### Defined in

[defs/loopring_defs.ts:783](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L783)

___

### tradeChannel

• **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

#### Defined in

[defs/loopring_defs.ts:782](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L782)

___

### validity

• **validity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | `number` |
| `start` | `number` |

#### Defined in

[defs/loopring_defs.ts:780](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L780)

___

### volumes

• **volumes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseAmount` | `string` |
| `baseFilled` | `string` |
| `fee` | `string` |
| `quoteAmount` | `string` |
| `quoteFilled` | `string` |

#### Defined in

[defs/loopring_defs.ts:773](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L773)
