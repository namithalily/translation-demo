import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverError'
})
export class ErrorPipe implements PipeTransform {

 transform(value: any): string {
        let rvalue: string = '';
        if (value !== null) {
            if (value === '0x01') {
                rvalue = 'error.0x01';
            }
            if (value === '0x02') {
                rvalue = 'error.0x02';
            }
            if (value === '0x03') {
                rvalue = 'error.0x03';
            }
        }
        return rvalue;
    }

}