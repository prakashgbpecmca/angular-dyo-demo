import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dyodate'
})
export class DyodatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
