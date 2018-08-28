import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSidenavModule,
  MatChipsModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTabsModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { UsageComponent } from './usage/usage.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { GlobalErrorComponent } from './error-handler/global-error.component';
import { CustomErrorHandler } from './util/custom-error-handler';

import { UserDetailsService } from './services/user-details.service';
import { EntireXService } from './services/entirex-service';
import { NavbarService } from './services/navbar.service';
import { MenuService } from './services/navbar.service';
import { AnalyticsService } from './util/analytics.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { Logger } from './util/logger.service';
import { BHUserResolve } from './util/user-resolve';
import { AccountSelectorComponent } from './account-selector/account-selector.component';

import { DueDatePipe } from './pipes/due-date.pipe';
import { PastDueDatePipe } from './pipes/past-due-date.pipe';
import { AppService } from './util/app.service';
import { ApiService } from './services/api.service';

// entryComponents: [AccountSelectorComponent]
// this forms the interface between the container (who knows about security)
// and our angular code.  We can read this variable out and if in the case of
// a bad actor they reset it, it will get caught at the service layer preventing
// access to data which they should not get.
declare global {
  interface Window {
    BH?: {
      clientname: string;
    };
  }
}

@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
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
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
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
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [
    Logger,
    ApiService,
    AuthGuard,
    AuthService,
    UserDetailsService,
    EntireXService,
    AnalyticsService,
    NavbarService,
    MenuService,
    AppService,
    BHUserResolve,
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    }
    ],
  bootstrap: [AppComponent]
  // entryComponents: [AccountSelectorComponent]
})

export class AppModule {
}
