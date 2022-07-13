import {
  DEFAULT_TIMEOUT,
  LOOPRING_EXPORTED_ACCOUNT,
  LoopringAPI,
  web3,
  TOKEN_INFO,
  signatureKeyPairMock,
} from "../../MockData";
import * as sdk from "../../../index";
import { calcDefi, DefiAction, DefiOrderRequest } from "../../../index";

describe("DefiAPI test", function () {
  it(
    "getDefiMarkets",
    async () => {
      const response = await LoopringAPI.defiAPI.getDefiMarkets();
      console.log(
        "getDefiMarkets",
        response.marketArr,
        response.markets,
        response.pairs
      );
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getDefiToken",
    async () => {
      const response = await LoopringAPI.defiAPI.getDefiToken();
      console.log(
        "getDefiToken:",
        response.tokensMap,
        response.idIndex,
        response.addressIndex
      );
    },
    DEFAULT_TIMEOUT
  );
  it(
    "orderDefi",
    async () => {
      // Step 1. get account info
      const { accInfo } = await LoopringAPI.exchangeAPI.getAccount({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
      console.log("accInfo:", accInfo);

      // Step 2. eddsaKey
      const eddsaKey = await signatureKeyPairMock(accInfo);
      console.log("eddsaKey:", eddsaKey.sk);

      // Step 3. get apikey
      const { apiKey } = await LoopringAPI.userAPI.getUserApiKey(
        {
          accountId: accInfo.accountId,
        },
        eddsaKey.sk
      );
      console.log("apiKey:", apiKey);

      const sellSymbol = "ETH",
        buySymbol = "WSTETH",
        sellValue = "0.0001",
        isJoin = true,
        isInputSell = true;
      const testMarket = "WSTETH-ETH";
      const { markets } = await LoopringAPI.defiAPI.getDefiMarkets();
      const { tokensMap } = await LoopringAPI.defiAPI.getDefiToken();
      const marketInfo = markets[testMarket];
      const buyTokenBalanceVol = marketInfo.baseVolume;

      const { fees } = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: isJoin
            ? sdk.OffchainFeeReqType.DEFI_JOIN
            : sdk.OffchainFeeReqType.DEFI_EXIT,
          market: testMarket,
        },
        apiKey
      );

      const calcVol = calcDefi({
        isJoin,
        isInputSell,
        sellAmount: sellValue,
        feeVol: fees[buySymbol].fee,
        marketInfo,
        tokenSell: TOKEN_INFO.tokenMap[sellSymbol],
        tokenBuy: tokensMap[buySymbol],
        buyTokenBalanceVol,
      });

      console.log(
        "calcVol",
        calcVol,
        calcVol.miniSellVol,
        calcVol.maxSellVol,
        calcVol.maxFeeBips
      );

      const storageId = await LoopringAPI.userAPI.getNextStorageId(
        {
          accountId: accInfo.accountId,
          sellTokenId: TOKEN_INFO.tokenMap[sellSymbol].tokenId,
        },
        apiKey
      );

      const request = {
        exchange: "0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e", //LOOPRING_EXPORTED_ACCOUNT.exchangeAddress,
        storageId: 30, //storageId.orderId,
        accountId: 11265, //accInfo.accountId,
        sellToken: {
          tokenId: 0, //TOKEN_INFO.tokenMap[sellSymbol].tokenId,
          volume: "1000000000000000", //calcVol.sellVol,
        },
        buyToken: {
          tokenId: 12, //tokensMap[buySymbol].tokenId,
          volume: "1000000000000000", // calcVol.buyVol,
        },
        action: "deposit", // DefiAction.Deposit,
        validUntil: 1662877766, //LOOPRING_EXPORTED_ACCOUNT.validUntil,
        fee: "34600000000000", //fees[buySymbol].fee,
        maxFeeBips: 5000, //calcVol.maxFeeBips,
        type: "lido", // marketInfo.type,
        fillAmountBOrS: false,
      };
      // @output calcVol UI use to validation data

      const responseOrder = await LoopringAPI.userAPI.submitOrder(
        {
          ...{
            exchange: "0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e", //LOOPRING_EXPORTED_ACCOUNT.exchangeAddress,
            storageId: 1026, //storageId.orderId,
            accountId: 10010, //accInfo.accountId,
            sellToken: {
              tokenId: 1, //TOKEN_INFO.tokenMap[sellSymbol].tokenId,
              volume: "10000000000000000000", //calcVol.sellVol,
            },
            buyToken: {
              tokenId: 0, //tokensMap[buySymbol].tokenId,
              volume: "1958040000000000", // calcVol.buyVol,
            },
            // action: "deposit", // DefiAction.Deposit,
            validUntil: 1660286912, //LOOPRING_EXPORTED_ACCOUNT.validUntil,
            // fee: "34600000000000", //fees[buySymbol].fee,
            maxFeeBips: 50, //calcVol.maxFeeBips,
            // type: "lido", // marketInfo.type,
            fillAmountBOrS: false,
          },
          allOrNone: false,
        } as any,
        eddsaKey.sk,
        apiKey
      );

      const response = await LoopringAPI.defiAPI.orderDefi(
        {
          ...{
            exchange: "0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e", //LOOPRING_EXPORTED_ACCOUNT.exchangeAddress,
            storageId: 1026, //storageId.orderId,
            accountId: 10010, //accInfo.accountId,
            sellToken: {
              tokenId: 1, //TOKEN_INFO.tokenMap[sellSymbol].tokenId,
              volume: "10000000000000000000", //calcVol.sellVol,
            },
            buyToken: {
              tokenId: 0, //tokensMap[buySymbol].tokenId,
              volume: "1958040000000000", // calcVol.buyVol,
            },
            // action: "deposit", // DefiAction.Deposit,
            validUntil: 1660286912, //LOOPRING_EXPORTED_ACCOUNT.validUntil,
            // fee: "34600000000000", //fees[buySymbol].fee,
            maxFeeBips: 50, //calcVol.maxFeeBips,
            // type: "lido", // marketInfo.type,
            fillAmountBOrS: false,
          },
          allOrNone: false,
        } as any,
        eddsaKey.sk,
        apiKey
      );
      console.log("orderDefi:", response);
    },
    DEFAULT_TIMEOUT
  );
});
