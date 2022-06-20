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

[defs/loopring_defs.ts:824](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L824)

___

### hash

• **hash**: `string`

#### Defined in

[defs/loopring_defs.ts:823](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L823)

___

### market

• **market**: `string`

#### Defined in

[defs/loopring_defs.ts:826](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L826)

___

### orderType

• **orderType**: [`OrderTypeResp`](../enums/OrderTypeResp.md)

#### Defined in

[defs/loopring_defs.ts:836](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L836)

___

### price

• **price**: `string`

#### Defined in

[defs/loopring_defs.ts:827](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L827)

___

### side

• **side**: [`Side`](../enums/Side.md)

#### Defined in

[defs/loopring_defs.ts:825](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L825)

___

### status

• **status**: [`OrderStatus`](../enums/OrderStatus.md)

#### Defined in

[defs/loopring_defs.ts:838](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L838)

___

### tradeChannel

• **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

#### Defined in

[defs/loopring_defs.ts:837](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L837)

___

### validity

• **validity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | `number` |
| `start` | `number` |

#### Defined in

[defs/loopring_defs.ts:835](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L835)

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

[defs/loopring_defs.ts:828](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/defs/loopring_defs.ts#L828)
