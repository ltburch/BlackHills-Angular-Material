import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NavbarService } from '../services/navbar.service';


@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss']
})
export class AccountSelectorComponent implements OnInit {
  searchControl = new FormControl();
  options: string[] = ['1397 Timothy Ridge Dr.', '21353467', '24524 Florent Ave', '1105 Central Parkway'];
  filteredOptions: Observable<string[]>;
  showAutocomplete: boolean = false;

  constructor( public secondaryNav: NavbarService ) {}

  ngOnInit() {

    setTimeout(() => {
      //this.secondaryNav.show(); //show secondary navigation on this page.
    });

    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  //show options dropdown on input.
  updatedVal(e) {
    if(e && e.length >= 1) {
       this.showAutocomplete = true;
    } else {
       this.showAutocomplete = false;
    }
  }



}
