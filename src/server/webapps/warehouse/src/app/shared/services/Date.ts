import {Injectable} from '@angular/core';

@Injectable()
export class DateService {

  // Attributes
    
  // Methods
  constructor () {
  }

  convertDate(date: any): any {
      if(typeof(date) == 'number') {
        let newDate: Date = new Date(date);
        return newDate.getDate() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getFullYear();
      }
      else{
        date = date.split('-');
        date = date[1] + '/' + date[2] + '/' + date[0];
        let newDate: Date = new Date(date);
        return newDate.getTime();
      }
      
  }
  
}
