import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../common/service/web3.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(
    private web3Service: Web3Service,
  ) { }

  ngOnInit() {
  }


  connectWallet(){
    this.web3Service.bootstrapWeb3();
  }

}
