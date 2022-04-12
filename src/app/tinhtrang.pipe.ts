import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tinhtrang',
  pure: false
})

export class TinhtrangPipe implements PipeTransform {
  transform(items: any[], term: number): any {
    if(term==4)
    {
      return items
    }
      return items.filter(item => item.ttr==term);
  }
}