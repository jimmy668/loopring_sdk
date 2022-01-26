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

[defs/loopring_defs.ts:1856](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1856)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1901](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1901)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1892](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1892)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1886](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1886)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1844](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1844)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was submitted on eth mainnet

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1898](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1898)

___

### keySeed

• `Optional` **keySeed**: `string`

#### Defined in

[defs/loopring_defs.ts:1900](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1900)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1868](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1868)

___

### nonce

• **nonce**: `number`

Nonce of users exchange account that used in off-chain requests.

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1880](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1880)

___

### owner

• **owner**: `string`

owner address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1850](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1850)

___

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1862](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1862)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1874](https://github.com/Loopring/loopring_sdk/blob/5861d10/src/defs/loopring_defs.ts#L1874)
