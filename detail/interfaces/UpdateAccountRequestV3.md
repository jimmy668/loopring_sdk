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

[defs/loopring_defs.ts:1867](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1867)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1912](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1912)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1903](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1903)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1897](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1897)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1855](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1855)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was submitted on eth mainnet

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1909](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1909)

___

### keySeed

• `Optional` **keySeed**: `string`

#### Defined in

[defs/loopring_defs.ts:1911](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1911)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1879](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1879)

___

### nonce

• **nonce**: `number`

Nonce of users exchange account that used in off-chain requests.

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1891](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1891)

___

### owner

• **owner**: `string`

owner address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1861](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1861)

___

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1873](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1873)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1885](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L1885)
