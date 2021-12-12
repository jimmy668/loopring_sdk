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

[defs/loopring_defs.ts:727](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L727)

___

### hash

• **hash**: `string`

#### Defined in

[defs/loopring_defs.ts:726](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L726)

___

### market

• **market**: `string`

#### Defined in

[defs/loopring_defs.ts:729](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L729)

___

### orderType

• **orderType**: [`OrderTypeResp`](../enums/OrderTypeResp.md)

#### Defined in

[defs/loopring_defs.ts:739](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L739)

___

### price

• **price**: `string`

#### Defined in

[defs/loopring_defs.ts:730](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L730)

___

### side

• **side**: [`Side`](../enums/Side.md)

#### Defined in

[defs/loopring_defs.ts:728](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L728)

___

### status

• **status**: [`OrderStatus`](../enums/OrderStatus.md)

#### Defined in

[defs/loopring_defs.ts:741](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L741)

___

### tradeChannel

• **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

#### Defined in

[defs/loopring_defs.ts:740](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L740)

___

### validity

• **validity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | `number` |
| `start` | `number` |

#### Defined in

[defs/loopring_defs.ts:738](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L738)

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

[defs/loopring_defs.ts:731](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L731)
