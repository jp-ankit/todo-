import { Pipe, PipeTransform } from '@angular/core';
import  moment from "moment";

/**
 * Generated class for the DateOrderPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dateOrder',
})
export class DateOrderPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let date = moment.utc(value).format('lll');
    // console.log(date);
    if (date == 'Invalid date') {
      return 'N/A';
    }
    else {
      return date;
    }
  }
}
