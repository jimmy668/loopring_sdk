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

[defs/loopring_defs.ts:733](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L733)

___

### hash

• **hash**: `string`

#### Defined in

[defs/loopring_defs.ts:732](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L732)

___

### market

• **market**: `string`

#### Defined in

[defs/loopring_defs.ts:735](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L735)

___

### orderType

• **orderType**: [`OrderTypeResp`](../enums/OrderTypeResp.md)

#### Defined in

[defs/loopring_defs.ts:745](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L745)

___

### price

• **price**: `string`

#### Defined in

[defs/loopring_defs.ts:736](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L736)

___

### side

• **side**: [`Side`](../enums/Side.md)

#### Defined in

[defs/loopring_defs.ts:734](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L734)

___

### status

• **status**: [`OrderStatus`](../enums/OrderStatus.md)

#### Defined in

[defs/loopring_defs.ts:747](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L747)

___

### tradeChannel

• **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

#### Defined in

[defs/loopring_defs.ts:746](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L746)

___

### validity

• **validity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | `number` |
| `start` | `number` |

#### Defined in

[defs/loopring_defs.ts:744](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L744)

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

[defs/loopring_defs.ts:737](https://github.com/Loopring/loopring_sdk/blob/b7df545/src/defs/loopring_defs.ts#L737)
