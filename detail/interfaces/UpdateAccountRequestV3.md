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

[defs/loopring_defs.ts:1819](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1819)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1864](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1864)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1855](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1855)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1849](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1849)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1807](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1807)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was submitted on eth mainnet

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1861](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1861)

___

### keySeed

• `Optional` **keySeed**: `string`

#### Defined in

[defs/loopring_defs.ts:1863](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1863)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1831](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1831)

___

### nonce

• **nonce**: `number`

Nonce of users exchange account that used in off-chain requests.

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1843](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1843)

___

### owner

• **owner**: `string`

owner address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1813](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1813)

___

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1825](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1825)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1837](https://github.com/Loopring/loopring_sdk/blob/cd42b57/src/defs/loopring_defs.ts#L1837)
