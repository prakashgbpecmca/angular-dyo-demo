import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: any, searchText: string): any[] {
    if(!value)
    return [];
    if(!searchText)
    return value;
    
    searchText=searchText.toLowerCase();

    return value.filter(it=>{
      return it.productName.toLowerCase().includes(searchText);
    });
  }


}
