import { Pipe, PipeTransform } from '@angular/core';
/*
 * Calculates due date for account selector
*/
@Pipe({name: 'DueDate'})
export class DueDatePipe implements PipeTransform {
  transform(dueDate: any, days: number): any {
    dueDate = new Date(new Date().setDate(new Date().getDate()-days));
   if(dueDate < new Date()) {
     return 'PAST DUE';
   }
   else {
    return 'Due by: ' + dueDate.toLocaleDateString();
  }
  }
}
