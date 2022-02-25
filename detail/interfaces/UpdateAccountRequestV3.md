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

[defs/loopring_defs.ts:1998](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1998)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:2043](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2043)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2034](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2034)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2028](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2028)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1986](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1986)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was submitted on eth mainnet

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2040](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2040)

___

### keySeed

• `Optional` **keySeed**: `string`

#### Defined in

[defs/loopring_defs.ts:2042](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2042)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2010](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2010)

___

### nonce

• **nonce**: `number`

Nonce of users exchange account that used in off-chain requests.

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2022](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2022)

___

### owner

• **owner**: `string`

owner address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1992](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1992)

___

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2004](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2004)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:2016](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L2016)
