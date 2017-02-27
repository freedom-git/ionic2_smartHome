import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(input: Array<any>, serchText: string): Array<any> {
        if (serchText && serchText.trim() != '') {
            let output;
            output = input.filter((item) => {
                return (item.toLowerCase().indexOf(serchText.toLowerCase()) > -1);
            });
            return output;
        }else{
            return input;
        }
    }
}