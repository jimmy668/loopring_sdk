[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / OriginDeployNFTRequestV3

# Interface: OriginDeployNFTRequestV3

Submit Deploy NFT params

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

[defs/loopring_defs.ts:1437](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1437)

___

### nftData

• **nftData**: `string`

nftData

**`memberof`** OriginDeployNFTRequestV3

#### Defined in

[defs/loopring_defs.ts:1430](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1430)

___

### tokenAddress

• **tokenAddress**: `string`

NFT address

**`memberof`** OriginDeployNFTRequestV3

#### Defined in

[defs/loopring_defs.ts:1436](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1436)

___

### transfer

• **transfer**: `Omit`<[`OriginTransferRequestV3`](OriginTransferRequestV3.md), ``"payeeId"`` \| ``"maxFee"`` \| ``"memo"``\> & { `maxFee?`: { `tokenId`: ``0`` ; `volume`: ``"0"``  } ; `memo?`: `string` ; `payeeId?`: ``0``  }

#### Defined in

[defs/loopring_defs.ts:1417](https://github.com/Loopring/loopring_sdk/blob/02976c9/src/defs/loopring_defs.ts#L1417)
