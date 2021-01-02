import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UserBo } from '../common/bo/user-bo';
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
      width: '1200px'
    });
  }

  login(){
    this.dialog.open(ModalLoginComponent, {
      data: {
      },
      height: '380px',
      width: '550px'
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
              content: 'Thank you, now you can login.'
            }
          });

          this.user=new UserBo;
        }else if(!x){
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later'
            }
          });
        }else{
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later'
            }
          });
        }
      },
      error=>{
        console.log(error)
      }
    )
  }

  register(){
    console.log(this.user);
    this.loginService.register(this.user).subscribe(
      x=>{
        if(x && x.code==0){
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Account validation',
              content: 'Please check your mail and click on validation link.'
            }
          });
          this.user=new UserBo;
        }else if(!x){
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later'
            }
          });
        }else{
          this.dialog.open(ModalInfoComponent, {
            data: {
              title: 'Connection trouble',
              content: 'Something goes wrong, please retry later'
            }
          });
        }
      },
      error=>{
        console.log(error)
      }
    )
  }
}
