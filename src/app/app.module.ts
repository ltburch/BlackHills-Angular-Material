import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule,
         MatDialogModule, MatSidenavModule, MatChipsModule, MatSnackBarModule, MatExpansionModule,
         MatTabsModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
         MatAutocompleteModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { UsageComponent } from './usage/usage.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CustomerServiceComponent  } from './customer-service/customer-service.component';

import { UserDetailsService } from './services/user-details.service';
import { EntireXService } from './services/entirex-service';
import { NavbarService } from './services/navbar.service';
import { AnalyticsService } from './util/analytics.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { Logger } from './util/logger.service';
import { AccountSelectorComponent } from './account-selector/account-selector.component';

import {DueDatePipe} from './pipes/due-date.pipe';
import {PastDueDatePipe} from './pipes/past-due-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    DashboardComponent,
    BillingComponent,
    UsageComponent,
    ProfileComponent,
    LoginComponent,
    CustomerServiceComponent,
    AccountSelectorComponent,
    DueDatePipe,
    PastDueDatePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  providers: [
    Logger,
    AuthGuard,
    AuthService,
    UserDetailsService,
    EntireXService,
    AnalyticsService,
    NavbarService
  ],
  bootstrap: [AppComponent]
  // entryComponents: [AccountSelectorComponent]
})
export class AppModule { }
