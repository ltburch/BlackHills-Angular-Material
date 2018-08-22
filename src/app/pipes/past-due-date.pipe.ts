import { Pipe, PipeTransform } from '@angular/core';
/*
 * Calculates due date for account selector
*/
@Pipe({name: 'PastDueDate'})
export class PastDueDatePipe implements PipeTransform {
  transform(dueDate: any, days: number): any {
    dueDate = new Date(new Date().setDate(new Date().getDate()-days));
    if(dueDate < new Date()) {
      return 'past-due';
    }
  }
}
