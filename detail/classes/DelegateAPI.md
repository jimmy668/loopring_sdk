[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / DelegateAPI

# Class: DelegateAPI

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

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
| `param` | [`InitParam`](../interfaces/InitParam.md) | `undefined` |
| `timeout` | `number` | `3000` |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[api/base_api.ts:85](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L85)

## Properties

### baseUrl

• `Protected` **baseUrl**: `string` = `""`

#### Inherited from

[BaseAPI](BaseAPI.md).[baseUrl](BaseAPI.md#baseurl)

#### Defined in

[api/base_api.ts:37](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L37)

___

### chainId

• `Protected` **chainId**: [`ChainId`](../enums/ChainId.md) = `ChainId.MAINNET`

#### Inherited from

[BaseAPI](BaseAPI.md).[chainId](BaseAPI.md#chainid)

#### Defined in

[api/base_api.ts:38](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L38)

___

### KEY\_MESSAGE

▪ `Static` **KEY\_MESSAGE**: `string` = `KEY_MESSAGE`

#### Inherited from

[BaseAPI](BaseAPI.md).[KEY_MESSAGE](BaseAPI.md#key_message)

#### Defined in

[api/base_api.ts:36](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L36)

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

[BaseAPI](BaseAPI.md).[genErr](BaseAPI.md#generr)

#### Defined in

[api/base_api.ts:39](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L39)

___

### getAvailableBroker

▸ **getAvailableBroker**(): `Promise`<{ `broker`: `string`  }\>

#### Returns

`Promise`<{ `broker`: `string`  }\>

#### Inherited from

[BaseAPI](BaseAPI.md).[getAvailableBroker](BaseAPI.md#getavailablebroker)

#### Defined in

[api/base_api.ts:96](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L96)

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

[api/delegate_api.ts:7](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/delegate_api.ts#L7)

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

[BaseAPI](BaseAPI.md).[getCounterFactualInfo](BaseAPI.md#getcounterfactualinfo)

#### Defined in

[api/base_api.ts:107](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L107)

___

### makeReq

▸ `Protected` **makeReq**(): `Request`

#### Returns

`Request`

#### Inherited from

[BaseAPI](BaseAPI.md).[makeReq](BaseAPI.md#makereq)

#### Defined in

[api/base_api.ts:150](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L150)

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

[BaseAPI](BaseAPI.md).[returnTxHash](BaseAPI.md#returntxhash)

#### Defined in

[api/base_api.ts:65](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L65)

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

[BaseAPI](BaseAPI.md).[setBaseUrl](BaseAPI.md#setbaseurl)

#### Defined in

[api/base_api.ts:146](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L146)

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

[BaseAPI](BaseAPI.md).[setChainId](BaseAPI.md#setchainid)

#### Defined in

[api/base_api.ts:141](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/api/base_api.ts#L141)
