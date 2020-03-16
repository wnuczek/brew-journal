import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BrewsComponent }      from './brews/brews.component';
import { BrewDetailComponent }  from './brew-detail/brew-detail.component';
import { LoginComponent }  from './login/login.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BrewDetailComponent },
  { path: 'brews/:id', component: BrewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'brews', component: BrewsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}