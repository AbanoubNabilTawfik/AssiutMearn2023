import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptCurrency'
})
export class EgyptCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + "EGP";
  }

}
