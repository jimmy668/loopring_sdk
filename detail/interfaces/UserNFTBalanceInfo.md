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

[defs/loopring_defs.ts:2261](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2261)

___

### deploymentStatus

• **deploymentStatus**: [`DEPLOYMENT_STATUS`](../enums/DEPLOYMENT_STATUS.md)

#### Defined in

[defs/loopring_defs.ts:2297](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2297)

___

### isCounterFactualNFT

• **isCounterFactualNFT**: `boolean`

#### Defined in

[defs/loopring_defs.ts:2298](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2298)

___

### locked

• `Optional` **locked**: `string`

#### Defined in

[defs/loopring_defs.ts:2267](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2267)

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

[defs/loopring_defs.ts:2272](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2272)

___

### nftData

• `Optional` **nftData**: `string`

#### Defined in

[defs/loopring_defs.ts:2263](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2263)

___

### nftId

• `Optional` **nftId**: `string`

#### Defined in

[defs/loopring_defs.ts:2265](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2265)

___

### pending

• **pending**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deposit` | `string` |
| `withdraw` | `string` |

#### Defined in

[defs/loopring_defs.ts:2268](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2268)

___

### tokenAddress

• `Optional` **tokenAddress**: `string`

#### Defined in

[defs/loopring_defs.ts:2264](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2264)

___

### tokenId

• **tokenId**: `number`

#### Defined in

[defs/loopring_defs.ts:2262](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2262)

___

### total

• `Optional` **total**: `string`

#### Defined in

[defs/loopring_defs.ts:2266](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L2266)
