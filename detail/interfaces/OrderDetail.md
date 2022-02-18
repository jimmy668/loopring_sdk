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

[defs/loopring_defs.ts:750](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L750)

___

### hash

• **hash**: `string`

#### Defined in

[defs/loopring_defs.ts:749](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L749)

___

### market

• **market**: `string`

#### Defined in

[defs/loopring_defs.ts:752](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L752)

___

### orderType

• **orderType**: [`OrderTypeResp`](../enums/OrderTypeResp.md)

#### Defined in

[defs/loopring_defs.ts:762](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L762)

___

### price

• **price**: `string`

#### Defined in

[defs/loopring_defs.ts:753](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L753)

___

### side

• **side**: [`Side`](../enums/Side.md)

#### Defined in

[defs/loopring_defs.ts:751](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L751)

___

### status

• **status**: [`OrderStatus`](../enums/OrderStatus.md)

#### Defined in

[defs/loopring_defs.ts:764](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L764)

___

### tradeChannel

• **tradeChannel**: [`TradeChannel`](../enums/TradeChannel.md)

#### Defined in

[defs/loopring_defs.ts:763](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L763)

___

### validity

• **validity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | `number` |
| `start` | `number` |

#### Defined in

[defs/loopring_defs.ts:761](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L761)

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

[defs/loopring_defs.ts:754](https://github.com/Loopring/loopring_sdk/blob/532648f/src/defs/loopring_defs.ts#L754)
