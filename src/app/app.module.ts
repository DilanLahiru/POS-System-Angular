import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemesComponent } from './view/manage-itemes/manage-itemes.component';
import { ManageOrderComponent } from './view/manage-order/manage-order.component';
import { SidebarComponent } from './view/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCustomersComponent,
    ManageItemesComponent,
    ManageOrderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
