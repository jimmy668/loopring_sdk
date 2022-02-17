[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OffChainWithdrawalRequestV3

# Interface: OffChainWithdrawalRequestV3

**`export`**

**`interface`** OffChainWithdrawalRequestV3

## Table of contents

### Properties

- [accountId](OffChainWithdrawalRequestV3.md#accountid)
- [counterFactualInfo](OffChainWithdrawalRequestV3.md#counterfactualinfo)
- [ecdsaSignature](OffChainWithdrawalRequestV3.md#ecdsasignature)
- [eddsaSignature](OffChainWithdrawalRequestV3.md#eddsasignature)
- [exchange](OffChainWithdrawalRequestV3.md#exchange)
- [extraData](OffChainWithdrawalRequestV3.md#extradata)
- [fastWithdrawalMode](OffChainWithdrawalRequestV3.md#fastwithdrawalmode)
- [hashApproved](OffChainWithdrawalRequestV3.md#hashapproved)
- [maxFee](OffChainWithdrawalRequestV3.md#maxfee)
- [minGas](OffChainWithdrawalRequestV3.md#mingas)
- [owner](OffChainWithdrawalRequestV3.md#owner)
- [storageId](OffChainWithdrawalRequestV3.md#storageid)
- [to](OffChainWithdrawalRequestV3.md#to)
- [token](OffChainWithdrawalRequestV3.md#token)
- [validUntil](OffChainWithdrawalRequestV3.md#validuntil)

## Properties

### accountId

• **accountId**: `number`

account ID

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:813](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L813)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:890](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L890)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:883](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L883)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:877](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L877)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:807](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L807)

___

### extraData

• `Optional` **extraData**: `string`

extra data for complex withdraw mode, normally none

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:865](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L865)

___

### fastWithdrawalMode

• `Optional` **fastWithdrawalMode**: `boolean`

is fast withdraw mode

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:871](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L871)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:889](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L889)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:831](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L831)

___

### minGas

• **minGas**: `number`

min gas for on-chain withdraw, Loopring exchange allocates gas for each distribution,
but people can also assign this min gas,
so Loopring has to allocate higher gas value for this specific distribution.
Normally no need to take care of this value,
0 means let loopring choose the reasonable gas

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:853](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L853)

___

### owner

• **owner**: `string`

account owner address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:819](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L819)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:837](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L837)

___

### to

• **to**: `string`

withdraw to address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:859](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L859)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:825](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L825)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:843](https://github.com/Loopring/loopring_sdk/blob/300ee65/src/defs/loopring_defs.ts#L843)
