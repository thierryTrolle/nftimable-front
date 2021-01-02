import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UserBo } from '../common/bo/user-bo';
import { AuthentificationService } from '../common/service/authentification.service';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  public user:UserBo=new UserBo;

  constructor(
    public dialog: MatDialog, //popup dialog
    private authentificationService:AuthentificationService,
    private router: Router,
    private dialogRef: MatDialogRef<ModalLoginComponent>
  ) { }

  ngOnInit() {
  }

  login(){
    this.authentificationService.signIn(this.user).subscribe(
      x=>{
        if(x && x.code==0){
          sessionStorage.setItem("auth-token",x.object);
          this.user=new UserBo;
          this.dialogRef.close();
          this.router.navigate(['/home'])
        }else if(!x){
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later',
            },
            panelClass: 'modal-info'
          });
        }else{
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Request error',
              content: x.comment,
            },
            panelClass: 'modal-info'
          });
        }
      },
      error=>{
        console.log(error)
      }
    )
  }
}
