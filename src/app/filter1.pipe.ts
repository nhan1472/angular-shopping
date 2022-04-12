import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1',
  pure: false
})

export class Filter1Pipe implements PipeTransform {
  transform(items: any[], term: number): any {
    if(term==0)
    {
      return items
    }
      return items.filter(item => item.idmenu==term);
  }
}