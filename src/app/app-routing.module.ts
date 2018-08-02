import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { UsageComponent } from './usage/usage.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';


//  { path: 'login', component: LoginComponent },
const routes: Routes = [
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'billing', component: BillingComponent, canActivate: [AuthGuard] },
  { path: 'usage', component:  UsageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'customer-service', component: CustomerServiceComponent, canActivate: [AuthGuard] },
  // route unrecognized back to dashboard
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true,   useHash: true } ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
