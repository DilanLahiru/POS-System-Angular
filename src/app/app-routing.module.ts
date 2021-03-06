import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemesComponent } from './view/manage-itemes/manage-itemes.component';
import { ManageOrderComponent } from './view/manage-order/manage-order.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: ManageCustomersComponent
  },
  {
    path: 'items',
    component: ManageItemesComponent
  },
  {
    path: 'orders',
    component: ManageOrderComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
