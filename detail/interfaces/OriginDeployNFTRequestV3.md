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

[defs/loopring_defs.ts:1456](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L1456)

___

### nftData

• **nftData**: `string`

nftData

**`memberof`** OriginDeployNFTRequestV3

#### Defined in

[defs/loopring_defs.ts:1449](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L1449)

___

### tokenAddress

• **tokenAddress**: `string`

NFT address

**`memberof`** OriginDeployNFTRequestV3

#### Defined in

[defs/loopring_defs.ts:1455](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L1455)

___

### transfer

• **transfer**: `Omit`<[`OriginTransferRequestV3`](OriginTransferRequestV3.md), ``"payeeId"`` \| ``"maxFee"`` \| ``"memo"``\> & { `maxFee?`: { `tokenId`: ``0`` ; `volume`: ``"0"``  } ; `memo?`: `string` ; `payeeId?`: ``0``  }

#### Defined in

[defs/loopring_defs.ts:1436](https://github.com/Loopring/loopring_sdk/blob/18accaa/src/defs/loopring_defs.ts#L1436)
