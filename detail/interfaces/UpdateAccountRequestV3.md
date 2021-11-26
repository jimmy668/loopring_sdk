[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / UpdateAccountRequestV3

# Interface: UpdateAccountRequestV3

## Table of contents

### Properties

- [accountId](UpdateAccountRequestV3.md#accountid)
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

[defs/loopring_defs.ts:1725](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1725)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1761](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1761)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature of this request

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1755](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1755)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1713](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1713)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was submitted on eth mainnet

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1767](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1767)

___

### keySeed

• `Optional` **keySeed**: `string`

#### Defined in

[defs/loopring_defs.ts:1769](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1769)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1737](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1737)

___

### nonce

• **nonce**: `number`

Nonce of users exchange account that used in off-chain requests.

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1749](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1749)

___

### owner

• **owner**: `string`

owner address

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1719](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1719)

___

### publicKey

• **publicKey**: [`PublicKey`](PublicKey.md)

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1731](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1731)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** UpdateAccountRequestV3

#### Defined in

[defs/loopring_defs.ts:1743](https://github.com/Loopring/loopring_sdk/blob/1d20f38/src/defs/loopring_defs.ts#L1743)
