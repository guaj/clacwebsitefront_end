import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {ActiviteComponent} from './activite/activite.component';
import {HistoireComponent} from './histoire/histoire.component';
import {MembreComponent} from './membre/membre.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'acceuil', component: HistoireComponent},
  { path: 'contact', component: ContactComponent},
  { path: '',  redirectTo: 'acceuil', pathMatch: 'full' },
  {path: 'aide', component: HomeComponent},
  {path: 'activite', component: ActiviteComponent},
  {path: 'membre', component: MembreComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
