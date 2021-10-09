import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: String, args?: any): string {
    switch (value) {
      case '1':
        return 'W'
      case '0':
        return 'L'
      default:
        return String()
    }
  }

}
