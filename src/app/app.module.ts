import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { MatDialogModule } from '@angular/material';

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
    ModalLoginComponent
  ],
  entryComponents: [
    ModalDisclaimerComponent,
    ModalLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
