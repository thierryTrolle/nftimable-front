import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Web3Service } from './web3.service';

declare let require: any;
declare let window: any;

const votingArtifact = require('../../../../build/contracts/NFTimableContract.json');

@Injectable({
  providedIn: 'root'
})
export class NftimableContractService {

  /**
   * Instance of service
   */
  private NFTimableContractInstance: any;

  /**
   * Instance of service
   */
  private nftimableContractServiceInstance: any;

  constructor(private web3Service: Web3Service) { }

  private isReady=false;

  public bootstrap() {
    this.web3Service.artifactsToContract(votingArtifact).then(
      abstract => {
        abstract.deployed().then(
          deployed => {
            //affecte l'instance voting
            this.NFTimableContractInstance = deployed;
            console.log("nftimableContractInstance ready !");
            this.isReady=true;
            //FIXME catch with event websocket
            // setInterval(() => this.refreshVotingState(), 600);
          }
        )
      }
    );
  }

  getReady():boolean{
    return this.web3Service.isReady() && this.isReady;
  }

  /**
   * Create NFT collection.
   * @param id id of collection, allows to personalise the uri to the json.
   * @param amount number of NFT in collectible.
   * @param nftPriceUnit nftPriceUnit  price of one NFT in ETH
   * @param addressUser ethereum address requester
   */
  createCollectible(id, amount, nftPriceUnit): Observable<any>{
    return from(this.NFTimableContractInstance.createCollectible(id, amount, nftPriceUnit, { from: this.web3Service.getCurrentAccount() }));
  }

  /**
   * Activate resell for id Collection
   * @param id id of collection
   * @param activate : true for activate 
   * @param addressUser ethereum address requester
   */
  activateResellID(id, activate, addressUser): Observable<any>{
    return from(this.NFTimableContractInstance.activateResellID(id, activate,{ from: addressUser }));
  }

  /**
   * Buy
   * @param id id of collection
   * @param amountNFT number of NFT to Buy;
   * @param addressUser ethereum address requester
   */
  buy(id, amountNFT,addressUser): Observable<any>{
    return from(this.NFTimableContractInstance.buy(id, amountNFT, { from: addressUser, to: this.NFTimableContractInstance.address}));
  }

  /**
   * Withdraw customer after resell
   * @param addressUser 
   */
  withdraw(addressUser): Observable<any>{
    return from(this.NFTimableContractInstance.withdraw({ from: addressUser }));
  }

  /**
   * Get balance of
   * 
   * @param addressUserArray address to get amount, for one [user1,user1]
   * @param idCollectionArray collection to get amount, for one [idCollection1,idCollection2]
   * @param addressUser ethereum address requester
   */
  balance(addressUserArray:string[],idCollectionArray:number[],addressUser){
    return from(this.NFTimableContractInstance.balanceOfBatch(addressUserArray, idCollectionArray, { from: addressUser}));
  }


  /**
   * Launching by app.module.ts
   */
  // public bootstrap() {
  //   this.web3Service.artifactsToContract(votingArtifact).then(
  //     abstract => {
  //       abstract.deployed().then(
  //         deployed => {
  //           //affecte l'instance voting
  //           this.nftimableContractServiceInstance = deployed;

  //           console.log("nftimableContractServiceInstance ready !");

  //           //FIXME catch with event websocket
  //           // setInterval(() => this.refreshVotingState(), 600);
  //         }
  //       )
  //     }
  //   );
  // }
}
