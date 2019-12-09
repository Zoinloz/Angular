import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: '**', redirectTo:'/Error404' },
  { path: 'Error404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
