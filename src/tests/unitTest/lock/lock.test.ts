import { ChainId } from '../../../defs/web3_defs'
import { LockApi } from '../../../api/lock_api'
import { LockAssetsRequest } from '../../../defs/loopring_defs'
import { DEFAULT_TIMEOUT } from "../../MockData";

let lockApi: LockApi

describe('lock test', function () {

    beforeEach(() => {
        lockApi = new LockApi({ chainId: ChainId.GOERLI });
    })

    // it('start each ...', async () => {

    //     let jsonData :LockAssetsRequest  =  {
    //         //accountId:11265,
    //         accountId:12524,
    //         eddsaSignature:"",
    //         exchange:"0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e",
    //         lockedUntil:Math.round(Date.now() / 1000) + 30 * 86400,
    //         tag:"test",
    //         timestamp:1657532600,
    //         token:{
    //             tokenId:1, volume:"100"
    //         }
    //       }

    //     let result = await lockApi.lockAssets(jsonData,
    //         "OfOPPy3NhsHTFxv4pjmO8tYkkkt7VLeg0YotO8bGxWNjm5EU9dZqhHzDJWL7gFGY", //apiKey:string,
    //         "0x52b09f7c6602378d076cdad016cf8f93ad50241ae7909db1437ae230092c375" //eddsaKey:string
    //     );

    //     console.log(result);
        

    // }, DEFAULT_TIMEOUT)


    it('start each ...', async () => {


        // const inputs = [
        //     new BN(ethUtil.toBuffer(request.exchange)).toString(),
        //     request.accountId,
        //     request.token.tokenId,
        //     request.token.volume,
        //     request.timestamp
        //   ];

        // let jsonData  =  {
        //     //accountId:11265,
        //     accountId:12524,
        //     exchange:"0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e",
        //     timestamp:1657532600,
        //     token:{
        //         tokenId:1, volume:"100"
        //     }
        //   }

        // let result = await lockApi.getLockHashAndEddsaSignature(jsonData,
        //     "0x52b09f7c6602378d076cdad016cf8f93ad50241ae7909db1437ae230092c375" //eddsaKey:string
        // );


        // let jsonData  =  {
        //     //accountId:11265,
        //     accountId:12568,
        //     exchange:"0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e",
        //     timestamp:1657626301,
        //     token:{
        //         tokenId:1, volume:"3"
        //     }
        //   }

        // let result = await lockApi.getLockHashAndEddsaSignature(jsonData,
        //     "0x52b09f7c6602378d076cdad016cf8f93ad50241ae7909db1437ae230092c375" //eddsaKey:string
        // );



        let jsonData  =  {
            //accountId:11265,
            accountId:12454,
            exchange:"0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e",
            timestamp:1657626301,
            token:{
                tokenId:1, volume:3
            }
          }

        let result = await lockApi.getLockHashAndEddsaSignature(jsonData,
            "0x462d4c394373dce546ac87f643e1005d24b3bd8b7075e1ff297a7a774e1b79" //eddsaKey:string
        );





        console.log(result);


        
        




    }, DEFAULT_TIMEOUT)


    




})
