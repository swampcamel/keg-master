import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "filterKegs",
  pure: false
})

export class FilterKegPipe implements PipeTransform {
  transform(input: Keg[], menuChoice) {
    var output: Keg[] = [];
    if(menuChoice === "currentKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].empty === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if ( menuChoice === "emptyKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].empty === true ) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
