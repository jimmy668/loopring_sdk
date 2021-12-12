[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / ReqParams

# Interface: ReqParams

## Table of contents

### Properties

- [apiKey](ReqParams.md#apikey)
- [bodyParams](ReqParams.md#bodyparams)
- [ecdsaSignature](ReqParams.md#ecdsasignature)
- [eddsaSignature](ReqParams.md#eddsasignature)
- [method](ReqParams.md#method)
- [queryParams](ReqParams.md#queryparams)
- [sigFlag](ReqParams.md#sigflag)
- [sigObj](ReqParams.md#sigobj)
- [url](ReqParams.md#url)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[defs/loopring_defs.ts:55](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L55)

___

### bodyParams

• `Optional` **bodyParams**: `any`

#### Defined in

[defs/loopring_defs.ts:53](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L53)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

#### Defined in

[defs/loopring_defs.ts:70](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L70)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

#### Defined in

[defs/loopring_defs.ts:69](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L69)

___

### method

• **method**: [`ReqMethod`](../enums/ReqMethod.md)

#### Defined in

[defs/loopring_defs.ts:49](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L49)

___

### queryParams

• `Optional` **queryParams**: `any`

#### Defined in

[defs/loopring_defs.ts:52](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L52)

___

### sigFlag

• **sigFlag**: [`SIG_FLAG`](../enums/SIG_FLAG.md)

#### Defined in

[defs/loopring_defs.ts:50](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L50)

___

### sigObj

• `Optional` **sigObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PrivateKey?` | `string` |
| `dataToSig?` | `any` |
| `hasDataStruct?` | `boolean` |
| `owner?` | `string` |
| `pwd?` | `string` |
| `sigPatch?` | `string` |
| `web3?` | `any` |

#### Defined in

[defs/loopring_defs.ts:57](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L57)

___

### url

• **url**: `string`

#### Defined in

[defs/loopring_defs.ts:48](https://github.com/Loopring/loopring_sdk/blob/1830d54/src/defs/loopring_defs.ts#L48)
