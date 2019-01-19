import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dyoorder'
})
export class DyoorderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
