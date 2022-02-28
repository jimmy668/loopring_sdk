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

[defs/loopring_defs.ts:66](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L66)

___

### bodyParams

• `Optional` **bodyParams**: `any`

#### Defined in

[defs/loopring_defs.ts:64](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L64)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

#### Defined in

[defs/loopring_defs.ts:81](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L81)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

#### Defined in

[defs/loopring_defs.ts:80](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L80)

___

### method

• **method**: [`ReqMethod`](../enums/ReqMethod.md)

#### Defined in

[defs/loopring_defs.ts:60](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L60)

___

### queryParams

• `Optional` **queryParams**: `any`

#### Defined in

[defs/loopring_defs.ts:63](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L63)

___

### sigFlag

• **sigFlag**: [`SIG_FLAG`](../enums/SIG_FLAG.md)

#### Defined in

[defs/loopring_defs.ts:61](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L61)

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
| `sig?` | `string` |
| `sigPatch?` | `string` |
| `web3?` | `any` |

#### Defined in

[defs/loopring_defs.ts:68](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L68)

___

### url

• **url**: `string`

#### Defined in

[defs/loopring_defs.ts:59](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L59)
