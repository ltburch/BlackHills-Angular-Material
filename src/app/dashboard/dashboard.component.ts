import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
// NavbarService is used to show/hide the secondary navigation
import { NavbarService } from '../services/navbar.service';
import { MenuService } from '../services/navbar.service';
import { BHUserResolve } from '../util/user-resolve';
import { Logger } from '../util/logger.service';
// import {MatDialog, MatDialogRef} from '@angular/material';
// import { AccountSelectorComponent } from '../account-selector/account-selector.component';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true; // property for form element


  // constructor(public snackBar: MatSnackBar, private dialog: MatDialog) {}

  constructor(
    public snackBar: MatSnackBar,
    public secondaryNav: NavbarService,
    public menu: MenuService,
    private userResolve: BHUserResolve,
    private logger: Logger) {}

  ngOnInit() {

    setTimeout(() => {
      this.secondaryNav.hide(); //hide secondary navigation on this page.
      this.menu.show(); //show hamburger menu
    });
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


   openSnackBar(message: string, action: string) {
     this.snackBar.open(message, action, {
       duration: 2000,
     });
   }
}
