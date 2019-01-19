import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dyocustomer'
})
export class DyocustomerPipe implements PipeTransform {

  transform(value: any, customerName: string): any[] {
    if(!value)
    return [];
    if(!customerName)
    return value;
    
    customerName=customerName.toLowerCase();

    return value.filter(it=>{
      return it.customer.toLowerCase().includes(customerName);
    });
  }


}
