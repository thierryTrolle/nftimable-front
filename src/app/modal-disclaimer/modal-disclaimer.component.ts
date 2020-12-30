import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-disclaimer',
  templateUrl: './modal-disclaimer.component.html',
  styleUrls: ['./modal-disclaimer.component.css']
})
export class ModalDisclaimerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
