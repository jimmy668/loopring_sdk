[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / DelegateAPI

# Class: DelegateAPI

## Hierarchy

- `BaseAPI`

  ↳ **`DelegateAPI`**

## Table of contents

### Constructors

- [constructor](DelegateAPI.md#constructor)

### Properties

- [baseUrl](DelegateAPI.md#baseurl)
- [chainId](DelegateAPI.md#chainid)
- [KEY\_MESSAGE](DelegateAPI.md#key_message)

### Methods

- [genErr](DelegateAPI.md#generr)
- [getAvailableBroker](DelegateAPI.md#getavailablebroker)
- [getCode](DelegateAPI.md#getcode)
- [getCounterFactualInfo](DelegateAPI.md#getcounterfactualinfo)
- [makeReq](DelegateAPI.md#makereq)
- [returnTxHash](DelegateAPI.md#returntxhash)
- [setBaseUrl](DelegateAPI.md#setbaseurl)
- [setChainId](DelegateAPI.md#setchainid)

## Constructors

### constructor

• **new DelegateAPI**(`param`, `timeout?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `param` | `InitParam` | `undefined` |
| `timeout` | `number` | `DEFAULT_TIMEOUT` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[api/base_api.ts:87](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L87)

## Properties

### baseUrl

• `Protected` **baseUrl**: `string` = `""`

#### Inherited from

BaseAPI.baseUrl

#### Defined in

[api/base_api.ts:39](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L39)

___

### chainId

• `Protected` **chainId**: [`ChainId`](../enums/ChainId.md) = `ChainId.MAINNET`

#### Inherited from

BaseAPI.chainId

#### Defined in

[api/base_api.ts:40](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L40)

___

### KEY\_MESSAGE

▪ `Static` **KEY\_MESSAGE**: `string` = `KEY_MESSAGE`

#### Inherited from

BaseAPI.KEY\_MESSAGE

#### Defined in

[api/base_api.ts:38](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L38)

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

[api/base_api.ts:41](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L41)

___

### getAvailableBroker

▸ **getAvailableBroker**(): `Promise`<{ `broker`: `string`  }\>

#### Returns

`Promise`<{ `broker`: `string`  }\>

#### Inherited from

BaseAPI.getAvailableBroker

#### Defined in

[api/base_api.ts:98](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L98)

___

### getCode

▸ **getCode**(`address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/delegate_api.ts:7](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/delegate_api.ts#L7)

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

[api/base_api.ts:109](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L109)

___

### makeReq

▸ `Protected` **makeReq**(): `Request`

#### Returns

`Request`

#### Inherited from

BaseAPI.makeReq

#### Defined in

[api/base_api.ts:152](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L152)

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

[api/base_api.ts:67](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L67)

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

[api/base_api.ts:148](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L148)

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

[api/base_api.ts:143](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/api/base_api.ts#L143)
