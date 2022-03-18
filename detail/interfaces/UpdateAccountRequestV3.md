[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / UpdateAccountRequestV3

# Interface: UpdateAccountRequestV3

## Table of contents

### Properties

- [accountId](UpdateAccountRequestV3.md#accountid)
- [counterFactualInfo](UpdateAccountRequestV3.md#counterfactualinfo)
- [ecdsaSignature](UpdateAccountRequestV3.md#ecdsasignature)
- [eddsaSignature](UpdateAccountRequestV3.md#eddsasignature)
- [exchange](UpdateAccountRequestV3.md#exchange)
- [hashApproved](UpdateAccountRequestV3.md#hashapproved)
- [keySeed](UpdateAccountRequestV3.md#keyseed)
- [maxFee](UpdateAccountRequestV3.md#maxfee)
- [nonce](UpdateAccountRequestV3.md#nonce)
- [owner](UpdateAccountRequestV3.md#owner)
- [publicKey](UpdateAccountRequestV3.md#publickey)
- [validUntil](UpdateAccountRequestV3.md#validuntil)

## Properties

### accountId

• **accountId**: `number`

user account ID

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2035](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2035)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:2080](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2080)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2071](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2071)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2065](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2065)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2023](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2023)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was submitted on eth mainnet

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2077](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2077)

___

### keySeed

• `Optional` **keySeed**: `string`

#### Defined in

[defs/loopring_defs.ts:2079](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2079)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2047](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2047)

___

### nonce

• **nonce**: `number`

Nonce of users exchange account that used in off-chain requests.

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2059](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2059)

___

### owner

• **owner**: `string`

owner address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2029](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2029)

___

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2041](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2041)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2053](https://github.com/Loopring/loopring_sdk/blob/9d83b66/src/defs/loopring_defs.ts#L2053)
