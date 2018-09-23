import { Pipe, PipeTransform, Output } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'datestamp'
})
export class datestampPipe implements PipeTransform {
    transform(outputValue: string, inputValue: string ): string {
        let isDate= new Date(outputValue);
        let hasDate = moment(isDate).format('L');
        return hasDate;
    }
}