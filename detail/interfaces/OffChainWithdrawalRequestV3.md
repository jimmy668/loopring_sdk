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

[defs/loopring_defs.ts:882](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L882)

___

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:959](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L959)

___

### ecdsaSignature

• `Optional` **ecdsaSignature**: `string`

ecdsa signature

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:952](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L952)

___

### eddsaSignature

• `Optional` **eddsaSignature**: `string`

eddsa signature

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:946](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L946)

___

### exchange

• **exchange**: `string`

exchange address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:876](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L876)

___

### extraData

• `Optional` **extraData**: `string`

extra data for complex withdraw mode, normally none

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:934](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L934)

___

### fastWithdrawalMode

• `Optional` **fastWithdrawalMode**: `boolean`

is fast withdraw mode

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:940](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L940)

___

### hashApproved

• `Optional` **hashApproved**: `string`

An approved hash string which was already submitted on eth mainnet

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:958](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L958)

___

### maxFee

• **maxFee**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:900](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L900)

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

[defs/loopring_defs.ts:922](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L922)

___

### owner

• **owner**: `string`

account owner address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:888](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L888)

___

### storageId

• **storageId**: `number`

offchain ID

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:906](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L906)

___

### to

• **to**: `string`

withdraw to address

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:928](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L928)

___

### token

• **token**: [`TokenVolumeV3`](TokenVolumeV3.md)

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:894](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L894)

___

### validUntil

• **validUntil**: `number`

Timestamp for order to become invalid

**`memberof`** OffChainWithdrawalRequestV3

#### Defined in

[defs/loopring_defs.ts:912](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L912)
