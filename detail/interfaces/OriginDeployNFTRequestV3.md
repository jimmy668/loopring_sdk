[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OriginDeployNFTRequestV3

# Interface: OriginDeployNFTRequestV3

Submit Deploy NFTAction params

**`export`**

**`interface`** OriginDeployNFTRequestV3

## Table of contents

### Properties

- [counterFactualInfo](OriginDeployNFTRequestV3.md#counterfactualinfo)
- [nftData](OriginDeployNFTRequestV3.md#nftdata)
- [tokenAddress](OriginDeployNFTRequestV3.md#tokenaddress)
- [transfer](OriginDeployNFTRequestV3.md#transfer)

## Properties

### counterFactualInfo

• `Optional` **counterFactualInfo**: [`CounterFactualInfo`](CounterFactualInfo.md)

#### Defined in

[defs/loopring_defs.ts:1514](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1514)

___

### nftData

• **nftData**: `string`

nftData

**`memberof`** OriginDeployNFTRequestV3

#### Defined in

[defs/loopring_defs.ts:1507](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1507)

___

### tokenAddress

• **tokenAddress**: `string`

NFTAction address

**`memberof`** OriginDeployNFTRequestV3

#### Defined in

[defs/loopring_defs.ts:1513](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1513)

___

### transfer

• **transfer**: `Omit`<[`OriginTransferRequestV3`](OriginTransferRequestV3.md), ``"payeeId"`` \| ``"maxFee"`` \| ``"memo"``\> & { `maxFee?`: { `tokenId`: `string` \| `number` ; `volume`: ``"0"``  } ; `memo?`: `string` ; `payeeId?`: ``0``  }

#### Defined in

[defs/loopring_defs.ts:1494](https://github.com/Loopring/loopring_sdk/blob/edf273a/src/defs/loopring_defs.ts#L1494)
