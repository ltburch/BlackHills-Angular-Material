import { Observable, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

showSecondaryNav() {
  this.show();
}


}
