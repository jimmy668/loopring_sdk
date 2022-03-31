[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / UserNFTBalanceInfo

# Interface: UserNFTBalanceInfo<I\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | [`NFT_IMAGE_SIZES`](../enums/NFT_IMAGE_SIZES.md) |

## Table of contents

### Properties

- [accountId](UserNFTBalanceInfo.md#accountid)
- [deploymentStatus](UserNFTBalanceInfo.md#deploymentstatus)
- [isCounterFactualNFT](UserNFTBalanceInfo.md#iscounterfactualnft)
- [locked](UserNFTBalanceInfo.md#locked)
- [metadata](UserNFTBalanceInfo.md#metadata)
- [nftData](UserNFTBalanceInfo.md#nftdata)
- [nftId](UserNFTBalanceInfo.md#nftid)
- [pending](UserNFTBalanceInfo.md#pending)
- [tokenAddress](UserNFTBalanceInfo.md#tokenaddress)
- [tokenId](UserNFTBalanceInfo.md#tokenid)
- [total](UserNFTBalanceInfo.md#total)

## Properties

### accountId

• **accountId**: `number`

#### Defined in

[defs/loopring_defs.ts:2240](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2240)

___

### deploymentStatus

• **deploymentStatus**: [`DEPLOYMENT_STATUS`](../enums/DEPLOYMENT_STATUS.md)

#### Defined in

[defs/loopring_defs.ts:2276](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2276)

___

### isCounterFactualNFT

• **isCounterFactualNFT**: `boolean`

#### Defined in

[defs/loopring_defs.ts:2277](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2277)

___

### locked

• `Optional` **locked**: `string`

#### Defined in

[defs/loopring_defs.ts:2246](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2246)

___

### metadata

• `Optional` **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | `Object` |
| `base.decimals` | `number` |
| `base.description` | `string` |
| `base.image` | `string` |
| `base.localization` | `string` |
| `base.name` | `string` |
| `base.properties` | `string` |
| `extra` | `Object` |
| `extra.animationUrl` | `string` |
| `extra.attributes` | `string` |
| `extra.backgroundColor` | `string` |
| `extra.externalUrl` | `string` |
| `extra.imageData` | `string` |
| `extra.minter` | `string` |
| `extra.youtubeUrl` | `string` |
| `imageSize` | `Object` |
| `imageSize.240-240` | `undefined` \| `string` |
| `imageSize.332-332` | `undefined` \| `string` |
| `imageSize.original` | `undefined` \| `string` |
| `network` | ``0`` |
| `nftType` | [`NFTType`](../enums/NFTType.md) |
| `tokenAddress` | `string` |
| `tokenId` | `string` |
| `uri` | `string` |

#### Defined in

[defs/loopring_defs.ts:2251](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2251)

___

### nftData

• `Optional` **nftData**: `string`

#### Defined in

[defs/loopring_defs.ts:2242](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2242)

___

### nftId

• `Optional` **nftId**: `string`

#### Defined in

[defs/loopring_defs.ts:2244](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2244)

___

### pending

• **pending**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deposit` | `string` |
| `withdraw` | `string` |

#### Defined in

[defs/loopring_defs.ts:2247](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2247)

___

### tokenAddress

• `Optional` **tokenAddress**: `string`

#### Defined in

[defs/loopring_defs.ts:2243](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2243)

___

### tokenId

• **tokenId**: `number`

#### Defined in

[defs/loopring_defs.ts:2241](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2241)

___

### total

• `Optional` **total**: `string`

#### Defined in

[defs/loopring_defs.ts:2245](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/loopring_defs.ts#L2245)
