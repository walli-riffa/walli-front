import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import {CustomersListComponent} from './dashbord/customers-list/customers-list.component';
import {CustomersNewComponent} from './dashbord/customers-new/customers-new.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
