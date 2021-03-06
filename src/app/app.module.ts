import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharteComponent } from './charte/charte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { MarketComponent } from './market/market.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ModalDisclaimerComponent } from './modal-disclaimer/modal-disclaimer.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { CollectionComponent } from './collection/collection.component';
import { Web3Service } from './common/service/web3.service';
import { NftimableContractService } from './common/service/nftimable-contract.service';
import { AdminTestComponent } from './admin-test/admin-test.component';


@NgModule({
  declarations: [
    AppComponent,
    CharteComponent,
    HomeComponent,
    BlogComponent,
    MarketComponent,
    NavbarComponent,
    RegisterComponent,
    ModalDisclaimerComponent,
    ModalLoginComponent,
    ModalInfoComponent,
    CollectionComponent,
    AdminTestComponent
  ],
  entryComponents: [
    ModalDisclaimerComponent,
    ModalLoginComponent,
    ModalInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    Web3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
