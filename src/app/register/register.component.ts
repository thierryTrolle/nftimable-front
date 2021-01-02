import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UserBo } from '../common/bo/user-bo';
import { AuthentificationService } from '../common/service/authentification.service';
import { LoginService } from '../common/service/login.service';
import { ModalDisclaimerComponent } from '../modal-disclaimer/modal-disclaimer.component';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:UserBo=new UserBo;

  constructor(
    public dialog: MatDialog, //popup dialog
    private loginService:LoginService,
    private route: ActivatedRoute,
    private authentificationService:AuthentificationService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if(id) this.activationAccount(id);
  }

  showDisclaimer(){
    const dialogRef = this.dialog.open(ModalDisclaimerComponent, {
      data: {
      },
      height: '700px',
      width: '1200px',
      panelClass: 'modal-disclaimer'
    });
  }

  loginPopup(){
    this.dialog.open(ModalLoginComponent, {
      data: {
      },
      height: '380px',
      width: '550px',
      panelClass: 'modal-login'
    });
  }

  activationAccount(id:string){
    // alert(id);
    this.loginService.activeAccount(id).subscribe(
      x=>{
        if(x && x.code==0){
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Account Activated',
              content: 'Thank you, now you can login.',
            },
            panelClass: 'modal-info'
          });

          this.user=new UserBo;
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
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later',
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

  test(){
    this.dialog.open(ModalInfoComponent, {
      data: {
        title: 'Account Activated',
        content: 'Thank you, now you sign in.'
      },
      height: '240px',
      width: '280px',
      panelClass: 'modal-info'
    });
  }

  register(){
    console.log(this.user);
    this.loginService.register(this.user).subscribe(
      x=>{
        if(x && x.code==0){
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Account Activated',
              content: 'Thank you, now you sign in.'
            },
            height: '240px',
            width: '280px',
            panelClass: 'modal-info'
          });
          this.user=new UserBo;
        }else if(!x){
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later'
            },
            panelClass: 'modal-info'
          });
        }else{
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later'
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
