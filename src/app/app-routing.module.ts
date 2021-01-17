import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharteComponent } from './charte/charte.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { MarketComponent } from './market/market.component';
import { RegisterComponent } from './register/register.component';
import { CollectionComponent } from './collection/collection.component';
import { AdminTestComponent } from './admin-test/admin-test.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },//redirection par defaut
  { path: 'charte', component: CharteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'market', component: MarketComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:id',component: RegisterComponent},
  { path: 'collection',component: CollectionComponent},
  { path: 'admin',component: AdminTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
