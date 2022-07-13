/* eslint-disable camelcase  */
import { BaseAPI } from "./base_api";
import {
  DefiMarketInfo,
  DefiOrderRequest,
  DefiResult,
  LoopringMap,
  ReqParams,
  SEP,
  SoursURL,
  TokenAddress,
  TokenInfo,
  TokenRelatedInfo,
  ReqMethod,
  SIG_FLAG,
  LOOPRING_URLs,
  SigPatchField,
} from "../defs";

import * as sign_tools from "./sign/sign_tools";
import BN from "bn.js";
import * as ethUtil from "ethereumjs-util";

export class DefiAPI extends BaseAPI {
  /*
   * Returns the fee rate of users placing orders in specific markets
   */
  public async getDefiToken<R>(): Promise<{
    raw_data: R;
    tokensMap: LoopringMap<TokenInfo>;
    idIndex: LoopringMap<string>;
    addressIndex: LoopringMap<TokenAddress>;
  }> {
    const reqParams: ReqParams = {
      url: LOOPRING_URLs.GET_DEFI_TOKENS,
      method: ReqMethod.GET,
      sigFlag: SIG_FLAG.NO_SIG,
    };

    const raw_data = (await this.makeReq().request(reqParams)).data;
    if (raw_data?.resultInfo) {
      return {
        ...raw_data?.resultInfo,
      };
    }

    const tokensMap: LoopringMap<TokenInfo> = {};
    const addressIndex: LoopringMap<TokenAddress> = {};
    const idIndex: LoopringMap<string> = {};
    if (raw_data instanceof Array) {
      raw_data.forEach((item: TokenInfo) => {
        if (item.symbol.startsWith("LP-")) {
          item.isLpToken = true;
        } else {
          item.isLpToken = false;
        }
        tokensMap[item.symbol] = item;

        const coinInfo = {
          icon: SoursURL + `ethereum/assets/${item.address}/logo.png`,
          name: item.symbol,
          simpleName: item.symbol,
          description: item.type,
          company: "",
        };
        // totalCoinMap[item.symbol] = coinInfo;
        addressIndex[item.address.toLowerCase()] = item.symbol;
        idIndex[item.tokenId] = item.symbol;
      });
    }

    return {
      tokensMap,
      idIndex,
      addressIndex,
      raw_data,
    };
  }
  public async getDefiMarkets<R>(
    url: string = LOOPRING_URLs.GET_DEFI_MARKETS
  ): Promise<{
    markets: LoopringMap<DefiMarketInfo>;
    pairs: LoopringMap<TokenRelatedInfo>;
    tokenArr: string[];
    tokenArrStr: string;
    marketArr: string[];
    marketArrStr: string;
    raw_data: R;
  }> {
    const reqParams: ReqParams = {
      url,
      method: ReqMethod.GET,
      sigFlag: SIG_FLAG.NO_SIG,
    };

    const raw_data = (await this.makeReq().request(reqParams)).data;
    if (raw_data?.resultInfo) {
      return {
        ...raw_data?.resultInfo,
      };
    }
    const markets: LoopringMap<DefiMarketInfo> = {};

    const pairs: LoopringMap<TokenRelatedInfo> = {};

    // const isMix = url === LOOPRING_URLs.GET_MIX_MARKETS;

    if (raw_data?.markets instanceof Array) {
      raw_data.markets.forEach((item: any) => {
        const marketInfo: DefiMarketInfo = {
          ...item,
          // type: item.type,
          // market: item.market,
          // apy: item.apy,
          // baseTokenId: item.baseTokenId,
          // quoteTokenId: item.quoteTokenId,
          // precisionForPrice: item.precisionForPrice,
          // orderbookAggLevels: item.orderbookAggLevels,
          // enabled: item.enabled,
          // status: item.status,
          // accountId: item.accountId,
          // address: item.address,
          // depositFeeBips: item.depositFeeBips,
          // withdrawFeeBips: item.withdrawFeeBips,
          // depositPrice: item.depositPrice,
          // withdrawPrice: item.withdrawPrice,
          // baseVolume: item.baseVolume,
          // quoteVolume:item.quoteVolume
        };
        markets[item.market] = marketInfo;

        if (item.enabled) {
          const market: string = item.market;
          const ind = market.indexOf("-");
          const base = market.substring(0, ind);
          const quote = market.substring(ind + 1, market.length);

          if (!pairs[base]) {
            pairs[base] = {
              tokenId: item.baseTokenId,
              tokenList: [quote],
            };
          } else {
            pairs[base].tokenList = [...pairs[base].tokenList, quote];
          }

          // if (!pairs[quote]) {
          //   pairs[quote] = {
          //     tokenId: item.quoteTokenId,
          //     tokenList: [base],
          //   };
          // } else {
          //   pairs[quote].tokenList = [...pairs[quote].tokenList, base];
          // }
        }
      });
    }
    const marketArr: string[] = Reflect.ownKeys(markets) as string[];
    const tokenArr: string[] = Reflect.ownKeys(pairs) as string[];
    return {
      markets,
      pairs,
      tokenArr,
      tokenArrStr: tokenArr.join(SEP),
      marketArr,
      marketArrStr: marketArr.join(SEP),
      raw_data,
    };
  }

  public async orderDefi<R>(
    request: DefiOrderRequest,
    privateKey: string,
    apiKey: string
  ): Promise<{
    raw_data: R;
    result: DefiResult;
  }> {
    if (!request?.validUntil) request.validUntil = Date.now();

    const dataToSig = [
      request.exchange,
      request.storageId,
      request.accountId,
      request.sellToken?.tokenId,
      request.buyToken?.tokenId,
      request.sellToken?.volume,
      request.buyToken?.volume,
      request.validUntil,
      request.maxFeeBips,
      request.fillAmountBOrS ? 1 : 0,
      0,
    ];

    const reqParams: ReqParams = {
      url: LOOPRING_URLs.GET_DEFI_ORDER,
      bodyParams: request,
      apiKey,

      method: ReqMethod.POST,
      sigFlag: SIG_FLAG.EDDSA_SIG_POSEIDON,
      sigObj: {
        dataToSig,
        sigPatch: SigPatchField.EddsaSignature,
        PrivateKey: privateKey,
      },
    };

    const raw_data = (await this.makeReq().request(reqParams)).data;
    if (raw_data?.resultInfo) {
      return {
        ...raw_data?.resultInfo,
      };
    }
    return {
      result: raw_data,
      raw_data,
    };
  }
}
