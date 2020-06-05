import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverSuccess'
})
export class SuccessPipe implements PipeTransform {

 transform(value: any): string {
        let rvalue: string = '';
        if (value !== null) {
            if (value === '0x01') {
                rvalue = 'success.0x01';
            }
        }
        return rvalue;
    }

}