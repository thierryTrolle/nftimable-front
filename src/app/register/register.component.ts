import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalDisclaimerComponent } from '../modal-disclaimer/modal-disclaimer.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public dialog: MatDialog, //popup dialog
  ) { }

  ngOnInit() {
  }

  showDisclaimer(){
    const dialogRef = this.dialog.open(ModalDisclaimerComponent, {
      data: {
      },
      height: '700px',
      width: '1200px'
    });
  }

}
