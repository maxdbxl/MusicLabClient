import { Pipe, PipeTransform } from '@angular/core';
import { EVENT_TYPE } from '../constants/event-type.constants';

@Pipe({
  name: 'event'
})
export class EventPipe implements PipeTransform {

  transform(value: string, args: string): unknown {
    return EVENT_TYPE[value][args];
  }

}
