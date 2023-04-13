import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';


@Pipe({
  name: 'dayjs',
})
export class DayjsPipe implements PipeTransform {
  transform(date: Date, format: any): string {
    return dayjs(date).format(format);
  }
}
