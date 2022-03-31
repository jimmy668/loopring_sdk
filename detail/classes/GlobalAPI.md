[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / GlobalAPI

# Class: GlobalAPI

## Hierarchy

- `BaseAPI`

  ↳ **`GlobalAPI`**

## Table of contents

### Constructors

- [constructor](GlobalAPI.md#constructor)

### Properties

- [baseUrl](GlobalAPI.md#baseurl)
- [chainId](GlobalAPI.md#chainid)
- [KEY\_MESSAGE](GlobalAPI.md#key_message)

### Methods

- [genErr](GlobalAPI.md#generr)
- [getActiveFeeInfo](GlobalAPI.md#getactivefeeinfo)
- [getAvailableBroker](GlobalAPI.md#getavailablebroker)
- [getCounterFactualInfo](GlobalAPI.md#getcounterfactualinfo)
- [getUserBalanceForFee](GlobalAPI.md#getuserbalanceforfee)
- [makeReq](GlobalAPI.md#makereq)
- [returnTxHash](GlobalAPI.md#returntxhash)
- [setBaseUrl](GlobalAPI.md#setbaseurl)
- [setChainId](GlobalAPI.md#setchainid)

## Constructors

### constructor

• **new GlobalAPI**(`param`, `timeout?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `param` | `InitParam` | `undefined` |
| `timeout` | `number` | `3000` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[api/base_api.ts:86](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L86)

## Properties

### baseUrl

• `Protected` **baseUrl**: `string` = `""`

#### Inherited from

BaseAPI.baseUrl

#### Defined in

[api/base_api.ts:38](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L38)

___

### chainId

• `Protected` **chainId**: [`ChainId`](../enums/ChainId.md) = `ChainId.MAINNET`

#### Inherited from

BaseAPI.chainId

#### Defined in

[api/base_api.ts:39](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L39)

___

### KEY\_MESSAGE

▪ `Static` **KEY\_MESSAGE**: `string` = `KEY_MESSAGE`

#### Inherited from

BaseAPI.KEY\_MESSAGE

#### Defined in

[api/base_api.ts:37](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L37)

## Methods

### genErr

▸ `Protected` **genErr**(`err`): [`RESULT_INFO`](../interfaces/RESULT_INFO.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

[`RESULT_INFO`](../interfaces/RESULT_INFO.md)

#### Inherited from

BaseAPI.genErr

#### Defined in

[api/base_api.ts:40](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L40)

___

### getActiveFeeInfo

▸ **getActiveFeeInfo**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |
| `request.accountId?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api/global_api.ts:29](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/global_api.ts#L29)

___

### getAvailableBroker

▸ **getAvailableBroker**(): `Promise`<{ `broker`: `string`  }\>

#### Returns

`Promise`<{ `broker`: `string`  }\>

#### Inherited from

BaseAPI.getAvailableBroker

#### Defined in

[api/base_api.ts:97](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L97)

___

### getCounterFactualInfo

▸ **getCounterFactualInfo**<`T`\>(`request`): `Promise`<{ `counterFactualInfo`: `undefined` \| [`CounterFactualInfo`](../interfaces/CounterFactualInfo.md) ; `error?`: [`RESULT_INFO`](../interfaces/RESULT_INFO.md) ; `raw_data`: `T`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`GetCounterFactualInfoRequest`](../interfaces/GetCounterFactualInfoRequest.md) |

#### Returns

`Promise`<{ `counterFactualInfo`: `undefined` \| [`CounterFactualInfo`](../interfaces/CounterFactualInfo.md) ; `error?`: [`RESULT_INFO`](../interfaces/RESULT_INFO.md) ; `raw_data`: `T`  }\>

#### Inherited from

BaseAPI.getCounterFactualInfo

#### Defined in

[api/base_api.ts:108](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L108)

___

### getUserBalanceForFee

▸ **getUserBalanceForFee**(`request`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |
| `request.accountId` | `number` |
| `request.tokens` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[api/global_api.ts:68](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/global_api.ts#L68)

___

### makeReq

▸ `Protected` **makeReq**(): `Request`

#### Returns

`Request`

#### Inherited from

BaseAPI.makeReq

#### Defined in

[api/base_api.ts:151](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L151)

___

### returnTxHash

▸ `Protected` **returnTxHash**<`T`\>(`raw_data`): [`RESULT_INFO`](../interfaces/RESULT_INFO.md) \| `Omit`<`T`, ``"resultInfo"``\> & { `raw_data`: `Omit`<`T`, ``"resultInfo"``\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TX_HASH_API`](../modules.md#tx_hash_api) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw_data` | `T` |

#### Returns

[`RESULT_INFO`](../interfaces/RESULT_INFO.md) \| `Omit`<`T`, ``"resultInfo"``\> & { `raw_data`: `Omit`<`T`, ``"resultInfo"``\>  }

#### Inherited from

BaseAPI.returnTxHash

#### Defined in

[api/base_api.ts:66](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L66)

___

### setBaseUrl

▸ **setBaseUrl**(`baseUrl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |

#### Returns

`void`

#### Inherited from

BaseAPI.setBaseUrl

#### Defined in

[api/base_api.ts:147](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L147)

___

### setChainId

▸ **setChainId**(`chainId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | [`ChainId`](../enums/ChainId.md) |

#### Returns

`void`

#### Inherited from

BaseAPI.setChainId

#### Defined in

[api/base_api.ts:142](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/api/base_api.ts#L142)
