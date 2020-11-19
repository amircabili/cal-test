import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';

const routes: Routes = [
  {
      path: '',
     redirectTo: '/home',
     pathMatch: 'full'
  },
  {path: 'home', component: HomePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
