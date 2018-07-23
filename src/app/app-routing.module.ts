import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from  './dashboard/dashboard.component'
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [{ path: 'dashboard', component: DashboardComponent},
  { path: 'billing', component: BillingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
