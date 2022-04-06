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

[defs/loopring_defs.ts:819](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L819)

___

### hash

• **hash**: `string`

#### Defined in

[defs/loopring_defs.ts:818](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L818)

___

### market

• **market**: `string`

#### Defined in

[defs/loopring_defs.ts:821](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L821)

___

### orderType

• **orderType**: [`OrderTypeResp`](../enums/OrderTypeResp.md)

#### Defined in

[defs/loopring_defs.ts:831](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L831)

___

### price

• **price**: `string`

#### Defined in

[defs/loopring_defs.ts:822](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L822)

___

### side

• **side**: [`Side`](../enums/Side.md)

#### Defined in

[defs/loopring_defs.ts:820](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L820)

___

### status

• **status**: [`OrderStatus`](../enums/OrderStatus.md)

#### Defined in

[defs/loopring_defs.ts:833](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L833)

___

### tradeChannel

• **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

#### Defined in

[defs/loopring_defs.ts:832](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L832)

___

### validity

• **validity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | `number` |
| `start` | `number` |

#### Defined in

[defs/loopring_defs.ts:830](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L830)

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

[defs/loopring_defs.ts:823](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L823)
