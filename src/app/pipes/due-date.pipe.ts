import { Pipe, PipeTransform } from '@angular/core';
/*
 * Calculates due date for account selector
*/
@Pipe({name: 'DueDate'})
export class DueDatePipe implements PipeTransform {
  transform(dueDate: number, date: any): any {
    date = new Date(new Date().setDate(new Date().getDate()-dueDate));
   if(date < new Date()) {
     return 'PAST DUE';
   }
   else {
    return 'Due by: ' + date.toLocaleDateString();
  }
  }
}
