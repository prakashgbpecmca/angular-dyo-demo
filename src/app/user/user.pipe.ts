import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: any, searchText: string): any[] {
    if(!value)
    return [];
    if(!searchText)
    return value;
    
    searchText=searchText.toLowerCase();

    return value.filter(it=>{
      return it.partner.toLowerCase().includes(searchText);
    });
  }

}
