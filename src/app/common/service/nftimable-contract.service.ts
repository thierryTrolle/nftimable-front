import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';


declare let require: any;
const votingArtifact = require('../../../../build/contracts/NFTimableContract.json');

@Injectable({
  providedIn: 'root'
})
export class NftimableContractService {

  /**
   * Instance of service
   */
  private nftimableContractServiceInstance: any;

  constructor(private web3Service: Web3Service) { }

  /**
   * Launching by app.module.ts
   */
  public bootstrap() {
    this.web3Service.artifactsToContract(votingArtifact).then(
      abstract => {
        abstract.deployed().then(
          deployed => {
            //affecte l'instance voting
            this.nftimableContractServiceInstance = deployed;

            console.log("nftimableContractServiceInstance ready !");

            //FIXME catch with event websocket
            // setInterval(() => this.refreshVotingState(), 600);
          }
        )
      }
    );
  }
}
