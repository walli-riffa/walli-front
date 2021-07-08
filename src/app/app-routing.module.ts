import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { LoginComponent } from './dashbord/login/login.component';
import {CustomersListComponent} from './dashbord/customers-list/customers-list.component';
import {CustomersNewComponent} from './dashbord/customers-new/customers-new.component';
import { RegisterLoginComponent } from './dashbord/register-login/register-login.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'clientes',
    component: CustomersListComponent
  },
  {
    path: 'clientes/novo-cliente',
    component: CustomersNewComponent
  },
  {
    path: 'clientes/cliente/:id',
    component: CustomersNewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastrar',
    component: RegisterLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
