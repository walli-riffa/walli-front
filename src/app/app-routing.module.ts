import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { LoginComponent } from './dashbord/login/login.component';
import {CustomersListComponent} from './dashbord/customers-list/customers-list.component';
import {CustomersNewComponent} from './dashbord/customers-new/customers-new.component';
import { RegisterLoginComponent } from './dashbord/register-login/register-login.component';
import { DataClientComponent } from './dashbord/data-client/data-client.component';
import {AuthDashGuard} from './shared/guards/auth-dash-guard';
import {AuthVerifyLogin} from './shared/guards/auth-not-logged-guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'clientes',
    component: CustomersListComponent,
    canActivate: [AuthDashGuard],
  },
  {
    path: 'clientes/novo-cliente',
    component: CustomersNewComponent,
    canActivate: [AuthDashGuard],
  },
  {
    path: 'clientes/cliente/:id',
    component: CustomersNewComponent,
    canActivate: [AuthDashGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthVerifyLogin]
  },
  {
    path: 'cadastrar',
    component: RegisterLoginComponent
  },
  {
    path: 'numeros-contratados/:id',
    component: DataClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
