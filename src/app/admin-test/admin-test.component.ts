import { Component, OnInit } from '@angular/core';
import { NftimableContractService } from '../common/service/nftimable-contract.service';
import { Web3Service } from '../common/service/web3.service';

@Component({
  selector: 'app-admin-test',
  templateUrl: './admin-test.component.html',
  styleUrls: ['./admin-test.component.css']
})
export class AdminTestComponent implements OnInit {

  public id:any;
  public  amount:any; 
  public  nftPriceUnit:any; 

  constructor(
    private web3Service: Web3Service,
    private nftimableContractService:NftimableContractService
  ) { }

  ngOnInit() {
  }


  connectWallet(){
    this.web3Service.bootstrapWeb3();
    this.nftimableContractService.bootstrap();
  }

  createCollection(){
    this.nftimableContractService.createCollectible(this.id, this.amount, this.nftPriceUnit).subscribe(
      result => {
        console.log(result);
        alert("collectible id"+this.id+"created");
        this.id=null;
        this.amount=null;
        this.nftPriceUnit=null;
      },
      error => {
        console.log(error);
      }
    )
  }
}
