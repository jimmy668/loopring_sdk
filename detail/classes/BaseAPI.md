[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`WsAPI`](WsAPI.md)

  ↳ [`ExchangeAPI`](ExchangeAPI.md)

  ↳ [`AmmpoolAPI`](AmmpoolAPI.md)

  ↳ [`UserAPI`](UserAPI.md)

  ↳ [`WalletAPI`](WalletAPI.md)

  ↳ [`WhitelistedUserAPI`](WhitelistedUserAPI.md)

  ↳ [`NFTAPI`](NFTAPI.md)

  ↳ [`GlobalAPI`](GlobalAPI.md)

  ↳ [`DelegateAPI`](DelegateAPI.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [baseUrl](BaseAPI.md#baseurl)
- [chainId](BaseAPI.md#chainid)
- [timeout](BaseAPI.md#timeout)
- [KEY\_MESSAGE](BaseAPI.md#key_message)

### Methods

- [genErr](BaseAPI.md#generr)
- [getAvailableBroker](BaseAPI.md#getavailablebroker)
- [getCounterFactualInfo](BaseAPI.md#getcounterfactualinfo)
- [makeReq](BaseAPI.md#makereq)
- [returnTxHash](BaseAPI.md#returntxhash)
- [setBaseUrl](BaseAPI.md#setbaseurl)
- [setChainId](BaseAPI.md#setchainid)

## Constructors

### constructor

• **new BaseAPI**(`param`, `timeout?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `param` | [`InitParam`](../interfaces/InitParam.md) | `undefined` |
| `timeout` | `number` | `3000` |

#### Defined in

[api/base_api.ts:86](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L86)

## Properties

### baseUrl

• `Protected` **baseUrl**: `string` = `""`

#### Defined in

[api/base_api.ts:37](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L37)

___

### chainId

• `Protected` **chainId**: [`ChainId`](../enums/ChainId.md) = `ChainId.MAINNET`

#### Defined in

[api/base_api.ts:38](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L38)

___

### timeout

• `Private` **timeout**: `number`

#### Defined in

[api/base_api.ts:84](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L84)

___

### KEY\_MESSAGE

▪ `Static` **KEY\_MESSAGE**: `string` = `KEY_MESSAGE`

#### Defined in

[api/base_api.ts:36](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L36)

## Methods

### genErr

▸ **genErr**(`err`): [`RESULT_INFO`](../interfaces/RESULT_INFO.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

[`RESULT_INFO`](../interfaces/RESULT_INFO.md)

#### Defined in

[api/base_api.ts:39](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L39)

___

### getAvailableBroker

▸ **getAvailableBroker**(): `Promise`<{ `broker`: `string`  }\>

#### Returns

`Promise`<{ `broker`: `string`  }\>

#### Defined in

[api/base_api.ts:97](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L97)

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

#### Defined in

[api/base_api.ts:108](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L108)

___

### makeReq

▸ `Protected` **makeReq**(): `Request`

#### Returns

`Request`

#### Defined in

[api/base_api.ts:151](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L151)

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

#### Defined in

[api/base_api.ts:66](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L66)

___

### setBaseUrl

▸ **setBaseUrl**(`baseUrl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |

#### Returns

`void`

#### Defined in

[api/base_api.ts:147](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L147)

___

### setChainId

▸ **setChainId**(`chainId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | [`ChainId`](../enums/ChainId.md) |

#### Returns

`void`

#### Defined in

[api/base_api.ts:142](https://github.com/Loopring/loopring_sdk/blob/1b21a8d/src/api/base_api.ts#L142)
